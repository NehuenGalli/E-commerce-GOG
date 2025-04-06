import { object, string } from "yup";

import { HEADER } from "../constants.js";

const registerBodySchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  image: string().url(),
  backgroundImage: string().url(),
})
  .noUnknown(true)
  .strict();

const loginBodySchema = object({
  email: string().email().required(),
  password: string().required(),
})
  .noUnknown(true)
  .strict();

class UserController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  login = async (req, res) => {
    const { email, password } = await loginBodySchema.validate(req.body);
    const user = this.service.users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      res.status(400).json({ error: "Invalid credentials" });
    }
    const token = this.tokenController.generateToken(user.id);
    const games = transformGames(user.games);
    const userTransformed = transformUser(user);
    const userInfo = {
      ...userTransformed,
      games,
    };
    res.header(HEADER, token).json(userInfo);
  };

  register = async (req, res) => {
    try {
      const newUser = await registerBodySchema.validate(req.body);
      const user = this.service.addNewUser(newUser);
      const token = this.tokenController.generateToken(user.id);

      const games = transformGames(user.games);
      const userTransformed = transformUser(user);
      const userInfo = {
        ...userTransformed,
        games,
      };
      res.header(HEADER, token).json(userInfo);
    } catch (error) {
      res.status(400).json({
        error: "Invalid data / User already exists and other errors.",
      });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await this.service.getUser(userId);

      const games = transformGames(user.games);
      const userTransformed = transformUser(user);
      const userInfo = {
        ...userTransformed,
        games,
      };

      res.header(HEADER, token).json(userInfo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

const transformGames = (games) =>
  games.map((game) => ({
    id: game.id,
    name: game.name,
    mainImage: game.mainImage,
    tags: game.tags,
    price: game.price,
  }));

const transformUser = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  image: user.image,
  backgroundImage: user.backgroundImage,
});

export default UserController;
