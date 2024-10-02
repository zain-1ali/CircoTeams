import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthLinksProps } from "../Types"; // Import the necessary types

// Initial state using the UserProfile type
const initialState: AuthLinksProps = {
  links: [
    {
      baseUrl: "mailto:",
      email: "",
      graphicTextColor: "",
      id: JSON.stringify(Date.now()) + "1",
      image: "",
      isLinkHighlighted: false,
      linkHighlightDescription: "",
      linkID: 3,
      name: "Email",
      placeholder: "",
      shareable: true,
      textAlign: "",
      title: "",
      type: "",
      value: "",
    },
    {
      baseUrl: "tel://",
      email: "",
      graphicTextColor: "",
      id: JSON.stringify(Date.now()) + "3",
      image: "",
      isLinkHighlighted: false,
      linkHighlightDescription: "",
      linkID: 2,
      name: "Mobile",
      placeholder: "",
      shareable: true,
      textAlign: "",
      title: "",
      type: "",
      value: "",
    },
  ],
};

// Create the slice
export const profileSlice = createSlice({
  name: "authLinkHandler",
  initialState,
  reducers: {
    setSocialEmail: (state, action: PayloadAction<string>) => {
      state.links[0].value = action.payload;
    },
    setSocialCall: (state, action: PayloadAction<string>) => {
      state.links[1].value = action.payload;
    },
  },
});

// Export the actions
export const { setSocialEmail, setSocialCall } = profileSlice.actions;

export default profileSlice.reducer;
