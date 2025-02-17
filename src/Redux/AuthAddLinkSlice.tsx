import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthLinksProps } from "../Types"; // Import the necessary types

// Initial state using the UserProfile type
const initialState: AuthLinksProps = {
  links: [
    {
      baseUrl: "tel://",
      buttonImgUrl: "",
      email: "",
      graphicDisplayText: "",
      graphicDisplayType: "",
      graphicImgUrl: "",
      graphicTextColor: "",
      id: JSON.stringify(Date.now()) + "2",
      image: "",
      isLinkHighlighted: false,
      linkHighlightDescription: "",
      linkID: 2,
      linkImgUrl: "",
      name: "Mobile",
      placeholder: "",
      shareable: true,
      style: "",
      title: "",
      type: "",
      url: "",
      value: "",
      iconStyle: "",
    },

    {
      baseUrl: "mailto:",
      buttonImgUrl: "",
      email: "",
      graphicDisplayText: "",
      graphicDisplayType: "",
      graphicImgUrl: "",
      graphicTextColor: "",
      id: JSON.stringify(Date.now()) + "1",
      image: "",
      isLinkHighlighted: false,
      linkHighlightDescription: "",
      linkID: 3,
      linkImgUrl: "",
      name: "Email",
      placeholder: "",
      shareable: true,
      style: "",
      title: "",
      type: "",
      url: "",
      value: "",
      iconStyle: "",
    },
  ],
};

// Create the slice
export const profileSlice = createSlice({
  name: "authLinkHandler",
  initialState,
  reducers: {
    setSocialEmail: (state, action: PayloadAction<string>) => {
      state.links[1].value = action.payload;
    },
    setSocialCall: (state, action: PayloadAction<string>) => {
      state.links[0].value = action.payload;
    },
  },
});

// Export the actions
export const { setSocialEmail, setSocialCall } = profileSlice.actions;

export default profileSlice.reducer;
