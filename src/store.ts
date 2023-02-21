import { configureStore } from '@reduxjs/toolkit'
import userSlice from './states/userSlice'
import cartSlice from './states/cartSlice'
import searchSlice from './states/searchSlice'

console.log(userSlice)
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
    user: userSlice.reducer,
  },
})

