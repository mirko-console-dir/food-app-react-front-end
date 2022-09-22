import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/cart/cartSlice";
import modalCartReducer from "../features/modalCart/modalSlice";
import customItemReducer from "../features/customItem/customItemSlice";
import { purchasesApi } from "../service/purchaseRTKservice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    modalCart: modalCartReducer,
    customItem: customItemReducer,
    /* purchases: purchasesApi.reducer, */
    /* diano lo stesso nome della path data in purchaseRTKservice */
    [purchasesApi.reducerPath]: purchasesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
