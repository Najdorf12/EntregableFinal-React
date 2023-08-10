import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading";
import products from "./slices/products";
import cart from "./slices/cart";

export default configureStore({
  reducer: {
    isLoading,
    products,
    cart
  }
});