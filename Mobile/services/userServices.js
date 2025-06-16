import axios from "axios";
import { errorMessage } from "../utilities/error_message";
import { API, ROUTES_API } from "../constants";


const api = axios.create({
  baseURL: API.BASE_URL,
});

//const { logIn, isLoggedIn, getToken } = useContext(userContext);


const userCurrent = (token) => 
  api
    .get(`${API.BASE_URL}${ROUTES_API.USER_CURRENT}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });
  

const friendsUserLogged = (idUserLogged) =>
  api
    .get(`${API.BASE_URL}${ROUTES_API.USERS}/${idUserLogged}${ROUTES_API.FRIENDS}`)
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });

const addOrRemoveF = (idFriend, isFriendBool) => {
  return api
    .put(
      `${API.BASE_URL}${ROUTES_API.USERS}/${idFriend}${ROUTES_API.FRIENDS}`,
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


    
export { userCurrent,friendsUserLogged,addOrRemoveF };