import { configureStore } from '@reduxjs/toolkit'
import CreateProfileHandeler from "./SignupSlice"
import profileEditSectionHandeler from "./EditSectionsSlice"
import teamSectionHandeler from "./TeamsSectionSlice"
import profileHandler from "./ProfileSlice"
import authLinkHandler from "./AuthAddLinkSlice"
import singleLinkHandeler from "./linkSlice"
import socialLinkHandler from "./socialLinkSlice"
import analyticsHandeler from "./AnalyticsSlice"
// ...

export const store = configureStore({
  reducer: {
    CreateProfileHandeler:CreateProfileHandeler,
    profileEditSectionHandeler:profileEditSectionHandeler,
    teamSectionHandeler:teamSectionHandeler,
    profileHandler:profileHandler,
    authLinkHandler:authLinkHandler,
    singleLinkHandeler:singleLinkHandeler,
    socialLinkHandler:socialLinkHandler,
    analyticsHandeler:analyticsHandeler
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch