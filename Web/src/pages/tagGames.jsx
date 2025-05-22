import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
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

  const searchedTag = games?.list?.[0]?.tags?.find((item) => item.id === tagId);

  return (
    <>
      <ListGames games={games.list} title={"TAG: " + searchedTag?.name} />

      <Paginacion
        currentPage={currentPage}
        totalPages={games.amountOfPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default TagGames;
