import { update, ref } from "firebase/database";
import { db } from "../firebase"; // Your firebase configuration

const useUpdateDatabase = <T extends Record<string, any>>() => {
  const updateDb = async (path: string, data: T): Promise<void> => {
    console.log("start updating");
    
    try {
      await update(ref(db, path), data);
    } catch (err) {
      console.error("Database update error:", err);
    }
  };

  return { updateDb };
};

export default useUpdateDatabase;
