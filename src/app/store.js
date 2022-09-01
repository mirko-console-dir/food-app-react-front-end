import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import customMealsReducer from "../features/products/customMealsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productsMeal: customMealsReducer,
  },
});
