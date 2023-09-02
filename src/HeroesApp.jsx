import {AppRouter} from "./router/AppRouter.jsx";


export const HeroesApp = () => {
  return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className={'d-flex flex-row-reverse'}>
                <h1
                    className={'display-3'}
                >HeroesApp</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppRouter/>
            </div>
          </div>
        </div>
      </>
  );
};

