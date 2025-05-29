import "./userHeader.css";
import ActionButtons from "./ActionButtons";

const UserHeader = ({ user, logOut, idUserLogged }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center gap-3">
            <img
              className="rounded-circle border border-black "
              src={user.image}
              alt="user image"
            />
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
