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
  },
});

export const { addProdMeal, removeProdMeal } = customMealsSlice.actions;
export default customMealsSlice.reducer;
