import {describe, expect, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {PublicRoutes} from "../../router/PublicRoutes.jsx";
import {AuthContext} from "../../auth/index.js";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Suite of test for <PublicRoutes/>', () => {
  const contextValue = {
    logged: false
  }
  test('Must be return the children if the logged is false', () => {
    render(
        <AuthContext.Provider value={contextValue}>
          <PublicRoutes>
            <h1>This is template of Children</h1>
          </PublicRoutes>
        </AuthContext.Provider>
    )

    expect(screen.getByText('This is template of Children')).toBeTruthy();

  });

  test('Must be navigate to /marvel route if logged is true', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Jon Doe',
        id: 'ABC'
      }
    }
    render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={['/login']}>
            <Routes>
              <Route path={'login'} element={
                <PublicRoutes>
                  <h1>Public Route</h1>
                </PublicRoutes>
              }/>
              <Route path={'marvel'} element={<h1>Page of Marvel</h1>}/>
            </Routes>
          </MemoryRouter>
        </AuthContext.Provider>
    );
    expect(screen.getByText('Page of Marvel')).toBeTruthy();
  });
});