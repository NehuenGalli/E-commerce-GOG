import axios from "axios";

import { API, ROUTES } from "../constants";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const getRecommendedGames = () =>
  api
    .get(ROUTES.RECOMMENDED)
    .then((res) => res.data)
    .catch((err) => err);

const getTags = () =>
  api
    .get(ROUTES.TAGS)
    .then((res) => res.data)
    .catch((error) => error);

const getGames = (page) =>
  api
    .get(`${ROUTES.GAMES}?page=${page}`)
    .then((res) => res.data)
    .catch((error) => error);

export { getRecommendedGames, getTags, getGames };
