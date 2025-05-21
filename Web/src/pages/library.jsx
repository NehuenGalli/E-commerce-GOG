import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/navBar/navBar";
import { API } from "../constants";
import UserBar from "../components/user/userBar";

const Library = () => {
  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });

  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   axios
  //     .get(`${API.BASE_URL}/users/current`)
  //     .then((response) => setUserLogged(response.data));
  // }, []);

  useEffect(() => {
    const token = !!localStorage.getItem("jwt");

    if (token) {
      axios
        .get(`${API.BASE_URL}/users/current`, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        })
        .then((response) => {
          setUserLogged(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener el usuario:", error);
        });
    }
  }, []);

  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />
      <UserBar user={userLogged}></UserBar>
      <ListGames games={userLogged.games} title={"GAMES "} displayUser={true} />
    </>
  );
};

export default Library;
