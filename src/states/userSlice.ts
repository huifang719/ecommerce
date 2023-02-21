import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: { userName: null }}

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