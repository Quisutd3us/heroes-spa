import {Routes, Route} from "react-router-dom";
import {HeroesRoutes} from "../heroes/index.js";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoutes} from "./PublicRoutes.jsx";
import LoginPage from "../auth/pages/LoginPage.jsx";

export const AppRouter = () => {
  return (
      <>
        <Routes>
          <Route path={'login'} element={
            <PublicRoutes>
              <LoginPage/>
            </PublicRoutes>
          }/>
          <Route path={'/*'} element={
            <PrivateRoute>
              <HeroesRoutes/>
            </PrivateRoute>
          }/>
        </Routes>
      </>
  );
}
