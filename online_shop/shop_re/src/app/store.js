import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../feauters/shop/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
