import axios from "axios";
import { API } from "../../utils/api";
import { authFetchingError } from "./authSlice";

// const headers = {
//   "Content-Type": "application/json",
// };

export const registrationUser = (authData) => async (dispatch) => {
  let email;

  if (authData) {
    email = "eve.holt@reqres.in";
  }

  const data = {
    email,
    password: authData.password,
  };
  try {
    const response = await axios.post(API.auth.registration, data);
    console.log("res", response);
  } catch (error) {
    // dispatch(authFetchingError(error.message));
  }
};
