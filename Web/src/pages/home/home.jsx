import { useEffect, useState } from "react";
import ListGames from "./listGames/listGames";
import Carrusel from "../../components/carrusel/carrusel";
import TagSlides from "../../components/tagSlides/tagSlides";
import { getRecommendedGames, getTags } from "../../services/gameServices";
import { ToastContainer, toast } from "react-toastify";
import { CarrucelSkelton } from "../../components/skelton/GameCardSkelton/CarrucelSkelton";
import { SlideSkelton } from "../../components/skelton/GameCardSkelton/SlideSkelton";

const Home = () => {
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoadingRecommendedGames, setIsLoadingRecommendedGames] =
    useState(false);
  const [isLoadingTags, setIsLoadingTags] = useState(false);

  useEffect(() => {
    setIsLoadingRecommendedGames(true);
    getRecommendedGames()
      .then((recommendedGames) => {
        setRecommendedGames(recommendedGames);
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => setIsLoadingRecommendedGames(false));
  }, []);

  useEffect(() => {
    setIsLoadingTags(true);
    getTags()
      .then((tags) => setTags(tags))
      .catch((error) => toast.error(error))
      .finally(() => setIsLoadingTags(false));
  }, []);

  return (
    <>
      {isLoadingRecommendedGames ? (
        <CarrucelSkelton />
      ) : (
        <Carrusel recommendedGames={recommendedGames} />
      )}
      {isLoadingTags ? <SlideSkelton /> : <TagSlides tags={tags} />}
      <ListGames />
      <ToastContainer />
    </>
  );
};

export default Home;
