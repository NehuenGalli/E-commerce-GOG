import express from "express";
import cors from "cors";
import { initGogSystem } from "@unq-ui/gog-model-js";

import UserController from "./controllers/userController.js";
import TokenController from "./controllers/tokenController.js";
import GamesController from "./controllers/gamesController.js";
import PurchaseController from "./controllers/purchaseController.js";
import SearchController from "./controllers/searchController.js";
import TagController from "./controllers/tagController.js";

const gogSystem = initGogSystem();

const app = express();
const port = 3000;

const corsOptions = {
  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tokenController = new TokenController(gogSystem);
const userController = new UserController(gogSystem, tokenController);
const gamesController = new GamesController(gogSystem, tokenController);
const purchaseController = new PurchaseController(gogSystem, tokenController);
const searchController = new SearchController(gogSystem);
const tagController = new TagController(gogSystem);

// User
app.post("/login", tokenController.checkRole("public"), userController.login);
app.post(
  "/register",
  tokenController.checkRole("public"),
  userController.register
);
app.get(
  "/users/current",
  tokenController.checkRole("user"),
  userController.currentUser
);
app
  .route("/users/:userId")
  .get(tokenController.checkRole("public"), userController.getUserById);

app
  .route("/users/:userId/friends")
  .get(tokenController.checkRole("public"), userController.getFriendsById)
  .put(tokenController.checkRole("user"), userController.addOrRemoveFriend);

app
  .route("/userReviews/:userId")
  .get(tokenController.checkRole("public"), userController.getUserReviewsById);

// Games
app.get(
  "/games",
  tokenController.checkRole("public"),
  gamesController.getGames
);

app.get(
  "/games/recommended",
  tokenController.checkRole("public"),
  gamesController.getRecommended
);

app
  .route("/games/:gameId")
  .get(tokenController.checkRole("public"), gamesController.getGameById)
  .put(tokenController.checkRole("user"), gamesController.addGameToCart)
  .delete(tokenController.checkRole("user"), gamesController.deleteGame);

app.put(
  "/games/:gameId/reviews",
  tokenController.checkRole("user"),
  gamesController.addReview
);

// search
app.get(
  "/search",
  tokenController.checkRole("public"),
  searchController.searchGames
);

// purchase
app.post(
  "/purchase",
  tokenController.checkRole("user"),
  purchaseController.purchase
);

app.get("/tags", tokenController.checkRole("public"), tagController.getTags);

app.get(
  "/tags/:tagId",
  tokenController.checkRole("public"),
  tagController.getGameByTag
);

app.get(
  "/users/current/cart",
  tokenController.checkRole("user"),
  userController.getUserCurrentCart
);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
