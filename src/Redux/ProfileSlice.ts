import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile, ProfileDesign, Link } from '../Types'; // Import the necessary types

// Initial state using the UserProfile type
const initialState: UserProfile = {
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
    iconStyle:"",
    linkID: 0,
    name: "",
    placeholder: "",
    shareable: true,
    textAlign: "",
    title: "",
    type: "",
    value: "",
    graphicDisplayText:"", graphicDisplayType:"", graphicImgUrl:"", buttonImgUrl:"",
    linkImgUrl:"", style:""
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
  profileDesign: {
    appIconColor: "",
    backgroundColor: "#ffffff",
    backgroundImage: "https://firebasestorage.googleapis.com/v0/b/wajjcard-7be7d.appspot.com/o/pexels-egos68-1906658.jpg?alt=media&token=727feb95-1b77-4190-a273-38db9710e9d1",
    backgroundOpacity: 98,
    backgroundTheme: "Classic",
    boxBackgroundColor: "#ffffff",
    boxTextColor: "#000000",
    hideCompanyLogo: false,
    hideSaveContact: false,
    highlightBoxStyle: "style2",
    profileFont: "3",
    saveContactBackgroundColor: "#000000",
    saveContactStyle: "style4",
    saveContactTextColor: "#000000",
    weblinkButtonBackgroundColor: "#000000",
    weblinkButtonTextColor: "#ffffff",
    weblinkStyle: "style5",
    whiteProfileText: false,
    whiteTextAndBorder: true
  },
  profileName:"",
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
};

// Create the slice
export const profileSlice = createSlice({
  name: 'profileHandler',
  initialState,
  reducers: {
    // Generic updates for string fields
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },
    setCoverUrl: (state, action: PayloadAction<string | null>) => {
      state.coverUrl = action.payload;
    },
    setDob: (state, action: PayloadAction<string>) => {
      state.dob = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setProfileName: (state, action: PayloadAction<string>) => {
      state.profileName = action.payload;
    },
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setProfileTitle: (state, action: PayloadAction<string>) => {
      state.profileTitle = action.payload;
    },
    setProfileUrl: (state, action: PayloadAction<string | null>) => {
      state.profileUrl = action.payload;
    },
    setlogoUrl: (state, action: PayloadAction<string | null>) => {
      state.logoUrl = action.payload;
    },
    setQrColor: (state, action: PayloadAction<string>) => {
      state.qrColor = action.payload;
    },
    setQrLogo: (state, action: PayloadAction<string>) => {
      state.qrLogo = action.payload;
    },
    setSubscription: (state, action: PayloadAction<string>) => {
      state.subscription = action.payload;
    },
    setTransactionId: (state, action: PayloadAction<string>) => {
      state.transactionId = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    
    // Boolean states
    toggleDirectMode: (state,action: PayloadAction<boolean>) => {
      state.directMode =action.payload;
    },
    toggleIsProMatching: (state) => {
      state.isProMatching = !state.isProMatching;
    },
    toggleIsProVersion: (state) => {
      state.isProVersion = !state.isProVersion;
    },
    toggleIsTrialPeriod: (state,action: PayloadAction<boolean>) => {
      state.isTrialPeriod = action.payload;
    },
    toggleIsVisible: (state,action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
    toggleHideSaveContact: (state,action: PayloadAction<boolean>) => {
      state.hideSaveContact = action.payload;
    },
    toggleLeadMode: (state,action: PayloadAction<boolean>) => {
      console.log(action.payload,"leadmode");
      
      state.leadMode = action.payload;
    },

    // Complex state updates
    setDirect: (state, action: PayloadAction<Partial<Link>>) => {
      state.direct = { ...state.direct, ...action.payload };
    },
    setProfileDesign: (state, action: PayloadAction<Partial<ProfileDesign>>) => {
      state.profileDesign = { ...state.profileDesign, ...action.payload };
    },
    setProVersionDates: (state, action: PayloadAction<{ purchaseDate: string, expiryDate: string }>) => {
      state.proVersionPurchaseDate = action.payload.purchaseDate;
      state.proVersionExpiryDate = action.payload.expiryDate;
    },

    // Arrays
    setLinks: (state, action: PayloadAction<typeof initialState.links>) => {
      state.links = action.payload;
    },
    // addTagUid: (state, action: PayloadAction<typeof initialState.tagUid[0]>) => {
    //   state.tagUid.push(action.payload);
    // },
    setTagUid: (state, action: PayloadAction<typeof initialState.tagUid>) => {
      state.tagUid = action.payload;
    },
    // profile design 
    setAppIconColor: (state, action: PayloadAction<string>) => {
      state.profileDesign.appIconColor = action.payload;
    },
    setFont: (state, action: PayloadAction<string>) => {
      state.profileDesign.profileFont = action.payload;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.profileDesign.backgroundTheme = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.profileDesign.backgroundColor = action.payload;
    },
    setwhitenText: (state, action: PayloadAction<boolean>) => {
      state.profileDesign.whiteTextAndBorder = action.payload;
    },
    setSaveBtnStyle: (state, action: PayloadAction<string>) => {
      state.profileDesign.saveContactStyle = action.payload;
    },
    setSaveBtnText: (state, action: PayloadAction<string>) => {
      state.profileDesign.saveContactTextColor = action.payload;
    },
    setSaveBtnBgColor: (state, action: PayloadAction<string>) => {
      state.profileDesign.saveContactBackgroundColor = action.payload;
    },
    setWeblinkStyle: (state, action: PayloadAction<string>) => {
      state.profileDesign.weblinkStyle = action.payload;
    },
    setWeblinkButtonTextColor: (state, action: PayloadAction<string>) => {
      state.profileDesign.weblinkButtonTextColor = action.payload;
    },
    setWeblinkButtonBackgroundColor: (state, action: PayloadAction<string>) => {
      state.profileDesign.weblinkButtonBackgroundColor = action.payload;
    },

    setBoxBackgroundColor: (state, action: PayloadAction<string>) => {
      state.profileDesign.boxBackgroundColor = action.payload;
    },
    setBoxTextColor: (state, action: PayloadAction<string>) => {
      state.profileDesign.boxTextColor = action.payload;
    },
    setBoxStyle: (state, action: PayloadAction<string>) => {
      state.profileDesign.highlightBoxStyle = action.payload;
    },

    // reset to initial state

    resetState: (state) => {
      Object.assign(state, initialState);
    }
  }
});

// Export the actions
export const {
  setAddress,
  setBio,
  setCompany,
  setCoverUrl,
  setDob,
  setEmail,
  setFirstName,
  setLastName,
  setJobTitle,
  setName,
  setPhone,
  setPlatform,
  setProfileTitle,
  setProfileUrl,
  setQrColor,
  setQrLogo,
  setlogoUrl,
  setSubscription,
  setTransactionId,
  setUsername,
  setUserName,
  toggleDirectMode,
  toggleIsProMatching,
  toggleIsProVersion,
  toggleIsTrialPeriod,
  toggleIsVisible,
  toggleHideSaveContact,
  toggleLeadMode,
  setDirect,
  setProfileDesign,
  setProVersionDates,
  setLinks,
  setProfileName,
  setAppIconColor,
  setwhitenText,
  setBackgroundColor,
  setTheme,
  setFont,
  setSaveBtnBgColor,
  setSaveBtnText,
  setSaveBtnStyle,
//   addTagUid,
setWeblinkButtonTextColor,
setWeblinkStyle,
setWeblinkButtonBackgroundColor,
setBoxStyle,
setBoxTextColor,
setBoxBackgroundColor,
  setTagUid,
  resetState,
  setId
} = profileSlice.actions;

export default profileSlice.reducer;
