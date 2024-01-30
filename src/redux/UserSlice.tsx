import { createSlice } from "@reduxjs/toolkit";

interface User {
  _id: String;
  image: String;
  name: String;
  desc: String;
  category: [];
  basePrice: Number;
  quantity: Number;
  size: String;
}

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
