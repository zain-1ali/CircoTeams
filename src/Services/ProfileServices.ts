import { equalTo, onValue, orderByChild, push, query, ref, set, update } from "firebase/database"
import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
// import { Link } from "../Types"

export const createSelfProfile=(selfData:any,showError:any,showSuccess:any,setLoading:any)=>{
    setLoading(true)
if(selfData?.id){
    console.log("start working")

 const objectId=push(ref(db, `User/`),{...selfData,parentID:selfData?.id,profileType:"self", coverUrl: "",profileUrl:"",logoUrl:""}).key
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


export const createTeamsProfile=(data:any,showError:any,showSuccess:any,setLoading:any)=>{
    if(data?.name && data?.email){
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
    firstName: data?.name,
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
    name: data?.name,
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
    qrColor: "#F2C84C",
    qrLogo: "",
    subscription: "",
    tagUid: [],
    transactionId: "",
    userName: "",
    username: ""
}
     const objectId=push(ref(db, `User/`),{...initialData}).key
     if(objectId){
        update(ref(db, `User/${objectId}`),{id:objectId}).then(()=>{
            setLoading(false)
            showSuccess("Team profile created successfully")
        })
     }
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
      
        await createUserWithEmailAndPassword(auth,mail,password).then(()=>{
            const objectId=push(ref(db, `User/`),{...initialData,email:mail,parentID:companyId}).key
            if(objectId){
               update(ref(db, `User/${objectId}`),{id:objectId})
            }
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
          
        await createUserWithEmailAndPassword(auth,mail?.email,password).then(()=>{
            const objectId=push(ref(db, `User/`),{...initialData,email:mail.email,parentID:companyId,name:mail?.name||"",firstName:mail.name||"",profileUrl:mail?.profileUrl||""}).key
            if(objectId){
               update(ref(db, `User/${objectId}`),{id:objectId})
            }
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


export const updateLeadCapture=(leadMode:boolean,directMode:boolean,id:string | undefined)=>{
    update(ref(db, `User/${id}`),{leadMode:leadMode}).then(()=>{
        console.log("working well",id)
if(directMode===true && leadMode===false){
    update(ref(db, `User/${id}`),{directMode:!directMode})
    
}
    }).catch((Error)=>{
        console.log("the error",Error)
    })
}


export const addLinkToDb=(data:any,id:string | undefined,links:any,showError:any,showSuccess:any,setLoading:any)=>{
    console.log("link added to profile");
    if(data){
        set(ref(db, `User/${id}/links`),[...links,{...data}]).then(()=>{
            setLoading(false)
            showSuccess("Link added sucessfully")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
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

