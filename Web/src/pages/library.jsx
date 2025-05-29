import ListGames from "../components/listGames/listGames";
import { useEffect, useState } from "react";
import UserHeader from "../components/user/userHeader";
import Spinner from "../components/spinner/Spinner";
import { userCurrent } from "../services/userService";
import { toast, ToastContainer } from "react-toastify";
import LibraryEmpty from "../components/library/libraryEmpty";
import { ROUTES } from "../constants";
import { useNavigate } from "react-router";

const Library = ({ logOut, isLoggedIn }) => {
  const navigate = useNavigate();

  const [isLoadingGames, setIsLoadingGames] = useState(true);
  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfo = await userCurrent();
        setUserLogged(userInfo);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoadingGames(false);
      }
    };

    fetchUserData();
  }, []);


  const hasGames = userLogged.games && userLogged.games.length === 0;

  if (isLoadingGames) return <Spinner />;

  return (
    <>
      <UserHeader user={userLogged} logOut={logOut}></UserHeader>
      {hasGames ? (
        <LibraryEmpty />
      ) : (
        <ListGames
          games={userLogged.games}
          title={"GAMES "}
          displayUser={true}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default Library;
