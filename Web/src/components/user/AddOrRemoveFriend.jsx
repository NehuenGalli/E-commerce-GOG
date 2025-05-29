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
      {!isFriendBool && (
        <button
          className="btn btn-actionButton py-2 px-5 rounded-1"
          onClick={() => functionAddOrRemoveFriend()}
        >
          Add Friend
        </button>
      )}

      {isFriendBool && (
        <button
          className="btn btn-danger py-2 px-5 rounded-1"
          onClick={() => functionAddOrRemoveFriend()}
        >
          Remove Friend
        </button>
      )}
    </>
  );
};

export default AddOrRemoveFriend;
