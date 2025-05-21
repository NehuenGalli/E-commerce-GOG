import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/navBar/navBar";
import { API } from "../constants";

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

  useEffect(() => {
    axios
      .get(`${API.BASE_URL}/users/current`)
      .then((response) => setUserLogged(response.data));
  }, []);

  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />

      <ListGames games={userLogged.games} title={"GAMES "} />
    </>
  );
};

export default Library;
