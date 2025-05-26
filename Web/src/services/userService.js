import axios from "axios";
import { API, ROUTES } from "../constants";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const login = async ({ email, password }) => {
  try {
    const response = await api.post(ROUTES.LOGIN, { email, password });

    const token = response.headers[API.AUTH_HEADER];
    if (token) {
      localStorage.setItem(API.TOKEN_KEY, token);
    }
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Login failed";
    throw new Error(errorMessage);
  }
};

const userCurrent = (page) =>
  api
    .get(`${API.BASE_URL}${ROUTES.USER_CURRENT}`, {
      headers: {
        Authorization: localStorage.getItem(API.TOKEN_KEY),
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const getCart = async (token) => {
  try {
    const response = await api.get("/users/current/cart", {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Failed to fetch cart";
    throw new Error(errorMessage);
  }
}

export { login, getCart, userCurrent };