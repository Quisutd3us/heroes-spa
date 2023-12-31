import {Link, NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../auth";

export const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logOut();
    navigate('/login', {
      replace: true
    })
  }
  return (
      <nav className={"navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-4"}>

        <Link
            className="navbar-brand ml-4 text-warning"
            to="/"
        >
          HApp
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
                className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
                className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/dc"
            >
              DC
            </NavLink>

            <NavLink
                className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto gap-3">
            <span className={'nav-item nav-link text-light'}>
              User: {user?.name}
            </span>
            <button
                onClick={onLogout}
                className={'nav-item btn btn-warning '}
            >
              LogOut
            </button>
          </ul>
        </div>
      </nav>
  )
}