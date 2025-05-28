import { friendsUserLogged } from "../services/userService";

const isFriend = (userId, idUserLogged) => {
  return friendsUserLogged(idUserLogged).then((friendsList) =>
    friendsList.some((friend) => friend.id === userId)
  );
};
export { isFriend };
