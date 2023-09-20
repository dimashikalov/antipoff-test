import React, { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { checkUserAuth } from "./store/auth/authSlice";
import { fetchUsers } from "./store/users/usersActionCreator";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUserAuth());
    if (auth) {
      dispatch(fetchUsers());
    }
  }, [auth]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
