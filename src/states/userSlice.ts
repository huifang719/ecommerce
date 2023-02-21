import { createSlice } from "@reduxjs/toolkit";

interface UserStateValue {
  userName: string | null;
}
interface UserState {
  value: UserStateValue; 
}
const initialState = {value: { userName: null }} as UserState

const userSlice = createSlice({
  name: "User", 
  initialState, 
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state = initialState;
    }
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice;