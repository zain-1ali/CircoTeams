import { ref, query, onValue, orderByChild, equalTo } from "firebase/database";
import { db } from "../firebase";


export const getDevices = (id: any, cb: Function) => {
  const companyId = localStorage.getItem("circoCompanyUid") || "";

  // Determine the query based on id
  const starCountRef = query(
    ref(db, "/User"),
    orderByChild(id === companyId ? "parentID" : "id"),
    equalTo(id)
  );

  // Listen to the query result with onValue
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const result = [];

    if (data) {
      Object.values(data).forEach((user: any) => {
        if (user.tagUid && Array.isArray(user.tagUid)) {
          user.tagUid.forEach((tag:any) => {
            result.push({
              device: tag, 
              id: user.id, 
              name: `${user.firstName || ""} ${user.secondName || ""}`.trim(), // Full name
            });
          });
        }
      });
      cb(result);
    } else {
      cb([]);
    }

    console.log("Transformed Data:", result);
  });
};


