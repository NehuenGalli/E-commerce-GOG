import axios from "axios";
import { API, ROUTES } from "../constants";
import {
  success_addFriend_message,
  sucess_removeFriend_message,
} from "../utilities/success_message";
import { errorMessage } from "../utilities/error_message";

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

const register = async (formData) => {
  try {
    const response = await api.post(ROUTES.REGISTER, formData);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Registration failed";
    throw new Error(errorMessage);
  }
};

const userCurrent = () =>
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

const friendsUserLogged = (idUserLogged) =>
  api
    .get(`${API.BASE_URL}${ROUTES.USERS}/${idUserLogged}/friends`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const addOrRemoveF = (idFriend, isFriendBool) => {
  return api
    .put(
      `${API.BASE_URL}${ROUTES.USERS}/${idFriend}/friends`,
      {},
      {
        headers: {
          Authorization: localStorage.getItem(API.TOKEN_KEY),
        },
      }
    )
    .then((res) => {
      if (isFriendBool) {
        console.log("Removido");
        return sucess_removeFriend_message;
      } else {
        console.log("Agregado");
        return success_addFriend_message;
      }
    })
    .catch((error) => {
      throw errorMessage(error);
    });
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
    const errorMessage =
      error.response?.data?.error || error.message || "Failed to fetch cart";
    throw new Error(errorMessage);
  }
};

export {
  login,
  getCart,
  userCurrent,
  register,
  friendsUserLogged,
  addOrRemoveF,
};
