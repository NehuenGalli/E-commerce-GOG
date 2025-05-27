import axios from "axios";
import { errorMessage } from "../utilities/error_message";
import { API, ROUTES } from "../constants";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const getRecommendedGames = () =>
  api
    .get(ROUTES.RECOMMENDED)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const getTags = () =>
  api
    .get(ROUTES.TAGS)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const getGames = (page) =>
  api
    .get(`${ROUTES.GAMES}?page=${page}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });


const getGameById = (gameId) =>
  api
    .get(`${ROUTES.GAME_BY_ID}/${gameId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const addReview = async (gameId, reviewData, token) => {
  try {
    const response = await api.put(`/games/${gameId}/reviews`, reviewData, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw errorMessage(error);
  }
};

const addGameToCart = async (gameId, token) => {
  try {
    const response = await api.put(`/games/${gameId}`, { gameId }, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message || "Failed to add game to cart";
    throw new Error(errorMessage);
  }
};

const removeGame = (gameId, token) =>
  api
    .delete(`${ROUTES.GAME_DELETE}/${gameId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

export { getRecommendedGames, getTags, getGames, removeGame, addGameToCart, getGameById, addReview }; 