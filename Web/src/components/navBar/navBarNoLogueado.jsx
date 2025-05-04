import { Link } from "react-router";
import gogLogo from "../../assets/gog.svg";
import "./navBarNoLogueado.css";

const NavBarNoLogueado = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-darkGray fw-bolder shadow-lg	">
      <div className="container gap-5">
        <Link className="navbar-brand" to="/">
          <img src={gogLogo} alt="gogLogo" width="60" />
        </Link>
        <div className="navbar-nav gap-3">
          <Link className="nav-link text-white hover-white" to="/">
            STORE
          </Link>
          <Link className="nav-link text-white hover-white" to="/">
            LIBRARY
          </Link>
          <form className="d-flex align-items-center border-bottom border-white ">
            <i className="bi bi-search text-white "></i>
            <input
              className="form-control border-0 bg-transparent shadow-none ps-2 buscador"
              type="search"
              placeholder="SEARCH"
            />
          </form>
        </div>

        <div className="ms-auto d-flex gap-1">
          <Link className="nav-link text-white hover-white" to="/">
            Login
          </Link>
          <span className="text-white"> / </span>
          <Link className="nav-link text-white hover-white" to="/">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBarNoLogueado;
