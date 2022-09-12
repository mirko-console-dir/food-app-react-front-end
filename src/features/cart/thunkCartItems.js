import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:3004/cartItems";

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
      const resp = await axios(url);
      console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItems",
  /* version without axios
  () => {
    return fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  } */
  async (id, thunkAPI) => {
    /* in the consol.log we can see the argument passed from the component that use this func getCartItems*/
    console.log(thunkAPI);
    /* here we have access to all the dispatch options */
    // console.log(thunkAPI.dispatch(openModal()));
    /* we can get any value from all the rest of the features.
    Image if u have an user feature to setUp your async action you can access it .getState().
    I can setup the user in a different features and I can access with the thunkAPI  */
    console.log("t s");
    console.log(thunkAPI.getState().cart.cartItems[id]);
    try {
      const resp = await axios.delete(url + "/" + id);
      console.log("iokok");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const addCartItem = createAsyncThunk(
  "cart/addCartItems",
  /* version without axios
    () => {
      return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    } */
  async (item, thunkAPI) => {
    /* in the consol.log we can see the argument passed from the component that use this func getCartItems*/
    console.log("the ite,");

    console.log(item);
    console.log(thunkAPI);
    /* here we have access to all the dispatch options */
    // console.log(thunkAPI.dispatch(openModal()));
    /* we can get any value from all the rest of the features.
      Image if u have an user feature to setUp your async action you can access it .getState().
      I can setup the user in a different features and I can access with the thunkAPI  */
    console.log("ora api");

    try {
      const resp = await axios.post(url + "/", item);
      console.log("postata");
      console.log(item);

      console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const incrCartItem = createAsyncThunk(
  "cart/incrCartItem",
  /* version without axios
    () => {
      return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    } */
  async (id, thunkAPI) => {
    /* in the consol.log we can see the argument passed from the component that use this func getCartItems*/
    console.log("the ite,");

    console.log(id);
    console.log(thunkAPI);
    /* here we have access to all the dispatch options */
    // console.log(thunkAPI.dispatch(openModal()));
    /* we can get any value from all the rest of the features.
      Image if u have an user feature to setUp your async action you can access it .getState().
      I can setup the user in a different features and I can access with the thunkAPI  */
    const amountItems = thunkAPI.getState().cart.cartItems[id].amount;
    try {
      const resp = await axios.patch(url + "/" + id, { amount: amountItems });
      console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
export const decrCartItem = createAsyncThunk(
  "cart/decrCartItem",
  /* version without axios
    () => {
      return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    } */
  async (id, thunkAPI) => {
    /* in the consol.log we can see the argument passed from the component that use this func getCartItems*/
    console.log("the ite,");

    console.log(id);
    console.log(thunkAPI);
    /* here we have access to all the dispatch options */
    // console.log(thunkAPI.dispatch(openModal()));
    /* we can get any value from all the rest of the features.
      Image if u have an user feature to setUp your async action you can access it .getState().
      I can setup the user in a different features and I can access with the thunkAPI  */
    console.log(thunkAPI.getState().cart);
    const amountItems = thunkAPI.getState().cart.cartItems[id].amount;
    try {
      const resp = await axios.patch(url + "/" + id, { amount: amountItems });
      console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
