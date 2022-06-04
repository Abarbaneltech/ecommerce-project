import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_LINK = process.env.SNEAKERS_API;
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (args, { getState }) => {
    try {
      const config = {
        method: "GET",
        // url: `${API_LINK}/products`,
        url: "http://localhost:8000/products",
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
  status: "idle",
};

const productsSlice = createSlice({
  name: "sneakers",
  initialState,
  extraReducers: {
    [getAllProducts.pending]: state => {
      state.status = "loading";
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.products = payload;
    },
    [getAllProducts.rejected]: state => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
