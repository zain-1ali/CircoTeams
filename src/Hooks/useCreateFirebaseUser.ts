import { useState } from "react";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase"; 
import { FirebaseError } from "firebase/app";

interface UseCreateFirebaseUser {
  firebaseUser: User | null;
  error: string;
  createUser: (email: string, password: string) => Promise<void>; 
}

const useCreateFirebaseUser = (): UseCreateFirebaseUser => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  const createUser = async (email: string, password: string): Promise<void> => {
    try {
      console.log("Attempting to create user");

      // Await the async function to create a user
      createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        setFirebaseUser(userCredential.user);
        console.log("User created:", userCredential.user);
      });
  
    } catch (error: unknown) {
      // Handle the Firebase error
      if (error instanceof FirebaseError) {
        console.error("Error creating user:", error.message);
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return { firebaseUser, error, createUser };
};

export default useCreateFirebaseUser;
