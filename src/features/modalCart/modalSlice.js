import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalCartSlice = createSlice({
  name: "modalCart",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalCartSlice.actions;

export default modalCartSlice.reducer;
