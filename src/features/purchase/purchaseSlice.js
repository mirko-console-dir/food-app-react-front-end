import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { storePurchase } from "../../service/purchaseRTKservice";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  amount: "",
  cart_json: "",
  user_id: "",
  delivery_street: "",
  delivery_town: "",
  delivery_state: "",
  delivery_post_code: "",
  note: "",
  bill_street: "",
  bill_town: "",
  bill_state: "",
  bill_post_code: "",
};
/* use Api thunk to get items initialState */
/* const url = "https://course-api.com/react-useReducer-cart-project"; */

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {},

  extraReducers: (builder) => {},
});
export const {} = purchaseSlice.actions;
/* reexprt for the About component that import */
export {};
export default purchaseSlice.reducer;
