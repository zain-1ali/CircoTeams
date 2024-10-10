import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from './store'
import { Icon,  } from "../Types";

// Define a type for the slice state

// Define the initial state using that type
const initialState: Icon = { name: "", img: "", placeholder: "", linkID: 0 }

export const singleLinkSlice = createSlice({
  name: "singleLinkHandeler",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // reducer to show or hide profile creation stages in signup screen
    setLinkData: (state, action: PayloadAction<Icon>) => {
      state = action.payload;
    },
  },
});

export const { setLinkData } = singleLinkSlice.actions;

export default singleLinkSlice.reducer;
