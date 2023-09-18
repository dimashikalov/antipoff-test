export const API = {
  users: {
    getUsers: process.env.NEXT_PUBLIC_DOMAIN + "/api/users?page=",
    getSingleUser: process.env.NEXT_PUBLIC_DOMAIN + "/api/users/",
  },
  auth: {
    registration: process.env.NEXT_PUBLIC_DOMAIN + "/api/register",
    login: process.env.NEXT_PUBLIC_DOMAIN + "/api/login",
  },
};
