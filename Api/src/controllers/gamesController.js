import { transformGames, transformUser } from "../helpers/transformData.js";

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
      res.status(200).json(game);
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
      res.status(400).json({ error: error.message });
    }
  };

  deleteGame = async (req, res) => {
    try {
      const { gameId } = req.params;
      const { id } = req.user;
      const cart = await this.service.removeGameFromCart(id, gameId);
      const cartInfo = {
        games: transformGames(cart.games),
        user: transformUser(cart.user)
      }; 
        res.status(200).json(cartInfo);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

}

export default GamesController;
