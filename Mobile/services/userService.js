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
const userCurrent = () =>
  api
    .get(`${API.BASE_URL}${ROUTES_API.USER_CURRENT}`, {
      headers: {
        Authorization: getToken(),
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw errorMessage(error);
    });
  

export { login,userCurrent };