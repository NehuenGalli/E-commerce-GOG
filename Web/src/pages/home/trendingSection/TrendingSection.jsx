import { useState, useEffect } from "react";
import { getGames } from "../../../services/gameServices";
import Paginacion from "../../../components/pagination/paginacion";
import ListAllGames from "../../../components/listAllGames/ListAllGames";
import { toast } from "react-toastify";
import { GameCardSkelton } from "../../../components/skelton/GameCardSkelton/GameCardSkelton";

const TrendingSection = () => {
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
          <h3 className="my-4">NEW & TRENDING</h3>
          <ListAllGames games={games} />
          <Paginacion
            currentPage={currentPage}
            totalPages={games.amountOfPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default TrendingSection;
