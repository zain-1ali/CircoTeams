import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'
import { reduxSignupCreateProfileState } from '../Types'

// Define a type for the slice state


// Define the initial state using that type
const initialState: reduxSignupCreateProfileState = {
    isSignupCreateProfile:false,
    signupCreateProfileStage:0,
}

export const signupCreateProfileSlice = createSlice({
  name: 'CreateProfileHandeler',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // reducer to show or hide profile creation stages in signup screen
    setStartProfileCreation: (state, action: PayloadAction<boolean>) => {
      state.isSignupCreateProfile = action.payload
    },
    setProfileCreationStage: (state, action: PayloadAction<number>) => {
        state.signupCreateProfileStage = action.payload
      },
  },
})

export const { setStartProfileCreation, setProfileCreationStage, } = signupCreateProfileSlice.actions

export default signupCreateProfileSlice.reducer