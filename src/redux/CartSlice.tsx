import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  _id: String;
  image: String;
  name: String;
  desc: String;
  category: [];
  basePrice: Number;
  quantity: Number;
  size: String;
}

interface CartItemSlice {
  cart: CartItem[];
  shipping: {};
  paymentMethod: "";
}

const initialState: CartItemSlice = {
  cart: [],
  shipping: {},
  paymentMethod: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem: any = state?.cart?.find((x: any) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x: any) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      console.log(item);
    },
    clearCart: (state, action) => {
      console.log("clear cart");
    },
    addShippingDetails: (state, action) => {
      state.shipping = action.payload;
    },
    addPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  addPaymentMethod,
  addShippingDetails,
} = cartSlice.actions;

export default cartSlice.reducer;
