import { Link } from "react-router";
import gogLogo from "../../assets/gog.svg";
import "./navBar.css";
import { HOME_URL } from "../../constants";

const NavBar = () => {
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <nav className="navbar navbar-expand-lg py-0 navbar-darkGray fw-bolder shadow-lg">
      <div className="container gap-3 gap-lg-5 ">
        <Link className="mx-lg-5 navbar-brand" to={HOME_URL}>
          <img src={gogLogo} alt="gogLogo" width="60" />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <i className="bi bi-list fs-1 text-white"></i>
        </button>

        <div
          className="collapse navbar-collapse mx-lg-0 mx-2"
          id="navbarContent"
        >
          <div className="navbar-nav gap-3 align-items-lg-center">
            <Link className="nav-link text-white hover-white" to={HOME_URL}>
              STORE
            </Link>
            <Link className="nav-link text-white hover-white" to="/">
              LIBRARY
            </Link>
            <form className="d-flex align-items-center border-bottom border-white w-50 ">
              <i className="bi bi-search text-white "></i>
              <input
                className="form-control border-0 bg-transparent shadow-none py-0 ps-2 buscador"
                type="search"
                placeholder="SEARCH"
              />
            </form>
          </div>
          <div className="mx-5 d-flex ms-auto align-items-lg-center gap-2 my-lg-0 my-4">
            {!isLoggedIn ? (
              <>
                <Link className="nav-link text-white hover-white" to="/">
                  LOGIN
                </Link>
                <span className="text-white"> / </span>
                <Link className="nav-link text-white hover-white" to="/">
                  REGISTER
                </Link>
              </>
            ) : (
              <Link className="nav-link text-white hover-white" to="/">
                <i className="bi bi-cart4 fs-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
