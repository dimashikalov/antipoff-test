import React, { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useDispatch } from "react-redux";
import { checkUserAuth } from "./store/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
