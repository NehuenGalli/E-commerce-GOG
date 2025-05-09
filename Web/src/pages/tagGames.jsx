import ListTagGames from "../components/listTagGames/listTagGames";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/navBar/navBar";
import { API } from "../constants";

const TagGames = () => {
  const { tagId } = useParams();
  const [games, setgames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 0,
  });
  //   const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get(`${API.BASE_URL}/tags/${tagId}?page=${1}`)
      .then((response) => setgames(response.data));
  }, [tagId]);
  //   const primerPagina = () => setCurrentPage(1);
  //   const anteriorPagina = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  //   const siguientePagina = () =>
  //     setCurrentPage((prev) => Math.min(prev + 1, games.amountOfPages));
  //   const ultimaPagina = () => setCurrentPage(games.amountOfPages);
  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />
      <ListTagGames games={games.list} />
    </>
  );
};

export default TagGames;
