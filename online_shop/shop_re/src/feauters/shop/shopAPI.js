import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../app/config";
import { Form } from "react-hook-form";

export const registerUser = createAsyncThunk("post/add user", async (obj) => {
  console.log(obj);
  const { data } = await Axios.post("register", obj);
  return data;
});

export const signIn = createAsyncThunk("post/signIn", async (user) => {
  const { data } = await Axios.post("signIn", user);
  return data;
});

export const getUser = createAsyncThunk("get/user", async () => {
  const { data } = await Axios.get("profile", {
    headers: {
      Authorization: `Token ${localStorage.user}`,
    },
  });
  return data;
});

export const getCountry = createAsyncThunk("get/country", async () => {
  const { data } = await Axios.get("getCountry");
  return data;
});

export const getCategory = createAsyncThunk("get/category", async () => {
  const { data } = await Axios.get("getCategory");
  return data;
});

export const getProducts = createAsyncThunk("get/products", async () => {
  const { data } = await Axios.get("getProducts");
  return data;
});

export const getProductsbyId = createAsyncThunk(
  "get/allProducts",
  async (id) => {
    const { data } = await Axios.get("getProduct/" + id);
    return data;
  }
);

export const addProduct = createAsyncThunk("post/addProduct", async (prod) => {
  const form = new FormData();
  for (let k in prod) {
    if (prod[k] instanceof Array) {
      prod[k].forEach((elm) => {
        form.append(k, elm);
      });
    } else {
      form.append(k, prod[k]);
    }
  }
  const { data } = await Axios.post("addProduct", form, {
    headers: {
      Authorization: `Token ${localStorage.user}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
});

export const logoutUser = createAsyncThunk("get/logout", async () => {
  const { data } = await Axios.get("logout", {
    headers: { Authorization: `Token ${localStorage.user}` },
  });
  return data;
});
