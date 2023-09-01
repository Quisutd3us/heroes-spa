import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "../../ui/components/NavBar.jsx";
import MarvelPage from "../pages/MarvelPage.jsx";
import DcPage from "../pages/DcPage.jsx";
import {SearchPage,HeroPage} from '../pages/index.js';

export const HeroesRoutes = () => {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path={'marvel'} element={<MarvelPage/>}/>
          <Route path={'dc'} element={<DcPage/>}/>
          <Route path={'search'} element={<SearchPage/>}/>
          <Route path={'hero'} element={<HeroPage/>}/>
          <Route path={'/'} element={<Navigate to={'marvel'}/>}/>
        </Routes>
      </>
  );
};

