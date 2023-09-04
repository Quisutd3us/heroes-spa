import {types} from "../Types/types.js";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        logged:true,
        user: action.payload
      };
    case types.logOut:
      return {
        logged: false,
      };
    default:
      return state
  }
}