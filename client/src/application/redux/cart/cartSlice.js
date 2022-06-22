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
        product => product._id !== payload._id
      );

      state.cartProducts = filteredProduct;

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    decreaseCart(state, { payload }) {
      const productIndex = state.cartProducts.findIndex(
        product => product._id === payload._id
      );

      if (state.cartProducts[productIndex].cartQuantity > 1) {
        state.cartProducts[productIndex].cartQuantity -= 1;
      } else if (state.cartProducts[productIndex].cartQuantity === 1) {
        const filteredProduct = state.cartProducts.filter(
          product => product._id !== payload._id
        );

        state.cartProducts = filteredProduct;

        localStorage.setItem(
          "cartProducts",
          JSON.stringify(state.cartProducts)
        );
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
    getTotalPrice(state, action) {
      let { total, quantity } = state.cartProducts.reduce(
        (cartTotal, cartProduct) => {
          const { price, cartQuantity } = cartProduct;
          const productTotal = price * cartQuantity;

          cartTotal.total += productTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  cartHandler,
  removeFromCart,
  decreaseCart,
  getTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
