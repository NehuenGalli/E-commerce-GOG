import { API, ROUTES } from "../constants";
import axios from "axios";
import { errorMessage } from "../utilities/error_message";
const api = axios.create({
  baseURL: API.BASE_URL,
});
const getTags = () =>
  api
    .get(ROUTES.TAGS)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const getGamesByTag = (tagId, currentPage) =>
  api
    .get(`${API.BASE_URL}${ROUTES.TAGS}/${tagId}?page=${currentPage}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

export { getTags, getGamesByTag };
