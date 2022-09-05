import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import customMealsReducer from "../features/products/CustomMealsSlice";
import ingredientsMealReducer from "../features/products/IngredientsMealSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productsMeal: customMealsReducer,
    ingredientsMeal: ingredientsMealReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
