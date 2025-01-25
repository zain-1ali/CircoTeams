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
    iconStyle:"style1",
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
    setSocialLinkUrl: (state, action: PayloadAction<string>) => {
      state.link.url = action.payload;
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
      setGraphicLinkIcon: (state, action: PayloadAction<string>) => {
        state.link.iconStyle = action.payload;
      },
      setGraphicLinkTextColor: (state, action: PayloadAction<string>) => {
        state.link.graphicTextColor = action.payload;
      },
      resetSocialLink: (state) => {
        state.link.baseUrl= "",
        state.link.buttonImgUrl="",
        state.link.email= "",
        state.link.graphicDisplayText= "",
        state.link.graphicDisplayType="style1",
        state.link.graphicImgUrl="",
        state.link.graphicTextColor="",
        state.link.id=JSON.stringify(Date.now()),
        state.link.image="",
        state.link.isLinkHighlighted=false,
        state.link.linkHighlightDescription="",
        state.link.linkID=0,
        state.link.linkImgUrl="",
        state.link.name="",
        state.link.placeholder="",
        state.link.shareable=true,
        state.link.style="",
        state.link.title="",
        state.link.type="",
        state.link.url="",
        state.link.value="",
        state.link.iconStyle=""
      },
      setGraphicDisplayText: (state, action: PayloadAction<string>) => {
        state.link.graphicDisplayText = action.payload;
      },
      updateAllSocialLinkValues: (state, action: PayloadAction<SocialLinkProps["link"]>) => {
        state.link = { ...action.payload };
      },
  },
});

// Export the actions
export const { setGraphicLinkIcon,setBtnImageUrl,setSocialLinkValue, setSocialLinkTitle,setSocialLinkIsHighlighted,setSocialLinkHighlightedDesc,setSocialLinkName,setSocialLinkBaseurl,setSocialLinklinkID,setSocialLinkImgUrl,setWebLinkStyle,setGraphicImgUrl,setGraphicDisplayType,resetSocialLink,setGraphicDisplayText,setGraphicLinkTextColor,updateAllSocialLinkValues,setSocialLinkUrl } = socialLinkSlice.actions;

export default socialLinkSlice.reducer;



















