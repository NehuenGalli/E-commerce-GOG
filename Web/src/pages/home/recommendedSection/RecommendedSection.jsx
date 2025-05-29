import { useState, useEffect } from "react";
import { getRecommendedGames } from "../../../services/gameServices";
import Carrusel from "../../../components/carrusel/carrusel";
import { toast } from "react-toastify";
import { CarrucelSkelton } from "../../../components/skelton/GameCardSkelton/CarrucelSkelton";
const RecommendedSection = () => {
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [isLoadingRecommendedGames, setIsLoadingRecommendedGames] =
    useState(true);

  useEffect(() => {
    setIsLoadingRecommendedGames(true);
    getRecommendedGames()
      .then((recommendedGames) => setRecommendedGames(recommendedGames))
      .catch((error) => toast.error(error))
      .finally(() => setIsLoadingRecommendedGames(false));
  }, []);

  return (
    <>
      {isLoadingRecommendedGames ? (
        <CarrucelSkelton />
      ) : (
        <>
          <h3 className="my-4">FEATURED & RECOMMENDED</h3>
          <Carrusel recommendedGames={recommendedGames} />
        </>
      )}
    </>
  );
};

export default RecommendedSection;
