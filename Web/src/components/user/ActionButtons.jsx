import { logOutFunction } from "../../utilities/buttonFunction";
import { useNavigate } from "react-router";

const ActionButtons = ({ logOut }) => {
  const navigate = useNavigate();

  return (
    <>
      {logOut && (
        <button
          className="btn btn-actionButton"
          onClick={() => {
            logOutFunction(logOut, navigate);
          }}
        >
          Logout
        </button>
      )}

      {!logOut && <button className="btn btn-actionButton">Add Friend</button>}
    </>
  );
};
export default ActionButtons;
