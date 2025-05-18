import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/navBar/navBar";
import { API } from "../constants";

const Library = () => {
  const [games, user] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get(`${API.BASE_URL}/users/current`)
      .then((response) => user(response.data));
  }, []);

  const asd = axios
    .get(`${API.BASE_URL}/users/current`)
    .then((response) => user(response.data));

  console.log(asd);
  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />

      <ListGames games={games.list} title={"GAMES "} />

      <Paginacion
        currentPage={currentPage}
        totalPages={games.list.amountOfPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Library;
