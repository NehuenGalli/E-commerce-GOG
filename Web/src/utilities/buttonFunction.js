import { API, ROUTES } from "../constants";

const logOutFunction = (logOut, navigate) => {
  logOut;
  localStorage.removeItem(API.TOKEN_KEY);
  navigate(ROUTES.HOME);
};

export { logOutFunction };
