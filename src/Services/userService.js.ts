// import { UserProfile } from "firebase/auth"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase"
import { ref, update } from "firebase/database"
import axios from "axios";

export const createNewUser = async (
  data: any,
  credentials: any,
  showError: any,
  showSuccess: any,
  navigate: any,
  setLoading: any
) => {
  setLoading(true);

  try {
    // Create user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, data?.email, credentials?.password);
    const user = userCredential.user;

    // Store user UID in local storage
    localStorage.setItem("circoCompanyUid", user.uid);

    // Update user data in Firebase Realtime Database
    await update(ref(db, `User/${user.uid}`), { ...data, id: user.uid });

    // API call for creating account
    await axios.post(`https://wallet.circo.me/api/createAccount`, {
      email: data?.email,
      password: credentials?.password,
      token: "12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj",
    });

    // Notify success to the user
    showSuccess("Account Created Successfully");
    setLoading(false);

    // Redirect to profile page
    setTimeout(() => {
      navigate("/myprofiles");
      window.location.reload();
    }, 1000);

    console.log("Account Created Successfully");
  } catch (err: any) {
    // Handle errors
    setLoading(false);
    console.error(err);
    const error = err.message;

    if (error.includes("Firebase: Error (auth/invalid-email).")) {
      showError("Please enter a valid email");
    } else if (error.includes("Firebase: Error (auth/email-already-in-use).")) {
      showError("Email already exists");
    } else if (error.includes("Firebase: Password should be at least 6 characters (auth/weak-password).")) {
      showError("Password must be at least 6 characters");
    } else {
      showError("An error occurred. Please try again.");
    }
  }
};


export const LoginUser = async (credentials: any, showError: any, showSuccess: any, navigate: any, setLoading: any) => {
  if (credentials.email && credentials.password) {
    setLoading(true)
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem("circoCompanyUid", user.uid)
        showSuccess("Login successfully")
        setTimeout(() => {

          navigate("/myprofiles")
          window.location.reload()
        }, 1000)
      }).catch((error) => {

        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          showError("Invalid credentials")
        }
        else if (error.message === "Firebase: Error (auth/invalid-email).") {
          showError("Invalid email")
        }
        setLoading(false)
        console.log(error.message);

      })
  } else {
    showError("Email and Password are required to login")
  }
}


export const logoutUser = async () => {
  auth.signOut().then(() => {
    // navigate("/")
    localStorage.removeItem("circoCompanyUid")
    window.location.reload()

  }).catch((error) => {
    console.log(error.message);
  })
}
export const SendResetLink = (email: any, showError: any, showSuccess: any, setEmailCallback: any) => {

  sendPasswordResetEmail(auth, email)
    .then(() => {
      setEmailCallback();
      showSuccess("An email have been sent to you, please verify to change password");
    })
    .catch((error) => {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        showError("Email not found.")
      }
    });
};

