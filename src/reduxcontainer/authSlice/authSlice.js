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
  async ({ firstName, lastName, dob, phone, email, password }, thunkAPI) => {
    try {
      // console.log(firstName, lastName, gender);
      const data = await authService.signup({
        firstName,
        lastName,
        dob,

        phone,
        email,
        password,
      });
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
  isAuthenticated: !!Storage.getItem("token") && !!Storage.getItem("user"),
  user: Storage.getItem("user") || null,
  signupInfo: null,
};

console.log(!!Storage.getItem("token"));
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Object.assign(state.user, action.payload);
      // console.log(action.payload);
      state.signupInfo = action.payload;
    },
    removeUser: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
      Storage.removeItem("user");
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.user = null;
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
    [signup.pending]: (state, action) => {
      state.user = null;
      Storage.removeItem("user");
      Storage.removeItem("token");
    },
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.userInfo = null;
      state.isAuthenticated = true;
      if (state.user) {
        Storage.setItem("user", state.user);
        Storage.setItem("token", state.token);
      }
    },
    [signup.rejected]: (state, action) => {
      state.user = null;
      state.signupInfo = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
