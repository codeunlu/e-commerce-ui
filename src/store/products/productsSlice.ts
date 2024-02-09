import { Product } from "@/utils/type";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: Product[];
  brands: string[];
  models: string[];
  filter: string;
}

const initialState: ProductsState = {
  products: [],
  brands: [],
  models: [],
  filter: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
      state.brands = action.payload.map((item: Product) => item.brand);
      state.models = action.payload.map((item: Product) => item.model);
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addProducts, addFilter } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const productsDataStore = (state: RootState) => state.products;
export default productsSlice.reducer;
