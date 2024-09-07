import { configureStore } from '@reduxjs/toolkit'
import CreateProfileHandeler from "./SignupSlice"
// ...

export const store = configureStore({
  reducer: {
    CreateProfileHandeler:CreateProfileHandeler
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch