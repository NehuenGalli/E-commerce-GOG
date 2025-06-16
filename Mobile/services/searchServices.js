import axios from "axios";
import { errorMessage } from "../utilities/error_message";
import { API, ROUTES_API } from "../constants";
const api = axios.create({
  baseURL: API.BASE_URL,
});

const searchGames = (query, currentPage) =>
  api
    .get(`${API.BASE_URL}${ROUTES_API.SEARCH}?query=${query}&page=${currentPage}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

export { searchGames };

