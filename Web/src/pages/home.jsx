import NavBar from "../components/navBar/navBar";
import { useEffect, useState } from "react";
import Paginacion from "../components/pagination/paginacion";
import NewsSection from "../components/newsSection/newsSection";
import Carrusel from "../components/carrusel/carrusel";
import TagSlides from "../components/tagSlides/tagSlides";
import { API } from "../constants";
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

  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getRecommendedGames()
      .then((recommendedGames) => {
        setRecommendedGames(recommendedGames);
      })
      .catch((error) => {
        if (error.response) {
          console.log("status code:", error.response.status);
          setErrorMessage(error.response.data.error);
        } else if (error.request) {
          setErrorMessage("No se recibió respuesta del servidor.");
        } else {
          setErrorMessage("Error inesperado al enviar la solicitud.");
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getTags()
      .then((tags) => setTags(tags))
      .catch((error) => console.log("Error fetching tags:", error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    getGames(currentPage)
      .then((games) => setGames(games))
      .catch((error) => console.log("Error fetching games:", error));
  }, [currentPage]);

  return (
    <>
      <NavBar isLoggedIn={!!localStorage.getItem(API.TOKEN_KEY)} />
      {isLoading && <h1> cargando </h1>}
      {!isLoading && (
        <>
          {errorMessage.length !== 0 && <h1>{errorMessage}</h1>}
          <Carrusel recommendedGames={recommendedGames} />
          <TagSlides tags={tags} />
          <NewsSection games={games} />
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

export default Home;
