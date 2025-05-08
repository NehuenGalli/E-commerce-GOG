import NavBar from "../components/navBar/navBar";
import { useEffect, useState } from "react";
import Paginacion from "../components/pagination/paginacion";
import NewsSection from "../components/newsSection/newsSection";
import Carrucel from "../components/carrusel/carrusel";
import TagSlides from "../components/tagSlides/tagSlides";
import {
  getRecommendedGames,
  getTags,
  getGames,
} from "../services/gameServices";

const Home = () => {
  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 1,
    amountOfPages: 1,
  });

  const [recommendedGames, setRecommendedGames] = useState([]);

  const [tags, setTags] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getRecommendedGames()
      .then((recommendedGames) => {
        setRecommendedGames(recommendedGames);
      })
      .catch((error) => {
        console.error("Error fetching recommended games:", error.message);
      });
  }, []);

  useEffect(() => {
    getTags()
      .then((tags) => setTags(tags))
      .catch((error) => console.error("Error fetching tags:", error.message));
  }, []);

  useEffect(() => {
    getGames(currentPage)
      .then((games) => setGames(games))
      .catch((error) => console.error("Error fetching games:", error.message));
  }, [currentPage]);

  const firstPage = () => setCurrentPage(1);
  const previousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, games.amountOfPages));
  const lastPage = () => setCurrentPage(games.amountOfPages);

  return (
    <>
      <NavBar />
      <Carrucel recommendedGames={recommendedGames} />
      <TagSlides tags={tags} />
      <NewsSection games={games} />
      <Paginacion
        totalPages={games.amountOfPages}
        currentPage={currentPage}
        firstPage={firstPage}
        previousPage={previousPage}
        nextPage={nextPage}
        lastPage={lastPage}
      />
    </>
  );
};

export default Home;
