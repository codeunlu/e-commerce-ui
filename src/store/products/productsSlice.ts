import { Option, Product } from "@/utils/type";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import { sortBy } from "lodash";
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
    sortByProduct: (state, action) => {
      switch (action.payload) {
        case "dateasc":
          state.products.sort(function (a, b) {
            return a.createdAt > b.createdAt ? 1 : -1;
          });
          break;
        case "datedesc":
          state.products.sort(function (a, b) {
            return b.createdAt > a.createdAt ? 1 : -1;
          });
          break;
        case "priceasc":
          state.products.sort(function (a, b) {
            return a.price > b.price ? 1 : -1;
          });
          break;
        case "pricedesc":
          state.products.sort(function (a, b) {
            return b.price > a.price ? 1 : -1;
          });
          break;
      }
    },
  },
});

export const {
  addProducts,
  addSearch,
  addFilterBrand,
  addFilterModel,
  sortByProduct,
} = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const productsDataStore = (state: RootState) => state.products;
export default productsSlice.reducer;
