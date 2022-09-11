import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../cartItemsTest";
import { openModal } from "../modalCart/modalSlice";

/* version withou thunk
    const initialState = {
  cartItems: cartItems,  //file import test
  amountItems: cartItems.length,
  total: 0,
  isLoading: true, //eventualy from the api
}; */
const initialState = {
  cartItems,
  amountItems: cartItems.length,
  total: 0,
  isLoading: true,
};
/* use Api thunk to get items initialState */
const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  /* version without axios
  () => {
    return fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  } */
  async (name, thunkAPI) => {
    /* in the consol.log we can see the argument passed from the component that use this func getCartItems*/
    console.log(name);
    console.log(thunkAPI);
    /* here we have access to all the dispatch options */
    // console.log(thunkAPI.dispatch(openModal()));
    /* we can get any value from all the rest of the features.
    Image if u have an user feature to setUp your async action you can access it .getState().
    I can setup the user in a different features and I can access with the thunkAPI  */
    console.log(thunkAPI.getState());

    try {
      const resp = await axios(cartItems);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action); //  case if we have data from fetch ;
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      // console.log(action) case if we have error from fetch axios;
      console.log(action);
      state.isLoading = false;
    },
  },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
