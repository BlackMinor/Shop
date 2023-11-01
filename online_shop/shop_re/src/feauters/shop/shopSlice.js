import { createSlice } from "@reduxjs/toolkit";
import {
  getCategory,
  getCountry,
  getProducts,
  getProductsbyId,
  getUser,
} from "./shopAPI";

const initialState = {
  user: {},
  country: [],
  category: [],
  products: {},
  product: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.country = action.payload.country;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload.category;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
    builder.addCase(getProductsbyId.fulfilled, (state, action) => {
      state.product = action.payload.product;
    });
  },
});

export default shopSlice.reducer;
