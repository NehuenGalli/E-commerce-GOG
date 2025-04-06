import { object, string } from "yup";

import { HEADER } from "../constants.js";

import { transformGames, transformUser } from "../helpers/transformData.js";

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
    const userInfo = {
      ...transformUser(user),
      games: transformGames(user.games),
    };
    res.header(HEADER, token).json(userInfo);
  };

  register = async (req, res) => {
    try {
      const newUser = await registerBodySchema.validate(req.body);
      const user = this.service.addNewUser(newUser);
      const token = this.tokenController.generateToken(user.id);

      const userInfo = {
        ...transformUser(user),
        games: transformGames(user.games),
      };
      res.header(HEADER, token).json(userInfo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await this.service.getUser(userId);
      const userInfo = {
        ...transformUser(user),
        games: transformGames(user.games),
      };
      res.tatus(200).json(userInfo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

export default UserController;
