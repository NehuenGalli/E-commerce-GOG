import axios from "axios";
import { API, ROUTES } from "../constants";
import { addFriend, removeFriend } from "../utilities/success_message";
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

const addOrRemoveF = (idFriend, idUserLogged) =>
  api
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
      //friendsUserLogged le manda una promesa, hay que hacer que devuelva la lista
      const listFriend = [];
      friendsUserLogged(idUserLogged).then((res) => (listFriend = res));
      console.log(listFriend);
      if (listFriend.some((friend) => friend.id === idUserLogged)) {
        addFriend;
      } else {
        removeFriend;
      }
    })
    .catch((error) => {
      throw errorMessage(error);
    });

export { login, userCurrent, friendsUserLogged, addOrRemoveF };
