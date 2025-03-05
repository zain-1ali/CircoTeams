import { equalTo, get, onValue, orderByChild, push, query, ref, set, update } from "firebase/database"
import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { generateRandomPassword } from "./Constants"
import axios from "axios"
// import { Link } from "../Types"

export const createSelfProfile=(selfData:any,showError:any,showSuccess:any,setLoading:any)=>{
  const initialData={
    address: "",
    bio: "",
    company: "",
    coverUrl: "",

    direct: {
      baseUrl: "",
      email: "",
      graphicTextColor: "#ffffff",
      id: "",
      image: "",
      isLinkHighlighted: false,
      linkHighlightDescription: "",
      linkID: 0,
      name: "",
      placeholder: "",
      shareable: true,
      textAlign: "",
      title: "",
      type: "",
      value: ""
    },
    directMode: false,
    dob: "",
    email: selfData.email,
    fcmToken: "",
    firstName: "",
    gender: "",
    hideSaveContact: false,
    id: "",
    isProMatching: true,
    isProVersion: true,
    isTrialPeriod: false,
    isVisible: true,
    jobTitle: "",
    lastName: "",
    leadMode: false,
    logoUrl: "",
    name: "",
    parentID:selfData?.id,
    phone: "",
    platform: "",
    proVersionExpiryDate: "",
    proVersionPurchaseDate: "",
    profileType:"self",
    profileDesign: {
      appIconColor: "#ffffff",
      backgroundColor: "#000000",
      backgroundImage: "",
      backgroundOpacity: 98,
      backgroundTheme: "Classic",
      boxBackgroundColor: "#ffffff",
      boxTextColor: "#000000",
      hideCompanyLogo: false,
      hideSaveContact: false,
      highlightBoxStyle: "style2",
      profileFont: "3",
      saveContactBackgroundColor: "#ffffff",
      saveContactStyle: "style4",
      saveContactTextColor: "#ffffff",
      weblinkButtonBackgroundColor: "#ffffff",
      weblinkButtonTextColor: "#ffffff",
      weblinkStyle: "style12",
      whiteProfileText: false,
      whiteTextAndBorder: true
    },
    profileOn: 1,
    profileSelected: "",
    profileTitle: "",
    profileUrl: "",
    qrColor: "#000000",
    qrLogo: "",
    subscription: "",
    tagUid: [],
    transactionId: "",
    userName: "",
    username: ""
}
    setLoading(true)
if(selfData?.id){
    console.log("start working")

 const objectId=push(ref(db, `User/`),{...initialData}).key
 if(objectId){
    update(ref(db, `User/${objectId}`),{id:objectId}).then(()=>{
        console.log("new profile created ")
        setLoading(false)
        showSuccess("New self profile created successfully")
    })
 }
}else{
    showError("Error creating new profile")
    setLoading(false)
}
}


export const createTeamsProfile=async(data:any,showError:any,showSuccess:any,setLoading:any)=>{
  console.log(data);
  
    if(data?.firstName && data?.email){
      const companyId=data?.id
        setLoading(true)
const initialData={
    address: "",
    bio: "",
    company: "",
    coverUrl: "",

    direct: {
      baseUrl: "",
      email: "",
      graphicTextColor: "#ffffff",
      id: "",
      image: "",
      isLinkHighlighted: false,
      linkHighlightDescription: "",
      linkID: 0,
      name: "",
      placeholder: "",
      shareable: true,
      textAlign: "",
      title: "",
      type: "",
      value: ""
    },
    directMode: false,
    dob: "",
    email: data.email,
    fcmToken: "",
    firstName: data?.firstName,
    gender: "",
    hideSaveContact: false,
    id: "",
    isProMatching: true,
    isProVersion: true,
    isTrialPeriod: false,
    isVisible: true,
    isAdmin:false,
    jobTitle: "",
    lastName: data?.lastName,
    leadMode: false,
    logoUrl: "",
    name: data?.firstName + " " + data?.lastName,
    parentID: data?.id,
    phone: "",
    platform: "",
    proVersionExpiryDate: "",
    proVersionPurchaseDate: "",
    profileType:"team",
    profileDesign: {
      appIconColor: "#ffffff",
      backgroundColor: "#000000",
      backgroundImage: "",
      backgroundOpacity: 98,
      backgroundTheme: "Card",
      boxBackgroundColor: "#ffffff",
      boxTextColor: "#000000",
      hideCompanyLogo: false,
      hideSaveContact: false,
      highlightBoxStyle: "style2",
      profileFont: "3",
      saveContactBackgroundColor: "#ffffff",
      saveContactStyle: "style4",
      saveContactTextColor: "#ffffff",
      weblinkButtonBackgroundColor: "#ffffff",
      weblinkButtonTextColor: "#ffffff",
      weblinkStyle: "style12",
      whiteProfileText: false,
      whiteTextAndBorder: true
    },
    profileOn: 1,
    profileSelected: "",
    profileTitle: "",
    profileUrl: "",
    qrColor: "#000000",
    qrLogo: "",
    subscription: "",
    tagUid: [],
    transactionId: "",
    userName: "",
    username: ""
}
const password=generateRandomPassword(8)
await createUserWithEmailAndPassword(auth,data.email,password).then((userCredential)=>{
  const user=userCredential.user
  update(ref(db, `User/${user.uid}`),{...initialData,id:user.uid}).then(async()=>{
    await axios.post(`https://wallet.circo.me/api/createAccount`, {
      email: data?.email,
      password: password,
      token: "12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj",
    });
       setLoading(false)
       showSuccess("Team profile created successfully")
  })
 
  
}).catch((error)=>{
  console.log(error);
  setLoading(false)
  if (error?.message?.includes("Firebase: Error (auth/invalid-email).")) {
    showError("Please enter a valid email");
  } else if (error?.message?.includes("Firebase: Error (auth/email-already-in-use).")) {
    // showError("Email already exists");
    



    const starCountRef = query(
      ref(db, "User"),
      orderByChild("email"),
      equalTo(data?.email)
    );
    onValue(starCountRef, async (snapshot) => {
      const data:any = await snapshot.val();
  const userExist:any=Object.keys(data)?.[0]
  if(userExist?.isAdmin){
      
      showError("This email is already registered as an admin");
  }
  
  if(userExist?.parentID){
    showError("This email is already registered as a team member");
  }
  else{
    console.log(data?.id);
    
    update(ref(db, `User/${Object.keys(data)?.[0]}`),{parentID:companyId})
  }
})





















  } else if (error?.message?.includes("Firebase: Password should be at least 6 characters (auth/weak-password).")) {
    showError("Password must be at least 6 characters");
  } else {
    showError("An error occurred. Please try again.");
  }
})
    
    }else{
        setLoading(false)
        showError("Name and Email shuold not be empty")
    }
    }

export const createMultipleProfiles=async(emails:string[],showError:any,showSuccess:any,setLoading:any,companyId:string | null)=>{
if(emails?.length>0){
    setLoading(true)
    const initialData={
        address: "",
        bio: "",
        company: "",
        coverUrl: "",
    
        direct: {
          baseUrl: "",
          email: "",
          graphicTextColor: "#ffffff",
          id: "",
          image: "",
          isLinkHighlighted: false,
          linkHighlightDescription: "",
          linkID: 0,
          name: "",
          placeholder: "",
          shareable: true,
          textAlign: "",
          title: "",
          type: "",
          value: ""
        },
        directMode: false,
        dob: "",
        email: "",
        fcmToken: "",
        firstName: "",
        gender: "",
        hideSaveContact: false,
        id: "",
        isProMatching: true,
        isProVersion: true,
        isTrialPeriod: false,
        isVisible: true,
        jobTitle: "",
        lastName: "",
        leadMode: false,
        logoUrl: "",
        name: "",
        parentID: "",
        phone: "",
        platform: "",
        proVersionExpiryDate: "",
        proVersionPurchaseDate: "",
        profileType:"team",
        profileDesign: {
          appIconColor: "#ffffff",
          backgroundColor: "#000000",
          backgroundImage: "",
          backgroundOpacity: 98,
          backgroundTheme: "Card",
          boxBackgroundColor: "#ffffff",
          boxTextColor: "#000000",
          hideCompanyLogo: false,
          hideSaveContact: false,
          highlightBoxStyle: "style2",
          profileFont: "3",
          saveContactBackgroundColor: "#ffffff",
          saveContactStyle: "style4",
          saveContactTextColor: "#ffffff",
          weblinkButtonBackgroundColor: "#ffffff",
          weblinkButtonTextColor: "#ffffff",
          weblinkStyle: "style12",
          whiteProfileText: false,
          whiteTextAndBorder: true
        },
        profileOn: 1,
        profileSelected: "",
        profileTitle: "",
        profileUrl: "",
        qrColor: "#F2C84C",
        qrLogo: "",
        subscription: "",
        tagUid: [],
        transactionId: "",
        userName: "",
        username: ""
    }
    const updatePromise=emails?.map(async(mail:string)=>{

        const password = Math.floor(100000 + Math.random() * 900000).toString();
      
        await createUserWithEmailAndPassword(auth,mail,password).then((userCredential)=>{
          const user=userCredential.user
          update(ref(db, `User/${user.uid}`),{...initialData,email:mail,parentID:companyId,id:user.uid}).then(async()=>{
            await axios.post(`https://wallet.circo.me/api/createAccount`, {
              email:mail,
              password: password,
              token: "12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj",
            });
            setLoading(false)
            showSuccess("New members added successfully")
          })
           
          
        }).catch((error)=>{
console.log(error)

if(error.message === "Firebase: Error (auth/email-already-in-use)."){

    const starCountRef = query(
        ref(db, "User"),
        orderByChild("email"),
        equalTo(mail)
      );
      onValue(starCountRef, async (snapshot) => {
        const data:any = await snapshot.val();
    
    if(data){
        update(ref(db, `User/${Object.keys(data)?.[0]}`),{parentID:companyId})
    }
        console.log("data",data);
        // console.log("testing data");
        MediaKeyStatusMap;
      });     
    
}
        })
    })

    try {
        const updatedIds = await Promise.all(updatePromise);
        console.log("Updated IDs:", updatedIds);
        // Handle success, show success message, etc.
        showSuccess("New members added successfully");
        setLoading(false)
      //   cb();
      //   setMemberIds([]);
      //   setMembers([]);
      } catch (error) {
        console.error("Error updating objects:", error);
        showError("Something went wrong") 
        // Handle error, show error message, etc.
      //   toast.error("Error updating objects");
      setLoading(false)
      }


}else{
    showError("Please add at least one eamil")  
}
}



export const createMultipleProfilesCsv=async(emails:any[],showError:any,showSuccess:any,setLoading:any,companyId:string | null)=>{
    if(emails?.length>0){
        const initialData={
            address: "",
            bio: "",
            company: "",
            coverUrl: "",
        
            direct: {
              baseUrl: "",
              email: "",
              graphicTextColor: "#ffffff",
              id: "",
              image: "",
              isLinkHighlighted: false,
              linkHighlightDescription: "",
              linkID: 0,
              name: "",
              placeholder: "",
              shareable: true,
              textAlign: "",
              title: "",
              type: "",
              value: ""
            },
            directMode: false,
            dob: "",
            email: "",
            fcmToken: "",
            firstName: "",
            gender: "",
            hideSaveContact: false,
            id: "",
            isProMatching: true,
            isProVersion: true,
            isTrialPeriod: false,
            isVisible: true,
            jobTitle: "",
            lastName: "",
            leadMode: false,
            logoUrl: "",
            name: "",
            parentID: "",
            phone: "",
            platform: "",
            proVersionExpiryDate: "",
            proVersionPurchaseDate: "",
            profileType:"team",
            profileDesign: {
              appIconColor: "#ffffff",
              backgroundColor: "#000000",
              backgroundImage: "",
              backgroundOpacity: 98,
              backgroundTheme: "Card",
              boxBackgroundColor: "#ffffff",
              boxTextColor: "#000000",
              hideCompanyLogo: false,
              hideSaveContact: false,
              highlightBoxStyle: "style2",
              profileFont: "3",
              saveContactBackgroundColor: "#ffffff",
              saveContactStyle: "style4",
              saveContactTextColor: "#ffffff",
              weblinkButtonBackgroundColor: "#ffffff",
              weblinkButtonTextColor: "#ffffff",
              weblinkStyle: "style12",
              whiteProfileText: false,
              whiteTextAndBorder: true
            },
            profileOn: 1,
            profileSelected: "",
            profileTitle: "",
            profileUrl: "",
            qrColor: "#F2C84C",
            qrLogo: "",
            subscription: "",
            tagUid: [],
            transactionId: "",
            userName: "",
            username: ""
        }
        const updatePromise=emails?.map(async(mail:any)=>{
    if(mail?.email){
        const password = Math.floor(100000 + Math.random() * 900000).toString();
          
        await createUserWithEmailAndPassword(auth,mail?.email,password).then((userCredential)=>{
          const user=userCredential.user
            update(ref(db, `User/${user.uid}`),{...initialData,email:mail.email,id:user.uid,parentID:companyId,name:mail?.name||"",firstName:mail.name||"",profileUrl:mail?.profileUrl||""}).then(async()=>{
              await axios.post(`https://wallet.circo.me/api/createAccount`, {
                email:mail,
                password: password,
                token: "12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj",
              });
            })
        }).catch((error)=>{
console.log(error)

if(error.message === "Firebase: Error (auth/email-already-in-use)."){

    const starCountRef = query(
        ref(db, "User"),
        orderByChild("email"),
        equalTo(mail)
      );
      onValue(starCountRef, async (snapshot) => {
        const data = await snapshot.val();
    
    if(data){
        update(ref(db, `User/${Object.keys(data)?.[0]}`),{parentID:companyId})
    }
        console.log("data",data);
        // console.log("testing data");
        MediaKeyStatusMap;
      });



     
    
}
        })
    }else{
        console.log("email not found");
        
    }
         
        })
    
        try {
            const updatedIds = await Promise.all(updatePromise);
            console.log("Updated IDs:", updatedIds);
            // Handle success, show success message, etc.
            showSuccess("New members added successfully");
            setLoading(false)
          //   cb();
          //   setMemberIds([]);
          //   setMembers([]);
          } catch (error) {
            console.error("Error updating objects:", error);
            showError("Something went wrong") 
            // Handle error, show error message, etc.
          //   toast.error("Error updating objects");
          setLoading(false)
          }
    
    
    }else{
        showError("Please add at least one eamil")  
    }
}

export const updateProfileInfo=(data:any,id:string | undefined,showError:any,showSuccess:any,setLoading:any)=>{
    console.log(data)
    if(data){
        console.log("inner")
        update(ref(db, `User/${id}`),{...data}).then(()=>{
            setLoading(false)
            showSuccess("Information updated sucessfully")
            console.log("working well")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}


export const updateLeadCapture=(leadMode:boolean,directMode:boolean,id:string | undefined,setState:any,setState2:any)=>{
    console.log("lead capture mode",leadMode);
    
    update(ref(db, `User/${id}`),{leadMode:!leadMode}).then(()=>{
        setState(!leadMode)
        console.log("working well",directMode)
if(directMode===true && leadMode===false){
    update(ref(db, `User/${id}`),{directMode:!directMode}).then(()=>{
        setState2(!directMode)
    })
    
}
    }).catch((Error)=>{
        console.log("the error",Error)
    })
}



export const updateDirectMode=(directMode:boolean,id:string | undefined,setState:any,setState2:any,setState3:any,firstLink:any,linkLength:any,leadMode:boolean)=>{
    // console.log("direct mode",directMode);
    if(linkLength<1){
        return
    }
    update(ref(db, `User/${id}`),{directMode:!directMode}).then(()=>{
        if(directMode===false && leadMode===true){
            update(ref(db, `User/${id}`),{leadMode:!leadMode}).then(()=>{
                setState3(!leadMode)
            })
            
        }
        setState(!directMode)
        update(ref(db, `User/${id}`),{direct:firstLink}).then(()=>{
            setState2(firstLink)


           
        })
        console.log("working well")
    }).catch((Error)=>{
        console.log("the error",Error)
    })
}


export const updateLinkShareAble = async (
    id:string,
    linkID:string,
    shareable:boolean,
    link:any,
    setLinks:any
  ) => {
    // shareable,allLinks
    // Find the index of the object with the given ID
    const objectIndex = link?.findIndex((obj:any) => obj.id === linkID);
  
    // Check if the object exists
    if (objectIndex !== -1) {
      // Create a copy of the object
      const updatedObject = { ...link[objectIndex] };
  
      // Update the value of the desired property
      updatedObject.shareable = !shareable;
  
      // Create a new array with the updated object
      const updatedArray = [...link];
      updatedArray[objectIndex] = updatedObject;
      set(ref(db, `User/${id}/links/`), [...updatedArray]).then(async () => {
        setLinks([...updatedArray]);
      });
    }
  
    // const starCountRef = query(
    //   ref(db, `/Users/${id}/links`),
    //   orderByChild("linkID"),
    //   equalTo(linkID)
    // );
    // onValue(starCountRef, async (snapshot) => {
    //   const data = await snapshot.val();
    //   // cb(Object.values(data));
    //   console.log(data);
    //   console.log(Object.keys(data)[0]);
    //   if (data) {
    //     let index = Object.keys(data)[0];
  
    //     update(ref(db, `Users/${id}/links/${index}`), {
    //       shareable: !shareable,
    //     }).then(() => {
    //       // toast.success("Link deleted successfuly");
    //       // cb();
    //     });
    //   }
    //   MediaKeyStatusMap;
    // });
};


export const updateDirect=(id:string | undefined,setDirect:any,link:any,directMode:boolean)=>{
    if(directMode===false){
        return

    }
        update(ref(db, `User/${id}`),{direct:link}).then(()=>{
            setDirect(link)
        })
        console.log("working well")
}


export const addLinkToDb=(data:any,id:string | undefined,links:any,showError:any,showSuccess:any,setLoading:any,updateLink:any)=>{
    console.log("link added to profile");
    const existingLinks=Array.isArray(links) ? links :[]
    if(data){
      const linkRandomId=JSON.stringify(Date.now())
        set(ref(db, `User/${id}/links`),[...existingLinks,{...data,id:linkRandomId}]).then(()=>{
            setLoading(false)
            updateLink(existingLinks,data)
            showSuccess("Link added sucessfully")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}

export const deleteLinkFromDb = (linkID: any, id: string | undefined, links: any, showError: any, showSuccess: any, setLoading: any,setRemainingLink:any) => {
    console.log("Deleting link with ID:", linkID);
    if (!id || !links){
      showError("Something went wrong while removing the link");
      return;
    }
    setLoading(true);
    
    const updatedLinks = Array.isArray(links)
      ? links.filter((link: any) => link.id !== linkID)
      : [];
  
    set(ref(db, `User/${id}/links`), updatedLinks)
      .then(() => {
        setLoading(false);
        setRemainingLink(updatedLinks)
        showSuccess("Link removed successfully");
      })
      .catch((error) => {
        setLoading(false);
        showError("Something went wrong while removing the link");
        console.error("Error removing link:", error);
      });
  };
  


export const updateLink=(linkData:any,id:string | undefined,links:any ,showError:any,showSuccess:any,setLoading:any)=>{
    setLoading(true);
    const objectIndex = links?.findIndex((obj:any) => obj.id === linkData?.id);
    if (objectIndex !== -1) {
    //   const updatedObject = { ...links[objectIndex] };
    //   const updatedArray = [...links];
    //   updatedArray[objectIndex] = { ...updatedObject, ...linkData };
      update(ref(db, `User/${id}/links/${objectIndex}`),{...linkData}).then(async () => {
        console.log("Link updated successfully");
        showSuccess("Link updated successfully");
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
        showError("Something went wrong");
      });
    }
}


export const updateTemplateLink=(linkData:any,id:string | undefined,links:any ,showError:any,showSuccess:any,setLoading:any)=>{
  setLoading(true);
  const objectIndex = links?.findIndex((obj:any) => obj.id === linkData?.id);
  if (objectIndex !== -1) {
  //   const updatedObject = { ...links[objectIndex] };
  //   const updatedArray = [...links];
  //   updatedArray[objectIndex] = { ...updatedObject, ...linkData };
    update(ref(db, `Template/${id}/links/${objectIndex}`),{...linkData}).then(async () => {
      console.log("Link updated successfully");
      showSuccess("Link updated successfully");
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
      showError("Something went wrong");
    });
  }
}


export const updateProfileDesign=(data:any,id:string | undefined,showError:any,showSuccess:any,setLoading:any)=>{
    if(data){
        console.log("inner")
        update(ref(db, `User/${id}/profileDesign`),{...data}).then(()=>{
            setLoading(false)
            showSuccess("Information updated sucessfully")
            console.log("working well")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}


export const updateUserName = async (
    username: string,
    id: string | undefined,
    showError: any,
    showSuccess: any,
    setLoading: any,
    independent:boolean=true,
    cb:any=()=>{}
  ) => {
    if (!username) {
      showError("Username should not be empty");
      return;
    }

   
    
  
    const usernameRegex = /^[a-zA-Z0-9_-]{3,30}$/;
    if (!usernameRegex.test(username)){
      showError("Username should be 3-15 characters long and can only contain letters, numbers, underscores, and hyphens");
      return;
    }
  
    try {
      setLoading(true);
  
      const starCountRef = query(
        ref(db, "User"),
        orderByChild("username"),
        equalTo(username)
      );
  
      // Use get() for a one-time read
      const snapshot = await get(starCountRef);
      const data = snapshot.val();
  
// console.log(Object.keys(data)[0],"here is id");


      if (data && Object.keys(data)[0] !== id) {
        showError("Username already exists");
      } else {
        await update(ref(db, `User/${id}`), { username });

        if(independent){
            showSuccess("Username updated successfully");
        }else{
            cb()
        }
      }
    } catch (error) {
      console.error("Error updating username:", error);
      showError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };



  export const updateTextWhiteStatus=(id:string | undefined,whiteTextAndBorder:boolean,setState:any)=>{
    update(ref(db, `User/${id}/profileDesign`),{whiteTextAndBorder:!whiteTextAndBorder}).then(()=>{
        setState(!whiteTextAndBorder)
    })
    
  }



  export const toggleLogo=(id:string | undefined,hideCompanyLogo:boolean,setState:any)=>{
    update(ref(db, `User/${id}/profileDesign`),{hideCompanyLogo:!hideCompanyLogo}).then(()=>{
        console.log("working well");
        console.log(hideCompanyLogo);
        console.log(id);
        
        
        setState(!hideCompanyLogo)
    })
    
  }

  export const updateAdminStatus=(id:string | undefined,adminStatus:boolean,showError:any,showSuccess:any,setLoading:any)=>{
    setLoading(true);
    update(ref(db, `User/${id}`),{isAdmin:!adminStatus}).then(()=>{

    }).then(()=>{
      showSuccess("Admin status updated successfully")
      setLoading(false)
    }).catch((Error)=>{
      console.log(Error);
      setLoading(false);
      showError("Something went wrong")
    })
  }

