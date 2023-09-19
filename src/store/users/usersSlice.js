import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: "",
  users: [],
  page: 1,
  total_pages: "",
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
      state.users = action.payload.data;
      state.page = action.payload.page;
      state.total_pages = action.payload.total_pages;
    },

    usersMoreFetchingSuccess(state, action) {
      state.isLoading = false;
      state.isError = "";
      state.users = [...state.users, ...action.payload.data];
      state.page = action.payload.page;
      state.total_pages = action.payload.total_pages;
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
  usersMoreFetchingSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
