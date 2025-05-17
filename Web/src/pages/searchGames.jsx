import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/navBar/navBar";
import { API } from "../constants";

const SearchGames = () => {
  const searchData = useParams();

  console.log(searchData.search);

  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${API.BASE_URL}/search?query=${searchData.search}&page=${currentPage}`
      )
      .then((response) => setGames(response.data))
      .catch((error) => console.error(error));
  }, [searchData, currentPage]);

  console.log(games);
  // useEffect(() => {
  //   axios
  //     .get(`${API.BASE_URL}/search/${searchData.search}&page=${currentPage}`)
  //     .then((response) => setGames(response.data))
  //     .catch((error) => console.error(error));
  // }, [searchData, currentPage]);

  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />
      <ListGames games={games.list} title={"SEARCH: " + searchData.search} />
    </>
  );
};

export default SearchGames;
