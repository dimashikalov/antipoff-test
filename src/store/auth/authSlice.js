import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  auth: false,
  token: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },

    authFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.auth = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", {
        token: action.payload.token,
        user: action.payload.user,
      });
    },

    authFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    authExit(state) {
      localStorage.removeItem("token");
      state.auth = false;
      state.user = {};
    },

    checkUserAuth(state) {
      const token = localStorage.getItem("token");

      if (token) {
        state.user = token.user;
        state.token = token.token;

        state.auth = true;
      }
    },
  },
});

export const {
  authExit,
  authFetching,
  authFetchingError,
  authFetchingSuccess,
  checkUserAuth,
} = authSlice.actions;

export default authSlice.reducer;
