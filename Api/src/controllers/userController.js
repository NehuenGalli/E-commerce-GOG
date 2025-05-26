import { object, string } from "yup";

import { HEADER } from "../constants.js";

import { transformGames } from "../helpers/gameHelper.js";
import { transformUser5datos } from "../helpers/userHelper.js";
import { filterGame } from "../helpers/gameHelper.js";

import { formatReview } from "../helpers/reviewHelper.js";

const registerBodySchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  image: string().url().required(),
  backgroundImage: string().url().required(),
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
    try {
      const { email, password } = await loginBodySchema.validate(req.body);
      const user = this.service.users.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const token = this.tokenController.generateToken(user.id);
      const userInfo = {
        ...transformUser5datos(user),
        games: transformGames(user.games),
      };
      res.header(HEADER, token).json(userInfo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
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

      res.status(200).json(friendsList);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  addOrRemoveFriend = async (req, res) => {
    try {
      const { userId } = req.params;
      const loggedUser = req.user.id;

      const userWithNewFriendList = await this.service.addOrRemoveFriend(
        loggedUser,
        userId
      );
      const userInfo = {
        ...transformUser5datos(userWithNewFriendList),
        games: transformGames(userWithNewFriendList.games),
      };

      res.status(200).json([userInfo]);
    } catch (error) {
      if (error.name === "UserException") {
        res.status(400).json({ error: error.message });
      } else {
        res.status(404).json({ error: error.message });
      }
    }
  };

  getUserCurrentCart = async (req, res) => {
    try {
      const cart = await this.service.getCart(req.user?.id);
      const cartinfo = {
        id: cart.user.id,
        name: cart.user.name,
        image: cart.user.image,
        games: cart.games.map(filterGame),
      };
      res.status(200).json(cartinfo);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  currentUser = async (req, res) => {
    try {
      const user = await this.service.getUser(req.user?.id);
      const response = {
        ...transformUser5datos(user),
        games: user.games.map(filterGame),
      };
      res.status(200).json(response);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  getUserReviewsById = async (req, res) => {
    try {
      const { userId } = req.params;
      const reviews = await this.service.getUserReviews(userId);

      // const reviewsList = reviews.map((review) => ({
      //   ...formatReview(review),
      // }));

      const reviewsList = reviews.map((review) =>
        formatReview(review, review.game)
      );

      res.status(200).json(reviewsList);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
}

export default UserController;
