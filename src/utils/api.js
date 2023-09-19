export const REQUEST_URL = "https://reqres.in";

export const API = {
  users: {
    getUsers: REQUEST_URL + "/api/users?page=",
    getSingleUser: REQUEST_URL + "/api/users/",
  },
  auth: {
    registration: REQUEST_URL + "/api/register",
    login: REQUEST_URL + "/api/login",
  },
};
