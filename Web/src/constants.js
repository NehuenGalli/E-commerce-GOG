export const API = {
  BASE_URL: "http://localhost:3000",
  AUTH_HEADER: "authorization",
  TOKEN_KEY: "jwt",
};

export const ROUTES = {
  HOME: "/",
  TAGS: "/tags",
  GAMES: "/games/:gameId",
  GAMES_BY_TAG: "/games/:tagId",
  GAME_DETAIL: "/game/:gameId",
  RECOMMENDED: "/games/recommended",
  LOGIN: "/login",
  SEARCH: "/search",
  LIBRARY: "/library",
  USER_CURRENT: "/users/current",
  REGISTER:"/register",
};
