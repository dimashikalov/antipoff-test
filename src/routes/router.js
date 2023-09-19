import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  USERS_ROUTE,
  // USER_ID_ROUTE,
} from "../utils/constans";
import { LoginPage, SingInPage, UserListPage, UserPage } from "../pages";
import React from "react";

export const privateRoutes = [
  {
    path: USERS_ROUTE,
    element: <UserListPage />,
  },
  {
    path: USERS_ROUTE + "/:id",
    element: <UserPage />,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <SingInPage />,
  },
];
