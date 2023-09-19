import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: "",
  users: [],
  user: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },

    usersFetchingSuccess(state, action) {
      state.isLoading = false;
      state.isError = "";
      state.users = action.payload;
    },

    usersFetchingError(state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    userSingleFetchingSuccess(state, action) {
      state.isLoading = false;
      state.isError = "";
      state.user = action.payload;
    },
  },
});

export const {
  usersFetching,
  usersFetchingError,
  usersFetchingSuccess,
  userSingleFetchingSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
