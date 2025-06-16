import axios from "axios";
import { API, ROUTES_API } from "../constants";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const login = async ({ email, password }) => {
  try {
    const response = await api.post(ROUTES_API.LOGIN, { email, password });

    const token = response.headers[API.AUTH_HEADER];
    if (token) {
      return { token, data: response.data };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Login failed";
    throw new Error(errorMessage);
  }
};

const getCart = async (token) => {
  try {
    const response = await api.get(ROUTES_API.USER_CART, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.error || error.message || "Failed to fetch cart";
    throw new Error(errorMessage);
  }
};

const removeGame = (gameId, token) =>
  api
    .delete(`${ROUTES_API.GAME_DELETE}/${gameId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

export { login, getCart, removeGame };