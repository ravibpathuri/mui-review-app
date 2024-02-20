import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./Product.types";

// Define a type for the slice state
export type CartState = {
  products: ProductType[] | undefined;
};

const initialState: CartState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductType>) => {
      state.products?.push(action.payload);
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addProductToCart, clearCart } = productSlice.actions;

export default productSlice.reducer;
