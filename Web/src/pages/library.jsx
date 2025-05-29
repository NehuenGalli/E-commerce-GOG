import ListGames from "../components/listGames/listGames";
import { useEffect, useState } from "react";
import UserHeader from "../components/user/userHeader";
import { userCurrent } from "../services/userService";
import { toast, ToastContainer } from "react-toastify";
import LibraryEmpty from "../components/library/libraryEmpty";

const Library = ({ logOut, isLoggedIn }) => {
  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });

  useEffect(() => {
    userCurrent()
      .then((userInfo) => {
        setUserLogged(userInfo);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  return (
    <>
      <UserHeader user={userLogged} logOut={logOut}></UserHeader>
      {userLogged.games.length === 0 ? (
        <LibraryEmpty />
      ) : (
      <ListGames games={userLogged.games} title={"GAMES "} displayUser={true} />
      )}
      <ToastContainer />
    </>
  );
};

export default Library;
