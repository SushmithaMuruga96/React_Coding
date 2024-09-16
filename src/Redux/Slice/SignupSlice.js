import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateSignUp: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    },
  },
});

export const { updateSignUp } = SignupSlice.actions;
export default SignupSlice.reducer;
