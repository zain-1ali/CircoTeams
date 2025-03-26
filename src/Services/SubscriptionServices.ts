import { onValue, push, ref, update } from "firebase/database";
import { db } from "../firebase";




const allPlans = [
    { amount:5.99,
    duration:"montly",
    name:"pro",
    subscriptionType:"self",
    properties:["3 digital business card and QR code"]
  },
  { amount:59.99,
      duration:"yearly",
      name:"pro",
      subscriptionType:"self",
      properties:["3 digital business card and QR code"]
    },
      { amount:25,
        duration:"monthly",
        name:"Circo Teams (5 members)",
        subscriptionType:"teams",
      properties:[
        "Digital Card Management",
        "Digital Card Templates",
        "Lead Management",
        "CRM Integrations",
        "Custom lead capture forms",
        "Team Usage Insights",
        "Member Restrictions",
        "Team Directory Integrations",
        "Subteams",
      ]
      },
      { amount:240,
        duration:"yearly",
        name:"Circo Teams (5 members)",
        subscriptionType:"teams",
      properties:[
        "Digital Card Management",
        "Digital Card Templates",
        "Lead Management",
        "CRM Integrations",
        "Custom lead capture forms",
        "Team Usage Insights",
        "Member Restrictions",
        "Team Directory Integrations",
        "Subteams",
      ]
      },
     
  
    ]
export const addPlan=()=>{
  allPlans.map((plan)=>{
    const newRef = push(ref(db, `Plans/`), { 
  ...plan 
    });
    if (newRef.key) {
      update(ref(db, `Plans/${newRef.key}`), { id: newRef.key })
        .then(() => {
          console.log("Plan added successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Error adding plan");
    }
  })
  
}


export const getPlans = (cb: Function) => {
  const starCountRef = ref(db, "/Plans");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      cb(Object.values(data));
    } else {
      cb([]);
    }
  });
}