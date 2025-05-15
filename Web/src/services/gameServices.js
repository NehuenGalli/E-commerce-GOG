import axios from "axios";
import { errorMessage } from "../utilities/error_messsage";

import { API, ROUTES } from "../constants";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const getRecommendedGames = () =>
  api
    .get(ROUTES.RECOMMENDED)
    .then((res) => res.data)
    .catch((error) => errorMessage(error));

const getTags = () =>
  api
    .get(ROUTES.TAGS)
    .then((res) => res.data)
    .catch((error) => errorMessage(error));

const getGames = (page) =>
  api
    .get(`${ROUTES.GAMES}?page=${page}`)
    .then((res) => res.data)
    .catch((error) => errorMessage(error));

export { getRecommendedGames, getTags, getGames };
