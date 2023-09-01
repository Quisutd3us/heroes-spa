import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onEnterApp = () => {
    navigate('/', {
      replace: true
    });
  }
  return (
      <>
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