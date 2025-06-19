export const API = {
  BASE_URL: "http://192.168.0.109:3000",
  AUTH_HEADER: "authorization",
  TOKEN_KEY: "jwt",
};

export const ROUTES_API = {
  GAMES: "/games",
  SEARCH: "/search",
  USER_CURRENT: "/users/current",
  USERS: "/users",
  FRIENDS: "/friends",
  RECOMMENDED: "/games/recommended",
  LOGIN: "/login",
  USER_CART: "/users/current/cart",
  GAME_DELETE: "/games",
};

export const ROUTES_MOBILE = {
  GAME: "/game/[gameId]",
  LOGIN: "/login",
  HOME: "/home",
} as const;
