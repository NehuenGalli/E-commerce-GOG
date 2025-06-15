export const API = {
  BASE_URL: "http://192.168.0.8:3000",
  AUTH_HEADER: "authorization",
  TOKEN_KEY: "jwt",
};

export const ROUTES_API = {
  GAMES: "/games",
  RECOMMENDED: "/games/recommended",
  LOGIN: "/login",
};

export const ROUTES_MOBILE = {
  GAME: "/game/[gameId]",
} as const;
