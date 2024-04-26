import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "../slices/LoginSlices";
export const store = configureStore({
  reducer: {
    userName: userNameReducer,
  },
});
