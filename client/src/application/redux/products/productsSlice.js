import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_LINK = process.env.REACT_APP_SNEAKERS_URL;
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (args, { getState }) => {
    try {
      const config = {
        method: "GET",
        url: `${API_LINK}/products`,
      };
      const response = await axios(config);
      return response.data.sort(() => 0.5 - Math.random());
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProductByBrand = createAsyncThunk(
  "products/getProductByBrand",
  async (brand, { getState }) => {
    try {
      const config = {
        method: "POST",
        url: `${API_LINK}/products/search`,
        data: {
          brand: brand,
        },
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  products: [],
  brand: [],
  filteredProducts: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProductByBrand.pending]: state => {
      state.status = "loading";
    },
    [getProductByBrand.fulfilled]: (state, { payload }) => {
      state.status = "success";
      if (state.brand.length === 3) return;
      state.brand = [...state.brand, payload];
    },
    [getProductByBrand.rejected]: state => {
      state.status = "failed";
    },
    [getAllProducts.pending]: state => {
      state.status = "loading";
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.products = payload;
      state.filteredProducts = [...payload];
    },
    [getAllProducts.rejected]: state => {
      state.status = "failed";
    },
  },
  reducers: {
    searchByName: (state, action) => {
      const filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredProducts:
          action.payload.length > 0 ? filteredProducts : [...state.products],
      };
    },
  },
});

export const productActions = productsSlice.actions;

export default productsSlice.reducer;
