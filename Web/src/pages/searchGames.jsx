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
    axios
      .get(`${API.BASE_URL}/search?query=${query}&page=${currentPage}`)
      .then((response) => setGames(response.data))
      .catch((error) => console.log(error));
  }, [query, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <>
      <ListGames games={games.list} title={"SEARCH: " + query} />

      <Paginacion
        currentPage={currentPage}
        totalPages={games.amountOfPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default SearchGames;
