import {describe, expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../auth/index.js";
import {PrivateRoute} from "../../router/PrivateRoute.jsx";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Suite of test for <PrivateRoute/>', () => {

  test('Must be return children if logged is true ', () => {

    const context = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Jon Doe'
      }
    }
    render(
        <AuthContext.Provider value={context}>
          <MemoryRouter initialEntries={['/marvel']}>
            <PrivateRoute>
              <h1>Children Routes</h1>
            </PrivateRoute>
          </MemoryRouter>
        </AuthContext.Provider>
    );
    expect(screen.getByText('Children Routes')).toBeTruthy();
  });
  test('Must be navigate to /login if logged is false', () => {
    const context = {
      logged: false
    }
    render(
        <AuthContext.Provider value={context}>
          <MemoryRouter initialEntries={['/marvel']}>
            <Routes>
              <Route path={'/*'} element={
                <PrivateRoute>
                  <h1>Marvel Page</h1>
                </PrivateRoute>
              }>
              </Route>
              <Route path={'login'} element={<h1>Login Page</h1>}/>
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
    );
    expect(screen.getByText('Login Page')).toBeTruthy();
  })
});