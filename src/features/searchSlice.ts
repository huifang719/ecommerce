import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: []}

const searchSlice = createSlice({
  name: "search", 
  initialState, 
  reducers: {
    showResult: (state, action) => {
      state.value = action.payload; 
    }, 
    reset: (state, action) => {
      state = initialState;
    }
  }
})

export default searchSlice; 
