import ListGames from "../components/listGames/listGames";
import Paginacion from "../components/pagination/paginacion";
import Spinner from "../components/spinner/Spinner";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { searchGames } from "../services/searchService";
import { notFoundGames_message } from "../utilities/error_message";
const SearchGames = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [isLoadingGames, setIsLoadingGames] = useState(true);

  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    searchGames(query, currentPage)
      .then((games) => setGames(games))
      .catch((error) => toast.error(error))
      .finally(() => setIsLoadingGames(false));
  }, [query, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  if (isLoadingGames) {
    return <Spinner />;
  }

  return (
    <>
      <ListGames games={games.list} title={"SEARCH: " + query} />

      {games.amountOfPages != 0 && (
        <Paginacion
          currentPage={currentPage}
          totalPages={games.amountOfPages}
          onPageChange={setCurrentPage}
        />
      )}

      {games.amountOfPages === 0 && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <h1>{notFoundGames_message}</h1>
        </div>
      )}

    </>
  );
};

export default SearchGames;
