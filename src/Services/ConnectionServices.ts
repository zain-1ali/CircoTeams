import { ref, query, onValue, orderByChild, equalTo } from "firebase/database";
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
