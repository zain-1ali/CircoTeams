import { useState } from "react";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase"; // Your firebase configuration
import { FirebaseError } from "firebase/app";

interface UseCreateFirebaseUser {
  firebaseUser: User | null; // Firebase User object or null initially
  error: string;
  createUser: (email: string, password: string) => Promise<void>; // Return a promise
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

      // Set the firebase user after the operation succeeds
  
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
