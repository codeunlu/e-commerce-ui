import { Basket } from "@/utils/type";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface BasketsState {
  baskets: Basket[];
  totalAmount: number;
}

const items =
  localStorage.getItem("baskets") !== null
    ? JSON.parse(localStorage.getItem("baskets"))
    : [];
const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const initialState: BasketsState = {
  baskets: items,
  totalAmount: totalAmount,
};

export const basketsSlice = createSlice({
  name: "baskets",
  initialState,
  reducers: {
    increase: (state, action) => {
      const basket: Basket = action.payload;
      state.baskets
        .filter((item) => item.productId === basket.productId)
        .map((item) => (item.quantity += 1));

      state.totalAmount = state.baskets.reduce(
        (total, item) => total + item.productPrice * item.quantity,
        0
      );

      localStorage.setItem("baskets", JSON.stringify(state.baskets));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    decrease: (state, action) => {
      const basket: Basket = action.payload;
      state.baskets
        .filter((item) => item.productId === basket.productId)
        .map((item) => (item.quantity -= 1));

      state.totalAmount = state.baskets.reduce(
        (total, item) => total + item.productPrice * item.quantity,
        0
      );

      localStorage.setItem("baskets", JSON.stringify(state.baskets));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    addBasket: (state, action) => {
      const basket: Basket = action.payload;
      const baskets = state.baskets.filter(
        (item) => item.productId === basket.productId
      );

      if (!baskets.length) {
        state.baskets.push(basket);
      }

      if (baskets.length) {
        baskets.forEach((item) => (item.quantity += 1));
      }

      state.totalAmount = state.baskets.reduce(
        (total, item) => total + item.productPrice * item.quantity,
        0
      );

      localStorage.setItem("baskets", JSON.stringify(state.baskets));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    removeBasket: (state, action) => {
      const basket: Basket = action.payload;
      state.baskets = state.baskets.filter(
        (item) => item.productId !== basket.productId
      );
      state.totalAmount = state.baskets.reduce(
        (total, item) => total + item.productPrice * item.quantity,
        0
      );

      localStorage.setItem("baskets", JSON.stringify(state.baskets));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    clearBasket: (state) => {
      state.baskets = [];
    },
  },
});

export const { addBasket, increase, decrease, removeBasket, clearBasket } =
  basketsSlice.actions;
export const selectBaskets = (state: RootState) => state.baskets.baskets;
export const basketsDataStore = (state: RootState) => state.baskets;
export default basketsSlice.reducer;
