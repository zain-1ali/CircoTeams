import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  assignedTo: "",
};

export const templateInvidualLinkSlice = createSlice({
  name: "TemplateInvidualLinkHandeler",
  initialState,
  reducers: {
    setAssignedTo: (state, action: PayloadAction<string>) => {
      state.assignedTo = action.payload;
    },
  },
});

export const { setAssignedTo } = templateInvidualLinkSlice.actions;

export default templateInvidualLinkSlice.reducer;
