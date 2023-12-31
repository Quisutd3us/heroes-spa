import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/index.js";

const LoginPage = () => {
  const {login} =useContext(AuthContext);
  const navigate = useNavigate();
  const onEnterApp = () => {
    login('david Lukas');
    navigate('/', {
      replace: true
    });
  }
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
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Login</h1>
            </div>
            <div className="col-xs-12">
              <button
                  onClick={onEnterApp}
                  className={'btn btn-primary'}>Enter
              </button>
            </div>
          </div>
        </div>

      </>
  );
}

export default LoginPage;