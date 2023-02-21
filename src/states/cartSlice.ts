import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: { id: null, iTemName:null, quantitnty : 0 }}


const cartSlice = createSlice({
  name: "Cart", 
  initialState, 
  reducers: {
    addCart: (state, action) => {
      
    }
  }
})

export default cartSlice; 