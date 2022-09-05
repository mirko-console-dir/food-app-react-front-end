import { createSlice } from "@reduxjs/toolkit";

export const IngredientsMealSlice = createSlice({
  name: "ingredientsMeal",
  initialState: [],
  reducers: {
    addVarMeal(state, action) {
      state.push(action.payload);
    },
    removeVarMeal(state, action) {
      state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addVarMeal, removeVarMeal } = IngredientsMealSlice.actions;
export default IngredientsMealSlice.reducer;
