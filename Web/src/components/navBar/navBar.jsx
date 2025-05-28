import { Link, NavLink } from "react-router";
import gogLogo from "../../assets/gog.svg";
import "./navBar.css";
import { ROUTES } from "../../constants";
import SearchForm from "../search/searchForm";

const NavBar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg py-0 fw-bolder shadow-lg">
      <div className="container gap-3 gap-lg-5 ">
        <Link className="mx-lg-5 navbar-brand" to={ROUTES.HOME}>
          <img src={gogLogo} alt="gogLogo" width="60" />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <i className="bi bi-list fs-1 "></i>
        </button>

        <div
          className="collapse navbar-collapse mx-lg-0 mx-2"
          id="navbarContent"
        >
          <div className="navbar-nav gap-3 align-items-lg-center">
            <NavLink className="nav-link " to={ROUTES.HOME}>
              STORE
            </NavLink>
            <NavLink
              className="nav-link"
              to={isLoggedIn ? ROUTES.LIBRARY : ROUTES.LOGIN}
            >
              LIBRARY
            </NavLink>

            <SearchForm routeSearch={ROUTES.SEARCH}></SearchForm>
          </div>
          <div className="mx-5 d-flex ms-auto align-items-lg-center gap-2 my-lg-0 my-4">
            {!isLoggedIn && (
              <>
                <NavLink className="nav-link" to={ROUTES.LOGIN}>
                  LOGIN
                </NavLink>
                <span className="text-white"> / </span>
                <NavLink className="nav-link" to={ROUTES.REGISTER}>
                  REGISTER
                </NavLink>
              </>
            )}

            {isLoggedIn && (
              <NavLink className="nav-link  " to={ROUTES.CART}>
                <i className="bi bi-cart4 fs-1" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
