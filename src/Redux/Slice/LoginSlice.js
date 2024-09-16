import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: "",
  userPassword: "",
  isLoggedIn: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateLoginInfo: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.userPassword = action.payload.userPassword;
      state.isLoggedIn = true;
    },
  },
});

export const { updateLoginInfo } = LoginSlice.actions;

export default LoginSlice.reducer;
