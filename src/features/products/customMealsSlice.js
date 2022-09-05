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
    resetCustomProds(state) {
      state.pop();
    },
    updateMeal(state, action) {
      state[0].ingredients.push(action.payload);
    },
  },
});

export const { addProdMeal, updateMeal, removeProdMeal, resetCustomProds } =
  customMealsSlice.actions;
export default customMealsSlice.reducer;
