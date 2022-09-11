import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { getCartItems, removeCartItem } from "./thunkCartItems";
/* import cartItems from "../../cartItemsTest";
 */ import { openModal } from "../modalCart/modalSlice";

/* version withou thunk
    const initialState = {
  cartItems: cartItems,  //file import test
  amountItems: cartItems.length,
  total: 0,
  isLoading: true, //eventualy from the api
}; */
const initialState = {
  cartItems: [],
  amountItems: 0,
  total: 0,
  isLoading: true,
};
/* use Api thunk to get items initialState */
/* const url = "https://course-api.com/react-useReducer-cart-project"; */

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    /* this to reactive the total and the cart icon on nav */
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amountItems = amount;
      state.total = total;
    },
  },
  /* with createSlice setup extraReducers object to access in the lifecycle actions promise pending - fillfield - reject  */
  extraReducers: (builder) => {
    /*   [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action.payload); //  case if we have data from fetch ;
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      // console.log(action) case if we have error from fetch axios;
      console.log(action);
      state.isLoading = false;
    }, */
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
      /*       return state + action.payload
       */
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      console.log(action.payload); //  case if we have data from fetch ;
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.cartItems.filter((ele) => ele.id !== action.payload.id);
    });
    /*   [removeCartItem.fulfilled]: (state, action) => {
      state.filter((ele) => ele.id !== action.payload.id);
    }, */
  },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
/* reexprt for the About component that import */
export { getCartItems, removeCartItem };
export default cartSlice.reducer;
