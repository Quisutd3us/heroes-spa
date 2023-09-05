import PropTypes from "prop-types";
import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";
import {types} from "../Types/types.js";

const initialState = {
  logged: false
}

const initializer =()=>{
  const user = JSON.parse(localStorage.getItem('user'));
  return{
    logged:!!user,
    user
  }
}
export const AuthProvider = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, initialState,initializer);
  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name
    }
    const action = {
      type: types.login,
      payload: user
    }
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }

  const logOut = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logOut,
    }
    dispatch(action);
  }
  return (
      <AuthContext.Provider value={{
        ...authState,
        login,
        logOut
      }}>
        {children}
      </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired
}
