import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebase";
import profilePlchldr from "../assets/images/profilePlchldr.png";

export const getSingleChildFromDb=(collectionName:string,orderBy:string,id:any,callBackFunc:any)=>{
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

  export const appendBucketPath = (path:string) => {
    let url = "";
    if (path !== "" && path !== undefined && path.startsWith("gs://")) {
      const filterUrl = path?.replace("gs://wajjcard-7be7d.appspot.com/", "");
      url = `https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/${filterUrl}?alt=media`;
    }
    else if(path !== "" && path !== undefined && path.startsWith("https"))
    {
      return path;
    }
    else
    {
      url = profilePlchldr;
    }
    return url;
  };

  export const timestampToDate = (timestampInSeconds: number): string => {
    
    const timestampInMilliseconds = timestampInSeconds;
    const date = new Date(timestampInMilliseconds);
  
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
  
    return formattedDate;
  };
  



