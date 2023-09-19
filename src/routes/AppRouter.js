import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router";
import { LOGIN_ROUTE } from "../utils/constans";

const AppRouter = () => {
  const { auth } = useSelector((state) => state.auth);

  return (
    <Routes>
      {auth &&
        privateRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
