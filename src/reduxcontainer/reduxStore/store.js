import { configureStore } from "@reduxjs/toolkit";
import reducer from "../authSlice/authSlice";
import thunk from "redux-thunk";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: reducer,
  },
  middleware: [thunk],
});

export const useAppDispatchh = store.dispatch;
export const useAppSelector = useSelector;
