import axios from "axios";
import { API } from "../../utils/api";
import {
  userSingleFetchingSuccess,
  usersFetching,
  usersFetchingError,
  usersFetchingSuccess,
  usersMoreFetchingSuccess,
} from "./usersSlice";

export const fetchUsers =
  (page = 1) =>
  async (dispatch) => {
    dispatch(usersFetching);
    try {
      const response = await axios.get(API.users.getUsers + page);

      return dispatch(usersFetchingSuccess(response.data));
    } catch (error) {
      dispatch(usersFetchingError);
    }
  };
export const fetchMoreUsers = (page) => async (dispatch) => {
  dispatch(usersFetching);
  try {
    const response = await axios.get(API.users.getUsers + page);

    return dispatch(usersMoreFetchingSuccess(response.data));
  } catch (error) {
    dispatch(usersFetchingError);
  }
};

export const fetchSingleUser = (id) => async (dispatch) => {
  dispatch(usersFetching);
  try {
    const response = await axios.get(API.users.getSingleUser + id);
    console.log("res single", response.data);
    dispatch(userSingleFetchingSuccess(response.data));
  } catch (error) {
    dispatch(usersFetchingError);
  }
};
