// import { UserProfile } from "firebase/auth"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase"
import { ref, update } from "firebase/database"

export const createNewUser = async (data:any,credentials:any,showError:any,showSuccess:any,navigate:any,setLoading:any) => {
setLoading(true)
    createUserWithEmailAndPassword(auth, data?.email, credentials?.password).then((userCredential)=>{
      const user=userCredential.user
      localStorage.setItem("circoCompanyUid",user.uid)
      // console.log(user)
      update(
        ref(db, `User/${user.uid}`),{...data,id:user.uid}).then(()=>{
          showSuccess("Account Created Successfuly")
          setLoading(false)
          setTimeout(()=>{
navigate("/myprofiles")
window.location.reload()
          },1000)
          console.log("Account Created Successfuly")
        })
    }).catch((err)=>{
      setLoading(false)
      console.log(err)
      const error=err.message
      if (error) {
        if (error.includes("Firebase: Error (auth/invalid-email)."))
          showError("Please enter a valid email");
        else if (
          error.includes("Firebase: Error (auth/email-already-in-use).")
        )
          showError("Email already exists");
        else if (
          error.includes(
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          )
        )
          showError("Password must be at least 6 characters");
        return;
      }
    });
































































}

export const LoginUser=async(credentials:any,showError:any,showSuccess:any,navigate:any,setLoading:any)=>{
if(credentials.email && credentials.password){
  setLoading(true)
  signInWithEmailAndPassword(auth, credentials.email, credentials.password)
  .then((userCredential) => {
    const user=userCredential.user
    localStorage.setItem("circoCompanyUid",user.uid)
    showSuccess("Login successfully")
    setTimeout(()=>{

      navigate("/myprofiles")
      window.location.reload()
                },1000)
  }).catch((error)=>{
    
    if(error.message==="Firebase: Error (auth/invalid-credential)."){
      showError("Invalid credentials")
    }
    else if(error.message==="Firebase: Error (auth/invalid-email)."){
      showError("Invalid email")
    }
    setLoading(false)
console.log(error.message);

  })
}else{
  showError("Email and Password are required to login")
}
}


export const logoutUser=async()=>{
  auth.signOut().then(()=>{
    // navigate("/")
    localStorage.removeItem("circoCompanyUid")
    window.location.reload()
   
  }).catch((error)=>{
    console.log(error.message);
  })
}
export const SendResetLink = (email:any, showError:any,showSuccess:any, setEmailCallback:any) => {
  
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

