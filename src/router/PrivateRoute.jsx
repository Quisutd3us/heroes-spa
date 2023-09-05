import PropTypes from "prop-types";
import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate, useLocation} from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const {logged} = useContext(AuthContext);
  const {pathName, search} = useLocation();
  const lastPath = pathName + search;
  localStorage.setItem('lastPath', lastPath);
  return (logged)
      ? children
      : <Navigate to={'/login'}/>
};

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired
}