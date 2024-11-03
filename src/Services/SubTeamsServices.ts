import { push, ref, set, update } from "firebase/database"
import { db } from "../firebase"

export const createSubTeam=(data:any,showError:any,showSuccess:any,setLoading:any)=>{
    if(data?.name){
        setLoading(true)
const initialData={
name:data?.name,
members:[],
templateId:"",
companyId:data?.id
}
     const objectId=push(ref(db, `SubTeams/`),{...initialData}).key
     if(objectId){
        update(ref(db, `SubTeams/${objectId}`),{id:objectId}).then(()=>{
            setLoading(false)
            showSuccess("Subteam created successfully")
        })
     }
    }else{
        setLoading(false)
        showError("Name shuold not be empty")
    }
    }



export const addMembersToSubTeam=async(membersId:any,team:any,showError:any,showSuccess:any,setLoading:any)=>{
const existingMembers= (typeof team?.members==="object" &&  Object.values(team?.members)) || []
if(membersId?.length>0){
    setLoading(true)
    await set(ref(db, `SubTeams/${team?.id}/members/`), [
        ...existingMembers,
        ...membersId,
      ]).then(async () => {
        const updatePromises = membersId?.map(async (elm:string) => {
          console.log("testing...");
        
            await update(ref(db, `User/${elm}`), {subTeamId:team?.id});
          
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



export const updateTeam=async(data:any,id:string,showError:any,showSuccess:any,setLoading:any)=>{
if(data?.name){
    setLoading(true)
    await update(ref(db, `SubTeams/${id}`), {...data}).then(()=>{
        showSuccess("Information updated sucessfully")
    }).catch((error)=>{
        showError("Something wrong happend")
        console.log(error)
    });
}else{
showError("Team name should not be empty")
}
}


