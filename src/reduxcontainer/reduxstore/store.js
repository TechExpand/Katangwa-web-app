import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import authReducer from "../authSlice/authSlice";
import categoryReducer from "../productSlice/productSlice";
import filterMenuReducer from "../filterMenuSlice/filterMenuSlice";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { useSelector } from "react-redux";

const reducer = combineReducers({
  authReducer: authReducer,
  filterMenuReducer: filterMenuReducer,
  categoryReducer: categoryReducer,
});
export const store = configureStore(
  { reducer },
  applyMiddleware(thunk, ThunkMiddleware)
);

export const useAppDispatchh = store.dispatch;
export const useAppSelector = useSelector;
