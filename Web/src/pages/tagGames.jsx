import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
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

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get(`${API.BASE_URL}/tags/${tagId}?page=${currentPage}`)
      .then((response) => setgames(response.data));
  }, [tagId, currentPage]);

  const elemento = games?.list?.[0]?.tags?.find((item) => item.id === tagId);

  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />
      <ListGames games={games.list} title={"TAG: " + elemento?.name} />

      <Paginacion
        currentPage={currentPage}
        totalPages={games.list.amountOfPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default TagGames;
