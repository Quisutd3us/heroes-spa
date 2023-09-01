import {Routes, Route} from "react-router-dom";
import LoginPage from "../heroes/pages/LoginPage.jsx";
import {HeroesRoutes} from "../heroes/index.js";

export const AppRouter =() => {
  return (
      <>
        <Routes>
          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'/*'} element={<HeroesRoutes/>}/>
        </Routes>
      </>
  );
}
