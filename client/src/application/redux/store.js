import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import authSlice from "./auth/authSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});
