import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  profilePictureLock: false,
  coverLock: false,
  logoLock: false,
  jobLock: false,
  companyLock: false,
  locationLock: false,
  emailLock: false,
  phoneLock: false,
  generalStyleLock:false,
  layoutStyleLock:false,
  saveContactStyleLock:false,
  webLinkStyleLock:false,
  highlightBoxStyleLock:false
};

export const templateLockedSlice = createSlice({
  name: "templateLockedHandeler",
  initialState,
  reducers: {
    setProfileLock: (state, action: PayloadAction<boolean>) => {
      state.profilePictureLock = action.payload;
    },
    setLogoLock: (state, action: PayloadAction<boolean>) => {
      state.logoLock = action.payload;
    },
    setCoverLock: (state, action: PayloadAction<boolean>) => {
      state.coverLock = action.payload;
    },
    setJobLock: (state, action: PayloadAction<boolean>) => {
      state.jobLock = action.payload;
    },
    setCompanyLock: (state, action: PayloadAction<boolean>) => {
      state.companyLock = action.payload;
    },
    setLocationLock: (state, action: PayloadAction<boolean>) => {
      state.locationLock = action.payload;
    },
    setPhoneLock: (state, action: PayloadAction<boolean>) => {
      state.phoneLock = action.payload;
    },
    setEmailLock: (state, action: PayloadAction<boolean>) => {
      state.emailLock = action.payload;
    },
    setGeneralStyleLock: (state, action: PayloadAction<boolean>) => {
        state.generalStyleLock = action.payload;
      },
    setLayoutStyleLock: (state, action: PayloadAction<boolean>) => {
        state.layoutStyleLock = action.payload;
    },
    setsaveContactStyleLock: (state, action: PayloadAction<boolean>) => {
        state.saveContactStyleLock = action.payload;
    }, 
    setWebLinkStyleLock: (state, action: PayloadAction<boolean>) => {
        state.webLinkStyleLock = action.payload;
    },         
    sethighlightBoxStyleLock: (state, action: PayloadAction<boolean>) => {
        state.highlightBoxStyleLock = action.payload;
    },         
  },
});

export const {
  setProfileLock,
  setLogoLock,
  setCoverLock,
  setJobLock,
  setCompanyLock,
  setLocationLock,
  setPhoneLock,
  setEmailLock,
  setGeneralStyleLock,
  setLayoutStyleLock,
  setsaveContactStyleLock,
  setWebLinkStyleLock,
  sethighlightBoxStyleLock
} = templateLockedSlice.actions;

export default templateLockedSlice.reducer;
