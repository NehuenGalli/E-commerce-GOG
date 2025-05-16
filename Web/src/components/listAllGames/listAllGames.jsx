import { useState, useEffect } from "react";
import { getGames } from "../../services/gameServices";
import Paginacion from "../pagination/paginacion";
import NewsSection from "../newsSection/newsSection";
import { ToastContainer, toast } from "react-toastify";
import { GameCardSkelton } from "../skelton/GameCardSkelton/GameCardSkelton";

const ListAllGames = () => {
  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 1,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getGames(currentPage)
      .then((games) => setGames(games))
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  return (
    <>
      {isLoading && <GameCardSkelton count={9} />}
      {!isLoading && (
        <>
          <NewsSection games={games} />
          <Paginacion
            currentPage={currentPage}
            totalPages={games.amountOfPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default ListAllGames;
