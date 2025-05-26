import "./userHeader.css";
import ActionButtons from "./ActionButtons";
import { Link } from "react-router";
import { ROUTES } from "../../constants";

const UserHeader = ({ user, logOut }) => {
  return (
    <>
      <div className="container-xl mt-4">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-circle border border-black">
              <img src={user.image} alt="user image"/>
            </div>
            <span className="fw-semibold ">{user.name}</span>
          </div>
          <div className="ms-auto">
            <ActionButtons logOut={logOut} />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserHeader;
