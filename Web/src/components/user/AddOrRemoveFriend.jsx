import { toast, ToastContainer } from "react-toastify";

import { addOrRemoveF, friendsUserLogged } from "../../services/userService";

import { isFriend } from "../../utilities/isFriend";

import { useState, useEffect } from "react";

const AddOrRemoveFriend = ({ userId, idUserLogged }) => {
  const [isFriendBool, setIsFriendBool] = useState(null);

  const functionAddOrRemoveFriend = () => {
    addOrRemoveF(userId, isFriendBool)
      .then((message) => {
        toast.success(message);

        setIsFriendBool((prev) => !prev);
      })

      .catch((error) => toast.error(error));
  };

  useEffect(() => {
    if (userId && idUserLogged) {
      isFriend(userId, idUserLogged).then(setIsFriendBool);
    }
  }, [userId, idUserLogged]);
  return (
    <>
      <button
        className="btn btn-actionButton"
        onClick={() => functionAddOrRemoveFriend()}
      >
        {isFriendBool ? <>Remove Friend</> : <>Add Friend</>}
      </button>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default AddOrRemoveFriend;
