import { toast, ToastContainer } from "react-toastify";

import { addOrRemoveF, friendsUserLogged } from "../../services/userService";

import { isFriend } from "../../utilities/isFriend";

import { useState, useEffect } from "react";

const AddOrRemoveFriend = ({ userId, idUserLogged }) => {
  const [isFriendBool, setIsFriendBool] = useState(false);

  const functionAddOrRemoveFriend = (userId, idUserLogged) => {
    addOrRemoveF(userId, idUserLogged)
      .then((message) => {
        toast.success(message);
        // se actualiza el estado para reflejar el cambio
        return isFriend(userId, idUserLogged);
      })
      .then(setIsFriendBool)
      .catch((error) => toast.error(error));
  };

  useEffect(() => {
    isFriend(userId, idUserLogged).then(setIsFriendBool);
  }, [userId, idUserLogged]);
  return (
    <>
      <button
        className="btn btn-actionButton"
        onClick={() => functionAddOrRemoveFriend(userId, idUserLogged)}
      >
        {isFriendBool ? <>Remove Friend</> : <>Add Friend</>}
      </button>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default AddOrRemoveFriend;
