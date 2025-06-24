import axios from "axios";
import { API, ROUTES_API } from "../constants";
import { errorMessage } from "../utilities/error_message";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const getGames = (page) =>
  api
    .get(`${ROUTES_API.GAMES}?page=${page}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const getRecommendedGames = () =>
  api
    .get(ROUTES_API.RECOMMENDED)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });
const getGameById = (gameId) =>
  api
    .get(`${ROUTES_API.GAME_BY_ID}/${gameId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });
const addReview = async (gameId, reviewData, token) => {
  try {
    const response = await api.put(ROUTES_API.GAME_REVIEWS(gameId), reviewData, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw errorMessage(error);
  }
};    

export { getGames, getRecommendedGames, getGameById, addReview };
