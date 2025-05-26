import { logOutFunction } from "../../utilities/buttonFunction";
import { useNavigate } from "react-router";

const ActionButtons = ({ haveLoggout, logOut }) => {
  const navigate = useNavigate();

  return (
    <>
      {haveLoggout && (
        <button
          className="btn btn-loggout"
          onClick={() => {
            logOutFunction(logOut, navigate);
          }}
        >
          Logout
        </button>
      )}

      {!haveLoggout && <button className="btn">Add Friend</button>}
    </>
  );
};
export default ActionButtons;
