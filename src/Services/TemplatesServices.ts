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
    console.log("link added to template");
    
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



export const addMembersToTemplate=async(membersId:any,team:any,showError:any,showSuccess:any,setLoading:any)=>{
    const existingMembers= (typeof team?.members==="object" &&  Object.values(team?.members)) || []
    if(membersId?.length>0){
        setLoading(true)
        await set(ref(db, `Template/${team?.id}/members/`), [
            ...existingMembers,
            ...membersId,
          ]).then(async () => {
            const updatePromises = membersId?.map(async (elm:string) => {
              // console.log("testing...");
            
                await update(ref(db, `User/${elm}`), {templateId:team?.id});
              
            });
    
            try {
              const updatedIds = await Promise.all(updatePromises);
              console.log("Updated IDs:", updatedIds);
              // Handle success, show success message, etc.
              showSuccess("New members added successfully");
              setLoading(false)
            //   cb();
            //   setMemberIds([]);
            //   setMembers([]);
            } catch (error) {
              console.error("Error updating objects:", error);
              // Handle error, show error message, etc.
            //   toast.error("Error updating objects");
            setLoading(false)
            }
          });
    }else{
        showError("Please select atleast one member to add")  
        setLoading(false)
    }}