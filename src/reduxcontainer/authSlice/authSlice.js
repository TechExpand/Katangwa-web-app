import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setMessage } from './message';
import { Storage } from "../../helpers/utils/storage";
// import { login } from '../reducer/authReducer';
// import AuthService from '../services/auth.service';
import authService from "../services/authService/authService";

export const login = createAsyncThunk(
  "/auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.login(email, password);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "/auth/register",
  async ({ email, first_name, last_name, phone }, thunkAPI) => {
    try {
      const data = await authService.register(
        email,
        first_name,
        last_name,
        phone
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = Storage.getItem("user");

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
      Storage.setItem("user", state);
    },
    removeUser: (state) => {
      state.access_token = undefined;
      state.user = undefined;
      Storage.removeItem("user");
    },
  },
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.user = null;
    },

    [activate.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [activate.rejected]: (state, action) => {
      state.user = null;
    },
    [getToken.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [getToken.rejected]: (state, action) => {
      state.user = null;
    },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  },
});

export const { setUser, removeUser } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;
