import { createSlice, current } from "@reduxjs/toolkit";
import { addCartItem } from "../../features/cart/thunkCartItems";

const initialState = {
  customItems: [
    {
      id: 0,
      name_prod: "",
      price: 0,
      image: "",
      description: "",
      amount: 0,
      id_prod: 0,
      ingredients: [
        {
          id: 0,
          name_variant: "",
          price: 0,
          image: "",
          description: "",
          amount: 0,
          total: 0,
          id_variant: 0,
        },
      ],
      amountIngredients: 0,
      total: 0,
      isLoading: true,
    },
  ],
};

export const customItemSlice = createSlice({
  name: "customItem",
  initialState,
  reducers: {
    createCustomItem: (state, action) => {
      state.customItems[0].id = action.payload.id;
      state.customItems[0].name_prod = action.payload.name_prod;
      state.customItems[0].price = action.payload.price;
      state.customItems[0].image = action.payload.image;
      state.customItems[0].description = action.payload.description;
      state.customItems[0].amount = action.payload.amount;
      state.customItems[0].id_prod = action.payload.id_prod;
      state.customItems[0].ingredients = action.payload.ingredients;
      state.customItems[0].total = action.payload.total;
      state.customItems[0].isLoading = action.payload.isLoading;
    },
    removeCustomItem: (state) => {
      state.customItems[0] = initialState.customItems[0];
    },
    increaseCustomItem: (state) => {
      const customItem = state.customItems.find((item) => item);
      customItem.amount = customItem.amount + 1;
      customItem.total = customItem.price * customItem.amount;
    },
    decreaseCustomItem: (state) => {
      const customItem = state.customItems.find((item) => item);
      customItem.amount = customItem.amount - 1;
      customItem.total = customItem.price * customItem.amount;
    },
    addIngredient: (state, action) => {
      if (state.customItems[0].ingredients.length > 0) {
        let val = true;
        state.customItems[0].ingredients.forEach((ingr) => {
          if (ingr.id_variant === action.payload.id_variant) {
            console.log("stesso prodotto");
            console.log(val);
            ingr.amount = ingr.amount + 1;
            ingr.total = ingr.amount * ingr.price;
            val = false;
          }
        });
        if (val === true) {
          state.customItems[0].ingredients.push(action.payload);
        }
      } else {
        state.customItems[0].ingredients.push(action.payload);
      }
    },
    removeIngredient: (state, action) => {},
    increaseIngredientItem: (state, { payload }) => {
      /*  const customItem = state.ingredients.find(
        (item) => item.id === payload.id
      );
      console.log(customItem); */
      /* customItem.amount = customItem.amount + 1;  */
    },
    decreaseIngredientItem: (state, { payload }) => {
      /* const customItem = state.ingredients.find((item) => item.id === payload.id);
      customItem.amount = customItem.amount - 1;  */
    },
    /* this to reactive the total customProd */
    calculateTotalsCustom: (state, action) => {
      state.customItems[0].amountIngredients =
        state.customItems[0].amountIngredients + 1;

      let totIng = 0;
      state.customItems[0].ingredients.forEach((ingredient) => {
        totIng += ingredient.total;
      });

      state.customItems[0].total =
        action.payload * state.customItems[0].amount + totIng;

      console.log(action.payload);
    },
  },
});
export const {
  createCustomItem,
  removeCustomItem,
  increaseCustomItem,
  decreaseCustomItem,
  calculateTotalsCustom,
  createIngredient,
  addIngredient,
  increaseIngredientItem,
  removeIngredient,
} = customItemSlice.actions;
export default customItemSlice.reducer;
