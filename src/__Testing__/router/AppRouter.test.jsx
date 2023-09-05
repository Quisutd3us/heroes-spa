import {describe, expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../auth/index.js";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "../../router/AppRouter.jsx";

describe('Suite of test for <AppRouter/>', () => {
  test('Must be render <LoginPage/> if logged are false', () => {
    const context = {
      logged: false
    };
    render(
        <AuthContext.Provider value={context}>
          <MemoryRouter initialEntries={['/marvel']}>
            <AppRouter/>
          </MemoryRouter>
        </AuthContext.Provider>
    );
    expect(screen.getByText('Login')).toBeTruthy();
  });

  test('Must be render <MarvelPage/> when logged is true',()=>{
    const context = {
      logged: true,
      user:{
        id:'ABC',
        name:'Test User'
      }
    };

    render(
        <AuthContext.Provider value={context}>
          <MemoryRouter initialEntries={['/marvel']}>
            <AppRouter/>
          </MemoryRouter>
        </AuthContext.Provider>
    );
    expect(screen.getByText('Marvel Heroes List')).toBeTruthy();

  });
})