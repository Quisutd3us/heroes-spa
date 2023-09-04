import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";
import {types} from "../Types/types.js";

const initialState = {
  logged: false
}
export const AuthProvider = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id:'ABC',
        name
      }
    }
    dispatch(action);
  }
  return (
      <AuthContext.Provider value={{
        ...authState,
        login
      }}>
        {children}
      </AuthContext.Provider>
  );
}
