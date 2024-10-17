import { ref, query, onValue, orderByChild, equalTo, push, update } from "firebase/database";
import { db } from "../firebase";

export const getConnections = (id: any, cb: Function) => {
  // Construct a query to filter contacts by the parentId
  const starCountRef = query(ref(db, "/Contacts"), orderByChild("parentId"), equalTo(id));

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
  const timestamp = Date.now();
  const newRef = push(ref(db, `Contacts/`), { ...data, parentId, date: timestamp });
  
  if (newRef.key) {
    update(ref(db, `Contacts/${newRef.key}`), { id: newRef.key })
      .then(() => {
        showSuccess("New contact added successfully");
        cb(); 
      })
      .catch((error) => {
        console.log("the error",Error)
        showError("Error adding contact");
      });
  } else {
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
