import express from "express";

import { initGogSystem } from "@unq-ui/gog-model-js";

import UserController from "./controllers/userController.js";
import TokenController from "./controllers/tokenController.js";
import GamesController from "./controllers/gamesController.js";
import PurchaseController from "./controllers/purchaseController.js";
import SearchController from "./controllers/searchController.js";

const gogSystem = initGogSystem();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tokenController = new TokenController(gogSystem);
const userController = new UserController(gogSystem, tokenController);
const gamesController = new GamesController(gogSystem, tokenController);
const purchaseController = new PurchaseController(gogSystem, tokenController);
const searchController = new SearchController(gogSystem);

// User
app.post("/login", tokenController.checkRole("public"), userController.login);
app.post(
  "/register",
  tokenController.checkRole("public"),
  userController.register
);
app
  .route("/getUserById/:userId")
  .get(tokenController.checkRole("public"), userController.getUserById);

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
  .get(tokenController.checkRole("public"), gamesController.getGameById);

// search
app.get(
  "/search",
  tokenController.checkRole("public"),
  searchController.searchGames
);

// purchase
app.get(
  "/purchase",
  tokenController.checkRole("public"),
  purchaseController.purchase
);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
