import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Reducers/LoginSlice";
import SignupSlice from "./Reducers/SignupSlice";

const store = configureStore({
  reducer: {
    login: LoginSlice,
    signup: SignupSlice,
  },
});
console.log(store.getState(), "reducer");

export default store;
