import { createSlice } from "@reduxjs/toolkit";

export const customMealsSlice = createSlice({
  name: "productsMeal",
  initialState: [],
  reducers: {
    addProdMeal(state, action) {
      state.push(action.payload);
    },
    removeProdMeal(state, action) {
      state.filter((p) => p.id !== action.payload.id);
    },
    addVariantMeal(state, action) {
      state.forEach((m) => {
        m.ingredients.push(action.payload);
      });
    },
    resetCustomProds(state) {
      state.pop();
    },
  },
});

export const { addProdMeal, removeProdMeal, addVariantMeal, resetCustomProds } =
  customMealsSlice.actions;
export default customMealsSlice.reducer;
