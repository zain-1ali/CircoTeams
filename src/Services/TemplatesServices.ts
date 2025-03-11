import { equalTo, get, orderByChild, push, query, ref, set, update } from "firebase/database"
import { db } from "../firebase"


export const createTemplate=(data:any,showError:any,showSuccess:any,setLoading:any)=>{
    if(data?.profileName){
        setLoading(true)
     const objectId=push(ref(db, `Template/`),{...data,profileType:"circoTemplate",profilePictureLock:false,coverLock:false,logoLock:false,jobLock:false,companyLock:false,locationLock:false,emailLock:false,phoneLock:false}).key
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

        console.log(data,"inner")
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


export const updateTemplateDesign=(data:any,lockData:any,id:string | undefined,showError:any,showSuccess:any,setLoading:any)=>{
    if(data){
        console.log("inner")
        update(ref(db, `Template/${id}/`),{profileDesign:{...data},...lockData}).then(()=>{
            setLoading(false)
            showSuccess("Information updated sucessfully")
            console.log("working well")
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}


export const addLinkToTemplate=(data:any,id:string | undefined,links:any,showError:any,showSuccess:any,setLoading:any,updateLinks:any)=>{
    console.log("link added to template");
    
    if(data){
        set(ref(db, `Template/${id}/links`),[...links,{...data}]).then(()=>{
            setLoading(false)
            showSuccess("Link added sucessfully")
            updateLinks(links,data)
        }).catch((Error)=>{
            showError("Something went wrong")
            console.log("the error",Error)
        })
    }
}



export const addMembersToTemplate=async(membersId:any,team:any,showError:any,showSuccess:any,setLoading:any,independent:boolean=true)=>{
  // console.log(membersId,"yyyyyyyyyyytttttttttttttttt");
  
    const existingMembers= ( team?.members &&  Object.values(team?.members)) || []
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


export const reassignMembersToTemplateV2=async(membersId:any,Newteam:any,showError:any,showSuccess:any,setLoading:any,independent:boolean=true)=>{
      
      if(membersId?.length===0){
        showError("Please select atleast one member to add")  
        setLoading(false)
        return
      }
    
      if(!Newteam?.id){
        showError("Please select a template to add members")  
        setLoading(false)
        return
      }
      try {
    const reassignPromises=membersId?.map(async(elm:any)=>{
    
    
      if (!elm?.templateId){
        addMembersToTemplate([...membersId?.map((usr:any)=>usr?.id)],Newteam,showError,showSuccess,setLoading,false)
        return
        
      }
      if(elm?.templateId===Newteam?.id){
        return
      }
      const crntTeamMembers=typeof Newteam?.members==="object" ? Object?.values(Newteam?.members) :[]
      const remainingMemebers = crntTeamMembers?.filter(id => id!==elm?.id);
      console.log(remainingMemebers);
    
      await update(ref(db, `Template/${elm?.templateId}`), {members:remainingMemebers}).then(()=>{
        console.log(elm?.id,"counter working");
        
        addMembersToTemplate([...membersId?.map((usr:any)=>usr?.id) ],Newteam,showError,showSuccess,setLoading,false)
    })
    })
    
    try {
      const updatedIds = await Promise.all(reassignPromises);
      console.log("Updated IDs:", updatedIds);
      if(independent){
      showSuccess("Members assigned successfully");
      setLoading(false)
      }
    } catch (error) {
      console.error("Error updating objects:", error);
    setLoading(false)
    }
       
    
      
      
      } catch (error) {
       console.log(error);   
      }
    
    }



export const assignSubTeamToTemplate=async(subTeams:any,template:any,showError:any,showSuccess:any,setLoading:any)=>{

if(subTeams?.length===0){
    showError("Please select atleast one sub team to add")  
    setLoading(false)
    return
}


const subTeamsPromises=subTeams?.map(async(elm:any)=>{
    if(elm?.templateId===template?.id){
        return
    }
    const crntTeamMembers=typeof elm?.members==="object" ? Object?.values(elm?.members):[]
    console.log(crntTeamMembers,"@@@@@@@@@@@@@@@@@@@");
    
    await update(ref(db, `SubTeams/${elm?.id}`), {templateId:template?.id}).then(()=>{
       const starCountRef = query(
              ref(db, "User"),
              orderByChild("subTeamId"),
              equalTo(elm?.id)
            );

            get(starCountRef).then((snapshot)=>{
              const data = snapshot.val();
              if(data){
                const teamMembers=Object.values(data)
                console.log(teamMembers,"Team members are here check it out ///////////////////////");
                
                reassignMembersToTemplateV2(teamMembers,template,showError,showSuccess,setLoading,false)
              }
           
            });
           
    
    })

  
    
})

 try {
      const updatedIds = await Promise.all(subTeamsPromises);
      console.log("Updated IDs:", updatedIds);
     
      showSuccess("Template assigned successfully");
      setLoading(false)
    } catch (error) {
      console.error("Error updating objects:", error);
    setLoading(false)
    }




}



export const updateTemplate=async(data:any,id:string,showError:any,showSuccess:any,setLoading:any)=>{
  if(data?.profileName){
      setLoading(true)
      await update(ref(db, `Template/${id}`), {...data}).then(()=>{
          showSuccess("Information updated sucessfully")
      }).catch((error)=>{
          showError("Something wrong happend")
          console.log(error)
      });
  }else{
  showError("Team name should not be empty")
  }
  }




  export const removeMembersFromTemplate=async(membersId:any,crntTeam:any,showError:any,showSuccess:any,setLoading:any,independent:boolean=true)=>{
    try {
      console.log(membersId);
      
      const crntTeamMembers=typeof crntTeam?.members==="object" ? Object?.values(crntTeam?.members) :[]
     
      const remainingMemebers = crntTeamMembers?.filter(id => !membersId.includes(id));
      console.log(remainingMemebers);
  
      await update(ref(db, `Template/${crntTeam?.id}`), {members:remainingMemebers}).then(async()=>{
        const updatePromises = membersId?.map(async (elm:string) => {
          // console.log("testing...");
            await update(ref(db, `User/${elm}`), {templateId:""});
        });
        try {
          const updatedIds = await Promise.all(updatePromises);
          console.log("Updated IDs:", updatedIds);
          if(independent){
            showSuccess("Members removed successfully");
            setLoading(false,membersId)
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