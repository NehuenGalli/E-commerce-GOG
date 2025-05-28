export const API = {
  BASE_URL: "http://localhost:3000",
  AUTH_HEADER: "authorization",
  TOKEN_KEY: "jwt",
};

export const ROUTES = {
  HOME: "/",
  TAGS: "/tags",
  GAMES: "/games",
  GAMES_BY_TAG: "/tags/:tagId",
  GAME_BY_ID: "/games",
  GAME_DETAIL: "/games/:gameId",
  GAME_DELETE: "/games",
  RECOMMENDED: "/games/recommended",
  PURCHASE: "/purchase",
  LOGIN: "/login",
  SEARCH: "/search",
  LIBRARY: "/library",
  USER_CURRENT: "/users/current",
  USERS: "/users",
  USER_BY_ID: "/user/:userId",
  REGISTER: "/register",
  CART: "/cart",
  USER: "/user",
  USER_REVIEWS: "/userReviews",
};
