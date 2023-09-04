import {AppRouter} from "./router/AppRouter.jsx";
import {AuthProvider} from "./auth";


export const HeroesApp = () => {
  return (
      <AuthProvider>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppRouter/>
            </div>
          </div>
        </div>
      </AuthProvider>
  );
};

