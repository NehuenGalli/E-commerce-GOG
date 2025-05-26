import "./userHeader.css";
import ActionButtons from "./ActionButtons";
import { Link } from "react-router";
import { ROUTES } from "../../constants";

const UserHeader = ({ user, logOut, idUserLogged }) => {
  return (
    <>
      <div className="container-xl mt-4">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-circle border border-black">
              <Link to={ROUTES.USER}>
                <img src={user.image} />
              </Link>
            </div>
            <span className="fw-semibold ">{user.name}</span>
          </div>
          <div className="ms-auto">
            <ActionButtons
              logOut={logOut}
              user={user}
              idUserLogged={idUserLogged}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserHeader;
