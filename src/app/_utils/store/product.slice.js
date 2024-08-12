import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedProductIds:  [],
    totalPrice: 0,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
        state.selectedProductIds.push(action.payload);
    },
    resetSelectedProduct: (state) => {
      state.selectedProductIds = null;
    },
    removeSelectedProduct: (state, action) => {
        state.selectedProductIds = state.selectedProductIds.filter(
          (id) => id !== action.payload
        );
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    resetTotalPrice: (state) => {
      state.totalPrice = 0;
    },
   
  },
});

export const { setSelectedProduct, resetSelectedProduct, removeSelectedProduct,updateTotalPrice,resetTotalPrice} = productSlice.actions;
export default productSlice.reducer;
