export const API = {
  BASE_URL: "http://10.0.2.2:3000",
  AUTH_HEADER: "authorization",
  TOKEN_KEY: "jwt",
};

export const ROUTES_API = {
  GAMES: "/games",
  SEARCH: "/search",
  USER_CURRENT: "/users/current",
  USERS: "/users",
  FRIENDS: "/friends",
};

export const ROUTES_MOBILE = {
  GAME: "/game/[gameId]",
} as const;
