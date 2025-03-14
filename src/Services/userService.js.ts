// import { UserProfile } from "firebase/auth"
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, db } from "../firebase"
import { equalTo, get, onValue, orderByChild, query, ref, update } from "firebase/database"
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
    await update(ref(db, `User/${user.uid}`), { ...data, id: user.uid, parentID: user.uid, profileSelected: user.uid, username: user.uid, isAdmin:true,profileType:"admin" });

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
export const checkEmailDuplication = async (email: string): Promise<boolean> => {
  try {
    const starCountRef = query(ref(db, "User"), orderByChild("email"), equalTo(email));
    const snapshot = await get(starCountRef);
    console.log("snapshot", snapshot.val());
    

    return snapshot.exists(); 
  } catch (error) {
    console.error("Error checking email duplication:", error);
    return false; // Default to false if an error occurs
  }
};
export const LoginUser = async (credentials: any, showError: any, showSuccess: any, navigate: any, setLoading: any) => {
  if (credentials.email && credentials.password) {
    setLoading(true)
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(async(userCredential) => {
        const user = userCredential.user


        const starCountRef = query(
          ref(db, "User"),
          orderByChild("id"),
          equalTo(user.uid)
        );
    
        // Use get() for a one-time read
        const snapshot = await get(starCountRef);
        const data = snapshot.val();
        console.log(user.uid);
        
        console.log("we are in the data",data);
        
        if(data){
         
          
const userData:any=Object.values(data)?.[0]
if(userData?.isAdmin || userData?.parentID===userData?.id){
  if(userData?.parentID){
    localStorage.setItem("circoCompanyUid", userData?.parentID)
    localStorage.setItem("isAdmin", "true")
    showSuccess("Login successfully")
    setTimeout(() => {
      navigate("/myprofiles")
      window.location.reload()
    }, 1000)
  }else{
    localStorage.setItem("circoCompanyUid", userData?.id)
    localStorage.setItem("isAdmin", "true")
    showSuccess("Login successfully")
    setTimeout(() => {
      navigate("/myprofiles")
      window.location.reload()
    }, 1000)
  }
  
  }else{
    localStorage.setItem("circoCompanyUid", userData?.id)
    localStorage.setItem("isAdmin", "false")
    showSuccess("Login successfully")
    setTimeout(() => {
      navigate("/myprofiles")
      window.location.reload()
    }, 1000)
  }
        }
       
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

export const handleSignUpGoogle = (profileData:any,showError: any, showSuccess: any, navigate: any, setLoading: any) => {

  console.log('into the func')
  setLoading(true)
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider).then(async(response:any) => {
  console.log(response._tokenResponse.email);
  const responseData=response?._tokenResponse
  
   const starCountRef = query(
        ref(db, "User"),
        orderByChild("id"),
        equalTo(responseData?.localId)
      );
      const snapshot = await get(starCountRef);
      const data = snapshot.val();
      console.log(data);
      
  if (!data) {
    console.log(responseData?.photoUrl);
    
      update(ref(db, `User/${responseData?.localId}`), {...profileData, id: responseData?.localId,parentID:responseData?.localId, name:responseData?.displayName,firstName:responseData?.firstName ,lastName:responseData?.lastName ,email:responseData?.email,profileUrl:responseData?.photoUrl,profileDesign:profileData?.profileDesign,isAdmin:true}).then(()=>{
        showSuccess('Sign in with Google')
        console.log("we are here---------",responseData?.localId);
        
        setLoading(false)
        localStorage.setItem("circoCompanyUid", responseData?.localId)
        setTimeout(() => {

          navigate("/myprofiles")
          window.location.reload()
        }, 1000)
          })
  }else{

const userData:any=Object.values(data)?.[0]



    if(userData?.isAdmin || userData?.parentID===userData?.id){
      if(userData?.parentID){
        localStorage.setItem("circoCompanyUid", userData?.parentID)
        localStorage.setItem("isAdmin", "true")
        showSuccess("Login successfully")
        setTimeout(() => {
          navigate("/myprofiles")
          window.location.reload()
        }, 1000)
      }else{
        localStorage.setItem("circoCompanyUid", userData?.id)
        localStorage.setItem("isAdmin", "true")
        showSuccess("Login successfully")
        setTimeout(() => {
          navigate("/myprofiles")
          window.location.reload()
        }, 1000)
      }
      
      }else{
        localStorage.setItem("circoCompanyUid", userData?.id)
        localStorage.setItem("isAdmin", "false")
        showSuccess("Login successfully")
        setTimeout(() => {
          navigate("/myprofiles")
          window.location.reload()
        }, 1000)
      }









    // showSuccess('Sign in with Google')
    //   setLoading(false)
    //   console.log("no we are here---------");
    //   localStorage.setItem("circoCompanyUid", responseData?.localId)
    //   setTimeout(() => {

    //     navigate("/myprofiles")
    //     window.location.reload()
    //   }, 1000)
  }
}).catch((error) => {
  console.log(error)
  showError("Something went wrong")
})

}

export const deleteSingleChild = (user:any, showError:any,showSuccess:any,navigate:any,setLoading:any) => {
console.log(user);
  axios
    .post(`https://wallet.circo.me/api/deleteAccount`, {
     id: user.id,
      token: "12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj",
    })
    .then((res) => {
      if(res?.data.status){

        if(user?.subTeamId){
          const starCountRef = query(
            ref(db, "/SubTeams"),
            orderByChild("id"),
            equalTo(user?.subTeamId)
          );
          onValue(starCountRef, async (snapshot) => {
            const data = await snapshot.val();
            if (data) {
              const theData:any = Object.values(data)?.[0];

              const arrayWithoutDeletedUser = Object.values(
                theData?.members
              )?.filter((elm) => {
                return elm != user?.id;
              });

              update(ref(db, `SubTeams/${user?.id}`), {
                members: arrayWithoutDeletedUser,
              });
            }
          });
        }

        if(user?.templateId){
          const starCountRef = query(
            ref(db, "/Template"),
            orderByChild("id"),
            equalTo(user?.templateId)
          );
          onValue(starCountRef, async (snapshot) => {
            const data = await snapshot.val();
            if (data) {
              const theData:any = Object.values(data)?.[0];

              const arrayWithoutDeletedUser = Object.values(
                theData?.members
              )?.filter((elm) => {
                return elm != user?.id;
              });

              update(ref(db, `Template/${user?.id}`), {
                members: arrayWithoutDeletedUser,
              });
            }
          });
        }
        showSuccess("Profile deleted successfuly")
setLoading(false)
        setTimeout(()=>{
          if(user.parentID == user.id)
          {
            localStorage.removeItem("circoCompanyUid")
            window.location.reload()
          }
          else
          {
            navigate("/myprofiles")
          }
        
        },3000)
      }
      console.log("the response", res);
    })
    .catch((err) => {
      console.log(err);
      showError("something went wrong")
    });
};