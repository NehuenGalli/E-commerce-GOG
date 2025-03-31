import express from "express";

import { initGogSystem } from "@unq-ui/gog-model-js";

import UserController from "./controllers/userController.js";
import TokenController from "./controllers/tokenController.js";

const gogSystem = initGogSystem();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tokenController = new TokenController(gogSystem);
const userController = new UserController(gogSystem, tokenController);

// User
app.post("/login", tokenController.checkRole("public"), userController.login);
app.post(
  "/register",
  tokenController.checkRole("public"),
  userController.register
);

// Games
app.get(
  "/games",
  tokenController.checkRole("public"),
  gamesController.getGames
);

app
  .route("/games/:gameId")
  .get(tokenController.checkRole("public"), gamesController.getGameById);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
