import NavBar from "../components/navBar/navBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import Paginacion from "../components/pagination/paginacion";
import NewsSection from "../components/newsSection/newsSection";
import Carrucel from "../components/carrucel/carrucel";
import TagSlides from "../components/tagSlides/tagSlides";
const Home = () => {
  const [games, setgames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 0,
  });

  const [gamesRecommended, setGamesRecommended] = useState([]);

  const [tags, setTags] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRecommendedGames = async () => {
      try {
        const response = await axios.get(`${API_URL}/games/recommended`);
        setGamesRecommended(response.data);
      } catch (error) {
        console.error("Error fetching recommended games:", error);
      }
    };

    fetchRecommendedGames();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${API_URL}/tags`);
        setTags(response.data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/games?page=${currentPage}`
        );
        setgames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, [currentPage]);

  const primerPagina = () => setCurrentPage(1);
  const anteriorPagina = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const siguientePagina = () =>
    setCurrentPage((prev) => Math.min(prev + 1, games.amountOfPages));
  const ultimaPagina = () => setCurrentPage(games.amountOfPages);
  return (
    <div>
      <NavBar />
      <Carrucel gamesRecommended={gamesRecommended} />
      <TagSlides tags={tags} />
      <NewsSection games={games} />
      <Paginacion
        totalPages={games.amountOfPages}
        currentPage={currentPage}
        primerPagina={primerPagina}
        anteriorPagina={anteriorPagina}
        siguientePagina={siguientePagina}
        ultimaPagina={ultimaPagina}
      />
    </div>
  );
};

export default Home;
