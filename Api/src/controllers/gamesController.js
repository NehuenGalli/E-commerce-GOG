import { DraftReview } from "@unq-ui/gog-model-js/src/model/Drafts.js";
import { object, boolean, string } from "yup";
import {
  transformGames,
  transformGameWhitReviews,
} from "../helpers/gameHelper.js";
import { transformUser } from "../helpers/userHelper.js";

const reviewBodySchema = object({
  isRecommended: boolean().required(),
  text: string().required(),
})
  .noUnknown(true)
  .strict();

class GamesController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  getGames = async (req, res) => {
    try {
      const { page } = req.query;
      const games = await this.service.getGames(page);
      res.status(200).json({
        list: transformGames(games.list),
        currentPage: games.currentPage,
        amountOfElements: games.amountOfElements,
        amountOfPages: games.amountOfPages,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getGameById = (req, res) => {
    try {
      const { gameId } = req.params;
      const game = this.service.getGame(gameId);
      const response = transformGameWhitReviews(game);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getRecommended = async (req, res) => {
    try {
      res
        .status(200)
        .json(transformGames(await this.service.getRecommendedGames()));
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  addGameToCart = (req, res) => {
    try {
      const { gameId } = req.params;
      const { id } = req.user;
      const cart = this.service.addGameToCart(id, gameId);
      res.status(200).json({
        games: transformGames(cart.games),
        user: transformUser(cart.user),
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  deleteGame = async (req, res) => {
    try {
      const { gameId } = req.params;
      const { id } = req.user;
      const cart = await this.service.removeGameFromCart(id, gameId);
      const cartInfo = {
        games: transformGames(cart.games),
        user: transformUser(cart.user),
      };
      res.status(200).json(cartInfo);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

  addReview = async (req, res) => {
    const { gameId } = req.params;
    const { id } = req.user;

    try {
      const { isRecommended, text } = await reviewBodySchema.validate(req.body);
      const game = await this.service.getGame(gameId);

      const draftReview = new DraftReview(gameId, isRecommended, text);
      await this.service.addReview(id, draftReview);
      const response = transformGameWhitReviews(game);
      res.status(200).json(response);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message }); // Body inválido
      }
        return res.status(404).json({ error: error.message }); // Por ej. el juego no existe
    }
  };
}

export default GamesController;
