import { push, ref, set, update } from "firebase/database"
import { db } from "../firebase"

export const createTemplate=(data:any,showError:any,showSuccess:any,setLoading:any)=>{
    if(data?.profileName){
        setLoading(true)
     const objectId=push(ref(db, `Template/`),{...data,profileType:"circoTemplate"}).key
     if(objectId){
        update(ref(db, `Template/${objectId}`),{id:objectId}).then(()=>{
            setLoading(false)
            showSuccess("Template created successfully")
        })
     }
    }else{
        setLoading(false)
        showError("Name shuold not be empty")
    }
}


export const updateTemplateInfo=(data:any,id:string | undefined,showError:any,showSuccess:any,setLoading:any)=>{
    console.log("template")
    if(data){
        console.log("inner")
        update(ref(db, `Template/${id}`),{...data}).then(()=>{
            setLoading(false)
            showSuccess("Information updated sucessfully")
            console.log("working well")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}


export const updateTemplateDesign=(data:any,id:string | undefined,showError:any,showSuccess:any,setLoading:any)=>{
    if(data){
        console.log("inner")
        update(ref(db, `Template/${id}/profileDesign`),{...data}).then(()=>{
            setLoading(false)
            showSuccess("Information updated sucessfully")
            console.log("working well")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}


export const addLinkToTemplate=(data:any,id:string | undefined,links:any,showError:any,showSuccess:any,setLoading:any)=>{
    if(data){
        set(ref(db, `Template/${id}/links`),[...links,{...data}]).then(()=>{
            setLoading(false)
            showSuccess("Link added sucessfully")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}