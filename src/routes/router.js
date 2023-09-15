import { createBrowserRouter } from "react-router-dom";
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  USERS_ROUTE,
  USER_ID_ROUTE,
} from "../utils/constans";
import { LoginPage, SingInPage, UserListPage, UserPage } from "../pages";
import React from "react";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <App />,
  },
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <SingInPage />,
  },
  {
    path: USERS_ROUTE,
    element: <UserListPage />,
  },
  {
    path: USER_ID_ROUTE,
    element: <UserPage />,
  },
]);
