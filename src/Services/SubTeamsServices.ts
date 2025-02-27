import { equalTo, get, orderByChild, push, query, ref, remove, set, update } from "firebase/database"
import { db } from "../firebase"
import { addMembersToTemplate } from "./TemplatesServices"

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



export const addMembersToSubTeam=async(membersId:any,team:any,showError:any,showSuccess:any,setLoading:any,independent:boolean=true)=>{
const existingMembers= (typeof team?.members==="object" &&  Object.values(team?.members)) || []
if(membersId?.length>0){

    setLoading(true)
    await set(ref(db, `SubTeams/${team?.id}/members/`), [
        ...existingMembers,
        ...membersId,
      ]).then(async () => {
        const updatePromises = membersId?.map(async (elm:string) => {
          // console.log("testing...");
        
            await update(ref(db, `User/${elm}`), {subTeamId:team?.id});
            if(team?.templateId){



      const starCountRef = query(
        ref(db, "Template"),
        orderByChild("id"),
        equalTo(team?.templateId)
      );
  
      // Use get() for a one-time read
      const snapshot = await get(starCountRef);
      const data = snapshot.val();

      if(data){
        const template=Object.values(data)?.[0]
        addMembersToTemplate([elm],template,showError,showSuccess,setLoading,false)
      }
             
            }
          
        });

        try {
          const updatedIds = await Promise.all(updatePromises);
          console.log("Updated IDs:", updatedIds);
          // Handle success, show success message, etc.
          if(independent){
          showSuccess("New members added successfully");
          setLoading(false)
          }
       
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



export const reassignMembersToSubTeam=async(membersId:any,Newteam:any,crntTeam:any,showError:any,showSuccess:any,setLoading:any)=>{
  try {
    const crntTeamMembers=typeof crntTeam?.members==="object" ? Object?.values(crntTeam?.members) :[]
   
    const remainingMemebers = crntTeamMembers?.filter(id => !membersId.includes(id));
    console.log(remainingMemebers);

    await update(ref(db, `SubTeams/${crntTeam?.id}`), {members:remainingMemebers}).then(()=>{
      addMembersToSubTeam(membersId,Newteam,showError,showSuccess,setLoading)
  })
  
  } catch (error) {
   console.log(error);   
  }

}

 


export const reassignMembersToSubTeamV2=async(membersId:any,Newteam:any,showError:any,showSuccess:any,setLoading:any)=>{
  console.log("actual function called",membersId);
  
  if(membersId?.length===0){
    showError("Please select atleast one member to add")  
    setLoading(false)
    return
  }

  if(!Newteam?.id){
    showError("Please select a team to add members")  
    setLoading(false)
    return
  }
  try {
const reassignPromises=membersId?.map(async(elm:any)=>{


  if (!elm?.subTeamId){
    addMembersToSubTeam([elm?.id],Newteam,showError,showSuccess,setLoading,false)
    return
    
  }
  if(elm?.subTeamId===Newteam?.id){
    return
  }
  const crntTeamMembers=typeof elm?.subTeamMembers==="object" ? Object?.values(elm?.subTeamMembers) :[]
  const remainingMemebers = crntTeamMembers?.filter(id => id!==elm?.id);
  console.log(remainingMemebers);

  await update(ref(db, `SubTeams/${elm?.subTeamId}`), {members:remainingMemebers}).then(()=>{
    addMembersToSubTeam([elm?.id],Newteam,showError,showSuccess,setLoading,false)
})
})

try {
  const updatedIds = await Promise.all(reassignPromises);
  console.log("Updated IDs:", updatedIds);
  showSuccess("Members assigned successfully");
  setLoading(false)
} catch (error) {
  console.error("Error updating objects:", error);
setLoading(false)
}
   

  
  
  } catch (error) {
   console.log(error);   
  }

}


export const removeMembersFromSubTeam=async(membersId:any,crntTeam:any,showError:any,showSuccess:any,setLoading:any,independent:boolean=true)=>{
  try {
    console.log(membersId);
    
    const crntTeamMembers=typeof crntTeam?.members==="object" ? Object?.values(crntTeam?.members) :[]
   
    const remainingMemebers = crntTeamMembers?.filter(id => !membersId.includes(id));
    console.log(remainingMemebers);

    await update(ref(db, `SubTeams/${crntTeam?.id}`), {members:remainingMemebers}).then(async()=>{
      const updatePromises = membersId?.map(async (elm:string) => {
        // console.log("testing...");
          await update(ref(db, `User/${elm}`), {subTeamId:""});
      });
      try {
        const updatedIds = await Promise.all(updatePromises);
        console.log("Updated IDs:", updatedIds);
        if(independent){
          showSuccess("Members removed successfully");
          setLoading(false)
        }
       
      } catch (error) {
        console.error("Error updating objects:", error);
      setLoading(false)
      }
  })
  } catch (error) {
   console.log(error); 
   showError("Something went wrong")  
  }
}


export const removeTeams=async(teams:any,showError:any,showSuccess:any,setLoading:any)=>{
try {
const removeTeamPromises=teams.map(async(elm:any)=>{
  await remove(ref(db, `SubTeams/${elm?.id}`)).then(()=>{
    if(elm?.members){
      removeMembersFromSubTeam(Object.values(elm?.members),elm,showError,showSuccess,setLoading,false)
    }
  })
})


try {
  const updatedIds = await Promise.all(removeTeamPromises);
  console.log("Updated IDs:", updatedIds);
  showSuccess("Teams removed successfully");
  setLoading(false)
} catch (error) {
  console.log(error);
  
}






} catch (error) {
  console.log(error);
  
}
}



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


