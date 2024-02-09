import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import basketsReducer from "./baskets/basketsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    baskets: basketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
