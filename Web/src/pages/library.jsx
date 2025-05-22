import ListGames from "../components/listGames/listGames";
import { useEffect, useState } from "react";
import NavBar from "../components/navBar/navBar";
import UserHeader from "../components/user/userHeader";
import { userCurrent } from "../services/userService";
import { toast, ToastContainer } from "react-toastify";

const Library = ({ logOut, isLoggedIn }) => {
  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });
  const navBar = <NavBar isLoggedIn={isLoggedIn} />;
  useEffect(() => {
    {
      navBar;
    }
  }, [isLoggedIn]);

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
      {navBar}
      <UserHeader user={userLogged} logOut={logOut}></UserHeader>
      <ListGames games={userLogged.games} title={"GAMES "} displayUser={true} />

      <ToastContainer />
    </>
  );
};

export default Library;
