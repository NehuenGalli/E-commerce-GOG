import ListGames from "../components/listGames/listGames";
import { useEffect, useState } from "react";
import UserHeader from "../components/user/userHeader";
import { userCurrent } from "../services/userService";
import { toast, ToastContainer } from "react-toastify";
import LibraryEmpty from "../components/library/libraryEmpty";
import Spinner from "../components/spinner/Spinner";

const Library = ({ logOut, isLoggedIn }) => {
  const [loading , setLoading] = useState(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const hasGames = userLogged.games && userLogged.games.length === 0;

  if (loading) return <Spinner />;

  return (
    <>
      <UserHeader user={userLogged} logOut={logOut}></UserHeader>
      {hasGames ? (
        <LibraryEmpty />
      ) : (
      <ListGames games={userLogged.games} title={"GAMES "} displayUser={true} />
      )}
      <ToastContainer />
    </>
  );
};

export default Library;
