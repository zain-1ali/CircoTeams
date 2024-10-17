import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  SocialLinkProps } from "../Types"; // Import the necessary types

// Initial state using the UserProfile type
const initialState: SocialLinkProps = {
  link: {
    baseUrl: "",
    buttonImgUrl:"",
    email: "",
    graphicDisplayText: "",
    graphicDisplayType:"style1",
    graphicImgUrl:"",
    graphicTextColor:"",
    id:JSON.stringify(Date.now()),
    image:"",
    isLinkHighlighted:false,
    linkHighlightDescription:"",
    linkID:0,
    linkImgUrl:"",
    name:"",
    placeholder:"",
    shareable:true,
    style:"",
    title:"",
    type:"",
    url:"",
    value:"",
},
};

// Create the slice
export const socialLinkSlice = createSlice({
  name: "socialLinkHandler",
  initialState,
  reducers: {
    setSocialLinkValue: (state, action: PayloadAction<string>) => {
      state.link.value = action.payload;
    },
    setSocialLinkTitle: (state, action: PayloadAction<string>) => {
      state.link.title = action.payload;
    },
    setSocialLinkIsHighlighted: (state, action: PayloadAction<boolean>) => {
        state.link.isLinkHighlighted = action.payload;
      },
    setSocialLinkHighlightedDesc: (state, action: PayloadAction<string>) => {
        state.link.linkHighlightDescription = action.payload;
      },  

      setSocialLinklinkID: (state, action: PayloadAction<number>) => {
        state.link.linkID = action.payload;
      }, 
      setSocialLinkBaseurl: (state, action: PayloadAction<string | undefined>) => {
        state.link.baseUrl = action.payload;
      },
      setSocialLinkName: (state, action: PayloadAction<string>) => {
        state.link.name = action.payload;
      },

      setSocialLinkImgUrl: (state, action: PayloadAction<string | null>) => {
        state.link.linkImgUrl = action.payload;
      },
      setWebLinkStyle: (state, action: PayloadAction<"style1"|"style2"|"style3">) => {
        state.link.style = action.payload;
      },
      setBtnImageUrl: (state, action: PayloadAction<string | null>) => {
        state.link.buttonImgUrl = action.payload;
      },
      setGraphicImgUrl: (state, action: PayloadAction<string>) => {
        state.link.graphicImgUrl = action.payload;
      },
      setGraphicDisplayType: (state, action: PayloadAction<string>) => {
        state.link.graphicDisplayType = action.payload;
      },
  },
});

// Export the actions
export const { setBtnImageUrl,setSocialLinkValue, setSocialLinkTitle,setSocialLinkIsHighlighted,setSocialLinkHighlightedDesc,setSocialLinkName,setSocialLinkBaseurl,setSocialLinklinkID,setSocialLinkImgUrl,setWebLinkStyle,setGraphicImgUrl,setGraphicDisplayType } = socialLinkSlice.actions;

export default socialLinkSlice.reducer;



















