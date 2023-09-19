import axios from "axios";
import { API } from "../../utils/api";
import {
  userSingleFetchingSuccess,
  usersFetching,
  usersFetchingError,
  usersFetchingSuccess,
} from "./usersSlice";

export const fetchUsers = () => async (dispatch) => {
  dispatch(usersFetching);
  try {
    const response = await axios.get(API.users.getUsers);
    console.log("res", response.data);
    return dispatch(usersFetchingSuccess(response.data));
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