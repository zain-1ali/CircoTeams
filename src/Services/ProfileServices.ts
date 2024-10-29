import { push, ref, set, update } from "firebase/database"
import { db } from "../firebase"
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
    email: "",
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


export const addLinkToDb=(data:any,id:string | undefined,links:any,showError:any,showSuccess:any,setLoading:any)=>{
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

