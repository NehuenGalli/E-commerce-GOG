import axios from "axios";
import { API, ROUTES } from "../constants";

const api = axios.create({
    baseURL: API.BASE_URL,
});

const login = async ({ email, password }) => {
  try {
    const response = await api.post(ROUTES.LOGIN, { email, password });
    
    const token = response.headers["authorization"];
	if (token) {
		localStorage.setItem("jwt", token);
	}
    return response.data;

  } catch (error) {
    const errorMessage = error.response?.data?.error || "Login failed";
    throw new Error(errorMessage);
  }
};

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

export { login, getCart };