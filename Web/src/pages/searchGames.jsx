import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import NavBar from "../components/navBar/navBar";
import { API } from "../constants";

const SearchGames = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    axios
      .get(`${API.BASE_URL}/search?name=${query}&page=${currentPage}`)
      .then((response) => setGames(response.data))
      .catch((error) => console.log(error));
  }, [query, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />
      <ListGames games={games.list} title={"SEARCH: " + query} />
      {/* Aquí puedes usar el componente Paginacion si lo tienes */}
      {/* <Paginacion currentPage={currentPage} totalPages={games.amountOfPages} onChangePage={setCurrentPage} /> */}
    </>
  );
};

export default SearchGames;
