import { equalTo, onValue, orderByChild, query, ref, remove } from "firebase/database";
import { db } from "../firebase";
import profilePlchldr from "../assets/images/profilePlchldr.png";
import axios from "axios";

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



export const getMultipleChilds = async (collectionName:string,orderBy:string,id:string | null,callBackFunc:any, setloading:any) => {
    setloading(true);

    try {
      const starCountRef = query(
        ref(db, collectionName),
        orderByChild(orderBy),
        equalTo(id)
      );
      onValue(starCountRef, async (snapshot) => {
        const data = await snapshot.val();
        if (data) {
          console.log(orderBy,data);
          callBackFunc(data);
          console.log(data);
          setloading(false);
          // console.log("testing data");
        } else {
          console.log(orderBy,"data not found")
          setloading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
    
    
  };
  export const removeSingleChildFromDb=(collectionName:string,id:any,callBackFunc:any)=>{
    
    remove(ref(db, `${collectionName}/${id}`))
  .then(() => {
    callBackFunc(); 
  })
  .catch((error) => {
    console.error("Error removing data:", error); // Handle any errors
  });

}
export const DeleteProfileByApi = async (id: any, callBackFunc: any) => {
  try {
    if (!id) {
      throw new Error("ID is required to delete the profile.");
    }
    const response = await axios.post(`https://wallet.circo.me/api/deleteAccount`, {
       id: id,
       token:"12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj" 
      });
    if (response.status === 200) {
      console.log("Profile deleted successfully:", response.data);
      callBackFunc(true);
    } else {
      console.error("Failed to delete profile:", response);
      callBackFunc(false);
    }
  } catch (error: any) {
    console.error("Error while deleting the profile:", error.message || error);
    callBackFunc(false);
  }
};


export const removeMultipleChildFromDb = ( collectionName: string,  ids: Array<string>, callBackFunc: () => void 
) => {
  const promises = ids?.map((id) => {
    return remove(ref(db, `${collectionName}/${id}`)) 
      .catch((error) => {
        console.error("Error removing data:", error); 
      });
  });
  Promise.all(promises)
    .then(() => {
      callBackFunc(); 
    })
    .catch((error) => {
      console.error("Error completing removal:", error); 
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
  



