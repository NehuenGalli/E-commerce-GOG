import axios from "axios";
import { errorMessage } from "../utilities/error_message";
import { API, ROUTES_API } from "../constants";
import {success_addFriend_message, sucess_removeFriend_message} from "../utilities/success_menssage"; 

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

const userCurrent = (token) =>
  api
    .get(`${ROUTES_API.USER_CURRENT}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

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


 const getUserById = (userId) =>
  api
    .get(`${API.BASE_URL}${ROUTES_API.USERS}/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const getReviewsById = (userId) =>
  api
    .get(`${API.BASE_URL}${ROUTES_API.USER_REVIEWS}/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });


    const addOrRemoveF = (idFriend, isFriendBool, token) => {
  return api
    .put(
      `${API.BASE_URL}${ROUTES_API.USERS}/${idFriend}${ROUTES_API.FRIENDS}`,
      {},
      {
        headers: {
          Authorization: token,
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


const friendsUserLogged = (idUserLogged) =>
  api
    .get(`${API.BASE_URL}${ROUTES_API.USERS}/${idUserLogged}${ROUTES_API.FRIENDS}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });


export { login, getCart, removeGame, userCurrent, getUserById, getReviewsById, addOrRemoveF, friendsUserLogged };
