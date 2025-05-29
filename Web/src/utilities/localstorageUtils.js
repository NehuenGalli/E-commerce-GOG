import { API } from "../constants";

const getToken = () => localStorage.getItem(API.TOKEN_KEY);
const setToken = (token) => localStorage.setItem(API.TOKEN_KEY, token);
const removeToken = () => localStorage.removeItem(API.TOKEN_KEY);

export { getToken, setToken, removeToken };
