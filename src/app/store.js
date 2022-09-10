import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/cart/cartSlice";
import modalCartReducer from "../features/modalCart/modalSlice";
import customItemReducer from "../features/customItem/customItemSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    modalCart: modalCartReducer,
    customItem: customItemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
