import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from './store'
import { reduxEditSection } from "../Types";

// Define a type for the slice state

// Define the initial state using that type
const initialState: reduxEditSection = {
  profileEditSectionStage: 0,
};

export const profileEditSectionSlice = createSlice({
  name: "profileEditSectionHandeler",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // reducer to show or hide profile creation stages in signup screen
    setProfileEditSection: (state, action: PayloadAction<number>) => {
      state.profileEditSectionStage = action.payload;
    },
  },
});

export const { setProfileEditSection } = profileEditSectionSlice.actions;

export default profileEditSectionSlice.reducer;
