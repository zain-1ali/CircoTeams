import { get, ref, query, onValue, orderByChild, equalTo, update } from "firebase/database";
import { db } from "../firebase";


export const getDevices = (id: any, cb: Function) => {
  console.log(id)
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
    const result:any = [];

    if (data) {
      Object.values(data).forEach((user: any) => {
        if (user.tagUid && Array.isArray(user.tagUid)) {
          user.tagUid.forEach((tag:any) => {
            result.push({
              device: tag, 
              id: user.id, 
              profileUrl: user.profileUrl || "", 
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

export const removeMultipleDevices = async (tagIds: Array<string>, callBackFunc: () => void) => {
  try {
    callBackFunc();
    // Group tags by username to reduce database fetches
    const userTagsMap: { [username: string]: string[] } = {};

    for (const tagId of tagIds) {
      const tagRef = query(ref(db, "/Tag"), orderByChild("tagId"), equalTo(tagId));
      const snapshot = await get(tagRef);
      const tagData = snapshot.val();

      if (tagData) {
        const tagKey = Object.keys(tagData)[0];
        const tagEntry = tagData[tagKey];
        tagEntry.status = false;
        console.log(tagEntry);
        // await update(ref(db, `/Tag/${tagKey}`), { status: false, username: null });

        if (tagEntry.username) {
          if (!userTagsMap[tagEntry.username]) {
            userTagsMap[tagEntry.username] = [];
          }
          userTagsMap[tagEntry.username].push(tagId);
        }
      }
    }
    console.log(userTagsMap);
    // Now handle the user tag updates
    const userPromises = Object.entries(userTagsMap).map(async ([username, tagsToRemove]) => {
      const userRef = query(ref(db, "/User"), orderByChild("username"), equalTo(username));
      const userSnapshot = await get(userRef);
      const userData = userSnapshot.val();

      if (userData) {
        const userKey = Object.keys(userData)[0];
        const userEntry = userData[userKey];

        // Filter out all tags for this user that match any in tagsToRemove
        const updatedTagUid = userEntry.tagUid.filter(
          (device: any) => !tagsToRemove.includes(device?.tagId)
        );

        // Update the User table
        // await update(ref(db, `/User/${userKey}`), { tagUid: updatedTagUid });
      }
    });

    await Promise.all(userPromises);
    callBackFunc();
  } catch (error) {
    console.error("Error completing removal:", error);
  }
};






