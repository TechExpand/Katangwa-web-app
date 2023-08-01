import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Storage } from "../../auth/api";
import authService from "../services/authService/authService";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await authService.login(email, password);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      throw Error(message);
      // return thunkAPI.rejectWithValue(message);
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

const initialState = {
  isAuthenticated: !!Storage.getItem("token"),
  user: Storage.getItem("user") || null,
};

console.log(!!Storage.getItem("token"));
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
      Storage.setItem("user", state.user);
      Storage.setItem("token", state.token);
    },
    removeUser: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
      Storage.removeItem("user");
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      Storage.removeItem("user");
      Storage.removeItem("token");
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      if (state.user) {
        Storage.setItem("user", state.user);
        Storage.setItem("token", state.token);
      }
    },
    [login.rejected]: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
