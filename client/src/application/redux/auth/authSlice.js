import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_LINK = process.env.REACT_APP_SNEAKERS_URL;

export const register = createAsyncThunk(
  "auth/register",
  async (user, { getState }) => {
    try {
      const config = {
        method: "POST",
        url: `${API_LINK}/auth/register`,
        data: user,
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { getState }) => {
    try {
      const config = {
        method: "POST",
        url: `${API_LINK}/auth/login`,
        data: data,
        withCredentials: true,
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  status: "idle",
  user: "",
  isOnUserId: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.status = "loading";
    },
    [register.fulfilled]: (state, { payload }) => {
      state.status = "success";
      console.log(payload);
      state.user = payload.user;
      state.isAuth = payload.isAuth;
    },
    [register.rejected]: state => {
      state.status = "failed";
    },
    [login.pending]: state => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, { payload }) => {
      state.status = "success";
      console.log(payload);
      state.user = payload.user;
      state.isAuth = payload.isAuth;
      state.isOnUserId = payload.isOnUserId;
    },
    [login.rejected]: state => {
      state.status = "failed";
    },
  },
});

export default authSlice.reducer;
