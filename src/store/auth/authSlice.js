import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: "",
  auth: false,
  token: "",
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
      state.isError = "";
      state.auth = true;
      state.token = action.payload.token;
      localStorage.setItem(
        "token",
        JSON.stringify({
          token: action.payload.token,
          user: action.payload.user,
        })
      );
    },

    authFetchingError(state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    authExit(state) {
      localStorage.removeItem("token");
      state.auth = false;
    },

    checkUserAuth(state) {
      const token = localStorage.getItem("token");

      if (token) {
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
