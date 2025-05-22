import "./userHeader.css";
import ActionButtons from "./ActionButtons";

const UserHeader = ({ user, logOut }) => {
  return (
    <>
      <div className="container-xl mt-4">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-circle border border-black">
              <img src={user.image} />
            </div>
            <span className="fw-semibold ">{user.name}</span>
          </div>
          <div className="ms-auto">
            <ActionButtons haveLoggout={true} logOut={logOut} />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserHeader;
