import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from './store'
import { Icon,  } from "../Types";


interface linkInfoType{
  linkInfo:Icon
}
const initialState: linkInfoType = {linkInfo:{ name: "", img: "", placeholder: "", linkID: 0 }}

export const singleLinkSlice = createSlice({
  name: "singleLinkHandeler",
  
  initialState,
  reducers: {
   
    setLinkData: (state, action: PayloadAction<Icon>) => {
      state.linkInfo = action.payload;
    },
  },
});

export const { setLinkData } = singleLinkSlice.actions;

export default singleLinkSlice.reducer;
