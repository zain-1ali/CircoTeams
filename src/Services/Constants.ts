import { equalTo, onValue, orderByChild, query, ref, remove, set, update } from "firebase/database";
import { db } from "../firebase";
import profilePlchldr from "../assets/images/profilePlchldr.png";
import axios from "axios";

export const getSingleChildFromDb=(collectionName:string,orderBy:string,id:any,callBackFunc:any)=>{
    const starCountRef = query(
        ref(db, collectionName),
        orderByChild(orderBy),
        equalTo(id)
      );
      onValue(starCountRef, async (snapshot) => {
        const data = await snapshot.val();
        callBackFunc(data);
        console.log("data",data);
        // console.log("testing data");
        MediaKeyStatusMap;
      });
}

export const getMultipleChilds = async (collectionName:string,orderBy:string,id:string | null,callBackFunc:any, setloading:any) => {
    setloading(true);

    try {
      const starCountRef = query(
        ref(db, collectionName),
        orderByChild(orderBy),
        equalTo(id)
      );
      onValue(starCountRef, async (snapshot) => {
        const data = await snapshot.val();
        if (data) {
          // console.log(orderBy,data);
          callBackFunc(data);
          // console.log(data);
          setloading(false);
          // console.log("testing data");
        } else {
          console.log(orderBy,"data not found")
          setloading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
    
    
  };
  export const removeSingleChildFromDb=(collectionName:string,id:any,callBackFunc:any)=>{
    
    remove(ref(db, `${collectionName}/${id}`))
  .then(() => {
    callBackFunc(); 
  })
  .catch((error) => {
    console.error("Error removing data:", error); // Handle any errors
  });

}



export const removeCollectionFromDb=(collectionName:string)=>{
    
  remove(ref(db, `${collectionName}`))
.then(() => {
  console.log("Data removed successfully"); 
})
.catch((error) => {
  console.error("Error removing data:", error); // Handle any errors
});

}
export const DeleteProfileByApi = async (id: any, callBackFunc: any) => {
  try {
    if (!id) {
      throw new Error("ID is required to delete the profile.");
    }
    const response = await axios.post(`https://wallet.circo.me/api/deleteAccount`, {
       id: id,
       token:"12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj" 
      });
    if (response.status === 200) {
      console.log("Profile deleted successfully:", response.data);
      callBackFunc(true);
    } else {
      console.error("Failed to delete profile:", response);
      callBackFunc(false);
    }
  } catch (error: any) {
    console.error("Error while deleting the profile:", error.message || error);
    callBackFunc(false);
  }
};


export const removeMultipleChildFromDb = ( collectionName: string,  ids: Array<string>, callBackFunc: () => void 
) => {
  const promises = ids?.map((id) => {
    return remove(ref(db, `${collectionName}/${id}`)) 
      .catch((error) => {
        console.error("Error removing data:", error); 
      });
  });
  Promise.all(promises)
    .then(() => {
      callBackFunc(); 
    })
    .catch((error) => {
      console.error("Error completing removal:", error); 
    });
};


  export const appendBucketPath = (path:string) => {
    let url = "";
    if (path !== "" && path !== undefined && path.startsWith("gs://")) {
      const filterUrl = path?.replace("gs://wajjcard-7be7d.appspot.com/", "");
      url = `https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/${filterUrl}?alt=media`;
    }
    else if(path !== "" && path !== undefined && path.startsWith("https"))
    {
      return path;
    }
    else
    {
      url = path;
    }
    return url;
  };

  export const timestampToDate = (timestampInSeconds: number): string => {
    
    const timestampInMilliseconds = timestampInSeconds;
    const date = new Date(timestampInMilliseconds);
  
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
  
    return formattedDate;
  };









  export const  sortArrayByKey=(
    array: any[],
    key: string,
    sortingType: string,
    setSortedData:any
  )=> {
    
    const sortedArray = array.slice().sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];
      
      // Handle "a to z" and "z to a"
      if (sortingType === "a to z" || sortingType === "z to a") {
        if (typeof aValue === "string" && typeof bValue === "string") {
          const comparison = aValue.localeCompare(bValue);
          return sortingType === "a to z" ? comparison : -comparison;
        }
      }
  
      // Handle "oldest" and "newest"
      if (sortingType === "oldest" || sortingType === "newest") {
        const aDate = new Date(aValue);
        const bDate = new Date(bValue);
        if (!isNaN(aDate.getTime()) && !isNaN(bDate.getTime())) {
          return sortingType === "oldest" ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
        }
      }
  
      return 0; // Default to no sorting if conditions don't match
    });
  
    setSortedData(sortedArray);
  }




 export const handleDragEnd = (result :any , data:any ,setData:any,id:any) => {
  
    if (!result.destination) {
      return;
    }
    const updatedItems = [...data];
    const [movedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, movedItem);
    // dispatch(Addlinks(updatedItems))
    setData(updatedItems);

    set(ref(db, `User/${id}/links/`), [...updatedItems]).then(() => {
      console.log("Data updated successfully");
    }).catch((error) => {
      console.error("Error updating data:", error);
    });
  };




  export const generateRandomPassword = (length: number = 12): string => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  
    const allChars = uppercase + lowercase + numbers + specialChars;
    
    if (length < 4) {
      throw new Error("Password length should be at least 4 to include all character types.");
    }
  
    const getRandomChar = (charset: string) =>
      charset[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * charset.length)];
  
    // Ensure at least one character from each set
    let password = [
      getRandomChar(uppercase),
      getRandomChar(lowercase),
      getRandomChar(numbers),
      getRandomChar(specialChars),
    ];
  
    // Fill the rest with random characters
    for (let i = 4; i < length; i++) {
      password.push(getRandomChar(allChars));
    }
  
    // Shuffle the password to mix guaranteed characters
    password = password.sort(() => Math.random() - 0.5);
  
    return password.join("");
  };



  export const separatePhoneNumber = (fullNumber: string | undefined) => {
    if (!fullNumber) return null;

    // Remove "+" if it exists at the beginning
    fullNumber = fullNumber.startsWith("+") ? fullNumber.slice(1) : fullNumber;

    // List of country codes (sorted by length to prevent partial matches)
    const countryCodes = ["1", "7", "20", "27", "30", "31", "32", "33", "34", "36", "39", "40", "41", "44", "45", "46", "47", "48", "49", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "63", "64", "65", "66", "81", "82", "84", "86", "90", "91", "92", "93", "94", "95", "98", "211", "212", "213", "216", "218", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "290", "291", "297", "298", "299", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379", "380", "381", "382", "383", "385", "386", "387", "389", "420", "421", "423", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "590", "591", "592", "593", "594", "595", "596", "597", "598", "599", "670", "672", "673", "674", "675", "676", "677", "678", "679", "680", "681", "682", "683", "685", "686", "687", "688", "689", "690", "691", "692", "850", "852", "853", "855", "856", "880", "886", "960", "961", "962", "963", "964", "965", "966", "967", "968", "970", "971", "972", "973", "974", "975", "976", "977", "992", "993", "994", "995", "996", "998"];

    // Sort country codes by length (longest first) to prevent partial matches
    countryCodes.sort((a, b) => b.length - a.length);

    for (let code of countryCodes) {
        if (fullNumber.startsWith(code)) {
            return {
                countryCode: `+${code}`, // Keep the "+" in the output
                phoneNumber: fullNumber.slice(code.length)
            };
        }
    }

    return null; // No valid country code found
};





export const isDatePassed = (timestamp: string): boolean => {
  const dateInMillis = Number(timestamp); // Convert string to number
  return dateInMillis < Date.now();
};


export const updateSubscrptionStatus = (userData: any) => {

  // Check if the user has an active subscription
  if (userData?.isProVersion) {
    const isExpired = isDatePassed(userData?.proVersionExpiryDate);
    if (isExpired) {
      // Update the user's subscription status
      update(ref(db, `User/${userData?.id}`),{
        isProVersion: false,
        isTrialPeriod: false,
        proVersionExpiryDate: "",
        proVersionPurchaseDate: "",
        transactionId: "",
        subscription: "",

      });
    }
  
}


if(userData?.isTeamsProVersion){
  const isExpired = isDatePassed(userData?.teamsProVersionExpiryDate);
  if (isExpired) {
    // Update the user's subscription status
    update(ref(db, `User/${userData?.id}`), {
      isTeamsProVersion: false,
      isTeamsTrialPeriod: false,
      teamsProVersionExpiryDate: "",
      teamsProVersionPurchaseDate: "",
      teamsTransactionId: "",
      teamsSubscription: "",

    });
  }
}
}







  
  



