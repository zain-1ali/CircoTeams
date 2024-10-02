import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebase";

export const getSingleChildFromDb=(collectionName:string,orderBy:string,id:any,callBackFunc:any)=>{
    console.log(id)
    const starCountRef = query(
        ref(db, collectionName),
        orderByChild(orderBy),
        equalTo(id)
      );
      onValue(starCountRef, async (snapshot) => {
        const data = await snapshot.val();
        callBackFunc(data);
        console.log("data",data);
        // console.log("testing data");
        MediaKeyStatusMap;
      });
}



export const getMultipleChilds = async (collectionName:string,orderBy:string,id:string,callBackFunc:any, setloading:any) => {
    setloading(true);
    const starCountRef = query(
      ref(db, collectionName),
      orderByChild(orderBy),
      equalTo(id)
    );
    onValue(starCountRef, async (snapshot) => {
      const data = await snapshot.val();
      if (data) {
        callBackFunc(data);
        console.log(data);
        setloading(false);
        console.log("testing data");
      } else {
        setloading(false);
      }
  
      MediaKeyStatusMap;
      // setmylist(Object.values(data));
  
      // setfiltered(Object.values(data));
  
      // updateStarCount(postElement, data);
    });
  };



