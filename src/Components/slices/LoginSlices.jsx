import { createSlice } from "@reduxjs/toolkit";

const initalState = [
  {
    userName: "",
  },
];

export const LoginSlice = createSlice({
  name: "loginusername",
  initalState,
  reducers: {
    logInpage: (state, action) => {
      state.userName.push(action.payload);
    },
  },
});

export const { logInpage } = LoginSlice.actions;
export default LoginSlice.reducer;
