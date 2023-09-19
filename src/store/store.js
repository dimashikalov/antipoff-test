import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import usersSlice from "./users/usersSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
