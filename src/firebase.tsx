import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getDatabase, Database } from "firebase/database";
// If you need Firestore in the future
// import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuypCCjETZjWn0Z7PnzZOzUplWORd0gZk",
  authDomain: "wajjcard-7be7d.firebaseapp.com",
  databaseURL: "https://wajjcard-7be7d-default-rtdb.firebaseio.com",
  projectId: "wajjcard-7be7d",
  storageBucket: "wajjcard-7be7d.appspot.com",
  messagingSenderId: "981642627092",
  appId: "1:981642627092:web:f861e2da8cf66058c47f01",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export the required services with type annotations
export const db: Database = getDatabase(app);
// export const firestore: Firestore = getFirestore(app) // If using Firestore in the future
export const auth: Auth = getAuth(app);
export const storage: FirebaseStorage = getStorage(app);
