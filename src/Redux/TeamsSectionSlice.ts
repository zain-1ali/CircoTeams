import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { reduxTeamSection } from "../Types";

// Define a type for the slice state

// Define the initial state using that type
const initialState: reduxTeamSection = {
  teamSectionStage: 0,
};

export const teamEditSectionSlice = createSlice({
  name: "teamSectionHandeler",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // reducer to show or hide profile creation stages in signup screen
    setTeamSection: (state, action: PayloadAction<number>) => {
      state.teamSectionStage = action.payload;
    },
  },
});

export const { setTeamSection } = teamEditSectionSlice.actions;

export default teamEditSectionSlice.reducer;
