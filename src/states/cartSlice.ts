import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: number | null;
  name: string | null;
  quantity: number | null;
  price: number | null;
}
interface CartState {
  value: Item []
}

const initialState: CartState = {value: []}; 

const cartSlice = createSlice({
  name: "Cart", 
  initialState, 
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    }   
  }
})

export default cartSlice; 