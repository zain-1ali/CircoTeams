import { ref, query, onValue, orderByChild, equalTo, push, update } from "firebase/database";
import { db } from "../firebase";

export const getConnections = (id: any, cb: Function,orderByChildKey:any="parentId") => {
  // Construct a query to filter contacts by the parentId
  const starCountRef = query(ref(db, "/Contacts"), orderByChild(orderByChildKey), equalTo(id));

  // Listen to the query result with onValue
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      cb(Object.values(data));
    } else {
      cb([]);
    }
    // console.log("contacts", data);
  });
};
export const addConnection = (data: any, cb: Function,showSuccess:any,showError:any) => {
  const parentId = localStorage.getItem("circoCompanyUid");
  const isAdmin = localStorage.getItem("isAdmin") || "true";

  const timestamp = Date.now();
  const toSaveData = isAdmin === "true" ? { ...data, parentId,date:timestamp } : { ...data, userid: parentId,date:timestamp };
  const newRef = push(ref(db, `Contacts/`), { ...toSaveData });
  console.log("newRef")
  if (newRef.key) {
    console.log("newRef3")
    update(ref(db, `Contacts/${newRef.key}`), { id: newRef.key })
      .then(() => {
        showSuccess("New contact added successfully");
        cb(); 
      })
      .catch((error) => {
        console.log("the error",error)
        showError("Error adding contact");
      });
  } else {
    console.log("newRef2")
    showError("Error adding contact");
  }
};

export const updateConnection=(data:any, id:string,showSuccess:any,showError:any)=>{
  if(data){
      update(ref(db, `Contacts/${id}`),{...data}).then(()=>{
          // setLoading(false)
          showSuccess("Information updated sucessfully")
      }).catch((Error)=>{
          showError("Something went wrong")
          console.log("the error",Error)
      })
  }
}
