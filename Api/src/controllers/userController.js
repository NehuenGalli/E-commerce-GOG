import { object, string } from "yup";

import { HEADER } from "../constants.js";

import {
  transformGames,
  transformUser5datos,
} from "../helpers/transformData.js";

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
      ...transformUser5datos(user),
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
        ...transformUser5datos(user),
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
        ...transformUser5datos(user),
        games: transformGames(user.games),
      };
      console.log(userInfo);
      res.status(200).json(userInfo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  getFriendsById = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await this.service.getUser(userId);
      const friendsList = user.friends.map((friend) => ({
        ...transformUser5datos(friend),
        games: transformGames(friend.games),
      }));
      console.log(friendsList);
      res.status(200).json(friendsList);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  addOrRemoveFriend = async (req, res) => {
    try {
      const { userId } = req.params;
      const loggedUser = req.user.id;
      console.log(userId);
      const userWithNewFriendList = await this.service.addOrRemoveFriend(
        loggedUser,
        userId
      );
      const userInfo = {
        ...transformUser5datos(userWithNewFriendList),
        games: transformGames(userWithNewFriendList.games),
      };
      console.log(userWithNewFriendList);
      res.status(200).json([userInfo]);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
}

export default UserController;
