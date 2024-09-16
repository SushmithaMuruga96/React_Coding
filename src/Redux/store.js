import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice";
import SignupSlice from "./Slice/SignupSlice";
import UserSlice from "./Slice/UserSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// export const store = configureStore({
//   reducer: {
//     user: UserSlice,
//   },
// });

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: UserSlice,
  login: LoginSlice,
  signup: SignupSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
