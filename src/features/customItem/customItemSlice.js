import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { openModal } from "../modalCart/modalSlice";

const initialState = {
  customItems: [],
};

export const customItemSlice = createSlice({
  name: "customItem",
  initialState,
  reducers: {
    createCustomItem: (state, action) => {
      state.customItems.push(action.payload);
    },
    removeCustomItem: (state) => {
      state.customItems = [];
    },
    removeItem: (state, action) => {
      /*  const itemId = action.payload;
      state.ingredients = state.ingredients.filter((item) => item.id !== itemId); */
    },
    addIngredient: (state, action) => {
      if (state.customItems[0].ingredients.length > 0) {
        state.customItems[0].ingredients.forEach((item) => {
          if (item.id_variant === action.payload.id_variant) {
            item.amount = item.amount + 1;
          } else {
            state.customItems[0].ingredients.push(action.payload);
          }
        });
      } else {
        state.customItems[0].ingredients.push(action.payload);
      }
    },
    increase: (state, { payload }) => {
      /* const cartItem = state.ingredients.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1; */
    },
    decrease: (state, { payload }) => {
      /* const cartItem = state.ingredients.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1; */
    },
    /* this to reactive the total and the cart icon on nav */
    /* calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.ingredients.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amountIngredients = amount;
      state.total = total;
    }, */
  },
  /* with createSlice setup extraReducers object to access in the lifecycle actions promise pending - fillfield - reject  */
  /*  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action); //  case if we have data from fetch ;
      state.isLoading = false;
      state.ingredients = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      // console.log(action) case if we have error from fetch axios;
      console.log(action);
      state.isLoading = false;
    },
  }, */
});
export const {
  createCustomItem,
  removeCustomItem,
  createIngredient,
  addIngredient,
  increase,
  decrease,
} = customItemSlice.actions;
export default customItemSlice.reducer;
