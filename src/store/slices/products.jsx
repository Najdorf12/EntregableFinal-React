import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setisLoading } from "./isLoading";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const getProductsThunk = () => (dispatch) => {
 
  dispatch(setisLoading(true));

  setTimeout(() => {
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/products")
      .then((resp) => dispatch(setProducts(resp.data)))
      .catch((error) => console.error(error))
      .finally(() => dispatch(setisLoading(false)));
  }, "300");
};

export const filterProductsByCategoryThunk = (id) => (dispatch) => {
  
  dispatch(setisLoading(true));
  
  setTimeout(() => {
    axios
      .get(
        `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
      )
      .then((resp) => dispatch(setProducts(resp.data)))
      .catch((error) => console.error(error))
      .finally(() => dispatch(setisLoading(false)));
  },"300");
};

export const searchProductsByNameThunk = (name) => (dispatch) => {
 
  dispatch(setisLoading(true));
  
  setTimeout(() => {
    axios
      .get(
        `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${name}`
      )
      .then((resp) => dispatch(setProducts(resp.data)))
      .catch((error) => console.error(error))
      .finally(() => dispatch(setisLoading(false)));
  },"300");
};

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
