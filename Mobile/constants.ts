export const API = {
  BASE_URL: "http://10.0.2.2:3000",
  AUTH_HEADER: "authorization",
  TOKEN_KEY: "jwt",
};

export const ROUTES_API = {
  GAMES: "/games",
  RECOMMENDED: "/games/recommended",
  LOGIN: "/login",
  GAME_BY_ID: "/games",
  GAME_REVIEWS: (gameId: string): string => `/games/${gameId}/reviews`,
  USER_CURRENT: "/users/current",
};

export const ROUTES_MOBILE = {
  GAME: "/game/[gameId]" as const,
  USER_PROFILE: "/user/[userId]" as const,
};