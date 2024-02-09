import { Option, Product } from "@/utils/type";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
interface ProductsState {
  products: Product[];
  brands: Option[];
  models: Option[];
  search: string;
  filterBrand: string;
  filterModel: string;
}

const initialState: ProductsState = {
  products: [],
  brands: [],
  models: [],
  search: "",
  filterBrand: "",
  filterModel: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
      action.payload.forEach((item: Product) => {
        const index = state.brands
          .map((brand) => brand.value.toLocaleLowerCase())
          .includes(item.brand.toLocaleLowerCase());
        if (!index) {
          state.brands.push({
            label: item.brand,
            value: item.brand.toLocaleLowerCase(),
          });
        }
      });
      action.payload.forEach((item: Product) => {
        const index = state.models
          .map((model) => model.value.toLocaleLowerCase())
          .includes(item.model.toLocaleLowerCase());
        if (!index) {
          state.models.push({
            label: item.model,
            value: item.model.toLocaleLowerCase(),
          });
        }
      });
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addFilterBrand: (state, action) => {
      state.filterBrand = action.payload;
    },
    addFilterModel: (state, action) => {
      state.filterModel = action.payload;
    },
  },
});

export const { addProducts, addSearch, addFilterBrand, addFilterModel } =
  productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const productsDataStore = (state: RootState) => state.products;
export default productsSlice.reducer;
