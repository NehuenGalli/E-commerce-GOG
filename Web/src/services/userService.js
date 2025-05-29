import axios from "axios";
import { API, ROUTES } from "../constants";
import {
  success_addFriend_message,
  sucess_removeFriend_message,
} from "../utilities/success_message";
import { errorMessage } from "../utilities/error_message";
import { getToken, setToken } from "../utilities/localstorageUtils";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const login = async ({ email, password }) => {
  try {
    const response = await api.post(ROUTES.LOGIN, { email, password });

    const token = response.headers[API.AUTH_HEADER];
    if (token) {
      setToken(token);
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
        Authorization: getToken(),
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const getUserById = (userId) =>
  api
    .get(`${API.BASE_URL}${ROUTES.USERS}/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const friendsUserLogged = (idUserLogged) =>
  api
    .get(`${API.BASE_URL}${ROUTES.USERS}/${idUserLogged}${ROUTES.FRIENDS}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const addOrRemoveF = (idFriend, isFriendBool) => {
  return api
    .put(
      `${API.BASE_URL}${ROUTES.USERS}/${idFriend}${ROUTES.FRIENDS}`,
      {},
      {
        headers: {
          Authorization: getToken(),
        },
      }
    )
    .then((res) => {
      if (isFriendBool) {
        return sucess_removeFriend_message;
      } else {
        return success_addFriend_message;
      }
    })
    .catch((error) => {
      throw errorMessage(error);
    });
};

const getCart = async (token) => {
  try {
    const response = await api.get(ROUTES.USER_CART, {
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

const getReviewsById = (userId) =>
  api
    .get(`${API.BASE_URL}${ROUTES.USER_REVIEWS}/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

export {
  login,
  getCart,
  userCurrent,
  getUserById,
  register,
  friendsUserLogged,
  addOrRemoveF,
  getReviewsById,
};
