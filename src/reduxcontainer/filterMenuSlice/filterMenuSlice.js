import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFilter: false,
};

const filterMenuSlice = createSlice({
  name: "filterMenuSlice",
  initialState,
  reducers: {
    setVisible: (state, action) => {
      state.showFilter = action.payload;
    },
  },
});

export const { setVisible } = filterMenuSlice.actions;
const filterMenuReducer = filterMenuSlice.reducer;
export default filterMenuReducer;
