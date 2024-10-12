import { uploadString, getDownloadURL, ref as sRef } from "firebase/storage";
import { storage } from "../firebase"; 
import { useCallback } from "react";

export const useUploadFile = () => {
const uploadFile = useCallback(
  (fileBase64: string, fileName: string): Promise<string | null> => {
    console.log("uploading start");

    const storageRef = sRef(storage, fileName);

    return uploadString(storageRef, fileBase64, "base64", {
      contentType: "image/png",
    })
      .then(() => {
        return getDownloadURL(storageRef);  
      })
      .then((url) => {
        console.log("uploading end");
        return url;  
      })
      .catch((error) => {
        console.error("File upload error:", error);
        return null;  
      });
  },[])

  return { uploadFile };
};
