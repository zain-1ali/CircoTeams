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
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
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
    toggleDirectMode: (state) => {
      state.directMode = !state.directMode;
    },
    toggleIsProMatching: (state) => {
      state.isProMatching = !state.isProMatching;
    },
    toggleIsProVersion: (state) => {
      state.isProVersion = !state.isProVersion;
    },
    toggleIsTrialPeriod: (state) => {
      state.isTrialPeriod = !state.isTrialPeriod;
    },
    toggleIsVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
    toggleHideSaveContact: (state) => {
      state.hideSaveContact = !state.hideSaveContact;
    },
    toggleLeadMode: (state) => {
      state.leadMode = !state.leadMode;
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
//   addTagUid,
  setTagUid
} = profileSlice.actions;

export default profileSlice.reducer;
