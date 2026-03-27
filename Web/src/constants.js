export const API = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:3000",
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
  USER_CART: "/users/current/cart",
  USERS: "/users",
  USER_BY_ID: "/user/:userId",
  REGISTER: "/register",
  CART: "/cart",
  FRIENDS: "/friends",
  USER: "/user",
  USER_REVIEWS: "/userReviews",

  GAME_REVIEWS: (gameId) => `/games/${gameId}/reviews`,
};
