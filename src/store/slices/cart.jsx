import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setisLoading } from "./isLoading";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setProductCart: (state, action) => {
      return action.payload;
    },
  },
});


export const getProductsCartThunk = () => (dispatch) => {
  dispatch(setisLoading(true));
  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, getConfig())
    .then((resp) => dispatch( setProductCart(resp.data) ))
    .catch((error) => console.error(error))
    .finally(dispatch(setisLoading(false)));
};

export const addProductsThunk = (data) => (dispatch) => {
  dispatch(setisLoading(true));
  axios
    .post(
      "https://e-commerce-api-v2.academlo.tech/api/v1/cart",
      data,
      getConfig()
    )
    .then(() => dispatch(getProductsCartThunk()))
    .catch((error) => console.error(error))
    .finally(dispatch(setisLoading(false)));
};

export const updateProductsCartThunk = (id, newQuantity) => (dispatch) => {
  dispatch(setisLoading(true));

  const body = {
    quantity: newQuantity,
  };

  axios
    .put(
      `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`,
      body,
      getConfig()
    )
    .then(() => dispatch( getProductsCartThunk()))
    .catch((error) => console.error(error))
    .finally(dispatch(setisLoading(false)));
};

export const purchaseCartThunk = () => (dispatch) => {
  dispatch(setisLoading(true));
  axios
    .post(
      "https://e-commerce-api-v2.academlo.tech/api/v1/purchases",
      {},
      getConfig()
    )
    .then(dispatch(getProductsCartThunk()))
    .catch((error) => console.error(error))
    .finally(dispatch(setisLoading(false)));
};

export const { setProductCart } = cartSlice.actions;
export default cartSlice.reducer;
