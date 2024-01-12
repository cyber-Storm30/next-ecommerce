import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [{}],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cart = [...state.cart, item];
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      console.log(item);
    },
    clearCart: (state, action) => {
      console.log("clear cart");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
