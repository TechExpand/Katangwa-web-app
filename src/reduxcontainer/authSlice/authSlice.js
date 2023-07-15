import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Storage } from "src/auth/api";
import authService from "../services/authService/authService";

export const login = createAsyncThunk(
  "auth/login",
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

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ fullname, email, password }, thunkAPI) => {
    try {
      const data = await authService.signup(fullname, email, password);
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
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
