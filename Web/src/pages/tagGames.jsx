import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import Spinner from "../components/spinner/Spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { getGamesByTag } from "../services/tagServices";
import { findTagInGames } from "../utilities/filters";

const TagGames = () => {
  const { tagId } = useParams();
  const [isLoadingGames, setIsLoadingGames] = useState(true);

  const [games, setgames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getGamesByTag(tagId, currentPage)
      .then((games) => setgames(games))
      .catch((error) => toast.error(error))
      .finally(() => setIsLoadingGames(false));
  }, [tagId, currentPage]);

  if (isLoadingGames) {
    return <Spinner />;
  }

  return (
    <>
      <ListGames
        games={games.list}
        title={"TAG: " + findTagInGames(tagId, games.list)?.name}
      />

      <Paginacion
        currentPage={currentPage}
        totalPages={games.amountOfPages}
        onPageChange={setCurrentPage}
      />
      <ToastContainer />
    </>
  );
};

export default TagGames;
