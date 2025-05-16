import NavBar from "../components/navBar/navBar";
import { useEffect, useState } from "react";
import ListAllGames from "../components/listAllGames/listAllGames";
import Carrusel from "../components/carrusel/carrusel";
import TagSlides from "../components/tagSlides/tagSlides";
import { getRecommendedGames, getTags } from "../services/gameServices";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../components/spinner/Spinner";
const Home = ({ isLoggedIn }) => {
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
      <NavBar isLoggedIn={isLoggedIn} />

      {isLoadingRecommendedGames || isLoadingTags ? (
        <Spinner />
      ) : (
        <>
          <Carrusel recommendedGames={recommendedGames} />
          <TagSlides tags={tags} />
          <ListAllGames />
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default Home;
