import { toast, ToastContainer } from "react-toastify";

import { addOrRemoveF } from "../../services/userService";

const AddOrRemoveFriend = ({ userId, idUserLogged }) => {
  const functionAddOrRemoveFriend = (userId, idUserLogged) => {
    addOrRemoveF(userId, idUserLogged)
      .then((message) => toast.success(message))
      .catch((error) => toast.error(error));
  };

  return (
    <>
      <button
        className="btn btn-actionButton"
        onClick={() => functionAddOrRemoveFriend(userId, idUserLogged)}
      >
        Add Friend
      </button>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default AddOrRemoveFriend;
