import { equalTo, onValue, orderByChild, query } from "firebase/database";
import { db } from "../firebase";
import { ref } from "firebase/database";



export const getAnalytics=async(id:string|string[],type:string,setAnalytics:any,setLoading:any)=>{
   setLoading(true)
if(type==="user" && typeof id==="string"){
 
     const starCountRef = query(
            ref(db, "Analytic"),
            orderByChild("userid"),
            equalTo(id)
          );
          onValue(starCountRef, async (snapshot:any) => {
            const data = await snapshot.val();
            if(data){
   setAnalytics(Object.values(data)?.[0]);
            setLoading(false)
            console.log("data",data);
            }else{
              setAnalytics(undefined);
              setLoading(false)
            }
  
          });
}else{
    if (typeof id === "object"){
        const userIds = Object.values(id);
        if (userIds && userIds.length > 0) {
          let membersArray:any = [];
    
         type FetchAnalytics = (elm: string) => Promise<void>;

const fetchAnalytics: FetchAnalytics = (elm) => {
  return new Promise<void>((resolve, reject) => {
    const starCountRef = query(
      ref(db, "/Analytic"),
      orderByChild("userid"),
      equalTo(elm)
    );

    onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          membersArray.push(Object.values<object>(data)[0]);
        }
        resolve();
      },
      (error) => {
        reject(error);
       
      }
    );
  });
}
    
          try {
            await Promise.all(userIds.map(fetchAnalytics));
    
            if (membersArray.length > 0){
              const summedData:any = {};
    
              membersArray.forEach((obj:any) => {
                for (let key in obj) {
                  if (summedData[key] === undefined && key !== "links") {
                    summedData[key] = 0;
                  }
    
                  if (summedData[key] === undefined && key === "links") {
                    summedData[key] = [];
                  }
    
                  if (key !== "links") {
                    summedData[key] += obj[key];
                  } else {
                    summedData[key] = [...summedData[key], ...obj[key]];
                  }
                }
              });
    
              setAnalytics({
                analyticsObject: {
                  ...summedData,
                  links: summedData?.links?.flat(),
                },
              });
            } 
            else {
           setAnalytics(undefined)
            }
          }catch(error){
            console.error(error);
          }finally {
            setLoading(false);
             setAnalytics(undefined)
          }
        } 
      }else{
        setAnalytics(undefined)
        setLoading(false)
      }
}
}