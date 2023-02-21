import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: number | null;
  name: string | null;
  quantity: number | null;
  price: number | null;
}
interface CartState {
  cart: Item []
}

const initialState: CartState = {cart: []}; 

const cartSlice = createSlice({
  name: "Cart", 
  initialState, 
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    }   
  }
})

export default cartSlice; 