import {describe, test, expect} from '@jest/globals';
import {authReducer,types} from "../../../auth";

describe('Suite of test for authReducer.js', () => {
  const initialState = {
    logged: false
  }
  const user = {
    id: 'ABC',
    name: 'David Doe'
  }
  test('Must be return the initial State', () => {
    const newState = authReducer(initialState, {})
    expect(newState).toBe(initialState);
  });

  test('Must be login and add a user ', () => {
    const newAction = {
      type: types.login,
      payload: user
    }
    const newState = authReducer(initialState, newAction);
    expect(newState.logged).toBe(true);
    expect(newState.user).toEqual(newAction.payload);
  });

  test('Must be logout and delete the user',()=>{
    const newAction = {
      type: types.login,
      payload: user
    }
    const newState= authReducer(initialState, newAction);
    const logOutAction = {
      type:types.logOut
    }
    const logOutNewState = authReducer(newState,logOutAction);
    expect(logOutNewState.logged).toBe(false);
    expect(logOutNewState.user).toBeFalsy();
  });
});

