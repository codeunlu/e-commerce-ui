import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const appReducer = combineReducers({
  baskets: reducers.basketSlice,
});

export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
