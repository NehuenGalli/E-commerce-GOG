import "./userBar.css";
import ExtraUserBar from "./extraUserBar";

const UserBar = ({ user }) => {
  return (
    <>
      <div
        className="border-bottom py-3 container-xl mt-4"
        style={{
          backgroundImage: `url(${user.backgroundImage})`,
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Izquierda: Avatar + Nombre */}
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-circle overflow-hidden">
              <img src={user.image} className="object-fit-cover img-fluid" />
            </div>
            <span className="fw-semibold">{user.name}</span>
          </div>

          <ExtraUserBar haveLoggout={true}> </ExtraUserBar>
        </div>
      </div>
    </>
  );
};
export default UserBar;
