import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const productIndex = state.cartProducts.findIndex(
        product => product._id === payload._id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.cartProducts.push(tempProduct);
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    cartHandler(state, { payload }) {
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    },
    removeFromCart(state, { payload }) {
      const filteredProduct = state.cartProducts.filter(
        product => product.id !== payload._id
      );

      state.cartProducts = filteredProduct;
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
  },
});

export const { addToCart, cartHandler, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
