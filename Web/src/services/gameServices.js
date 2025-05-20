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

// const search = (query, page) => {
//   return api
//     .get(`/search?query=${encodeURIComponent(query)}&page=${page}`)
//     .then((res) => res.data)
//     .catch((error) => {
//       console.error("API error:", error);
//       throw error;
//     });
// };

export { getRecommendedGames, getTags, getGames };
