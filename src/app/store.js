import { configureStore } from "@reduxjs/toolkit";
/* ascoltatre cambiamenti api purchase */
import { setupListeners } from "@reduxjs/toolkit/dist/query";

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
    }).concat(purchasesApi.middleware), //accediamo al middleware
  //middleware della api per ascolrtare i cambiamenti e faccia la subscibe alla store, accediamo al middleware e usare setupListeners
});
setupListeners(store.dispatch); //api ascolta cambiamenti della store
