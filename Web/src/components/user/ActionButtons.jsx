import { logOutFunction } from "../../utilities/buttonFunction";
import { useNavigate } from "react-router";
import AddOrRemoveFriend from "./AddOrRemoveFriend";

const ActionButtons = ({ logOut, user, idUserLogged }) => {
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

      {!logOut && (
        <AddOrRemoveFriend userId={user.id} idUserLogged={idUserLogged} />
      )}
    </>
  );
};
export default ActionButtons;
