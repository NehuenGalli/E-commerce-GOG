import axios from "axios";

import { API_URL } from "../constants";

const api = axios.create({
  baseURL: API_URL,
});

const getRecommendedGames = () =>
  api
    .get("/games/recommended")
    .then((res) => res.data)
    .catch((err) => err.response.data);

const getTags = () =>
  api
    .get(`/tags`)
    .then((res) => res.data)
    .catch((error) => error.response.data);

const getGames = (page) =>
  api
    .get(`/games?page=${page}`)
    .then((res) => res.data)
    .catch((error) => error.response.data);

export { getRecommendedGames, getTags, getGames };
