import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/categoryService/categoryService";

export const getCategories = createAsyncThunk(
  "product-categories",
  async (thunkAPI) => {
    try {
      const res = await categoryService.getCategories();
      return res.data;
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
  data: [],
  isLoading: false,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading;
      state.data = [];
    },
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
