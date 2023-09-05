import {describe, expect, test} from "@jest/globals";
import {types} from "../../../auth";

describe('Suite of test for types.js', () => {
  test('Must be return the properties', () => {
    let logged = types.login;
    expect(logged).toContain('[Auth] Logged');
    logged = types.logOut;
    expect(logged).toContain('[Auth] LogOut');
    expect(types).toEqual({
      logOut: "[Auth] LogOut",
      login: "[Auth] Logged",
    })
  });
});