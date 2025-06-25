export const API = {
  BASE_URL: "http://192.168.0.8:3000",
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
  ADD_TO_CART: "/games",
  PURCHASE: "/purchase",
  USER_REVIEWS: "/userReviews",
  GAME_BY_ID: "/games",
  GAME_REVIEWS: (gameId: string): string => `/games/${gameId}/reviews`,
};

export const ROUTES_MOBILE = {
  GAME: "/game/[gameId]",
  LOGIN: "/login",
  HOME: "/home",
  PURCHASE: "/purchase",
  USER: "/user/[userId]",
  USER_PROFILE: "/user/[userId]" as const,
} as const;
