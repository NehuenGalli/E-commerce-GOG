class GamesController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  getGames = async (req, res) => {
    try {
      const { page } = req.query;
      const games = await this.service.getGames(page);
      const gamesInfo = {
        list: transformGames(games.list),
        currentPage: games.currentPage,
        amountOfElements: games.amountOfElements,
        amountOfPages: games.amountOfPages,
      };
      res.status(200).json(gamesInfo);
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

  getRecommended = (req, res) => {
    try {
      const recommendedGames = this.service
        .getRecommendedGames()
        .map((game) => ({
          id: game.id,
          name: game.name,
          mainImage: game.mainImage,
          tags: game.tags,
          price: game.price,
        }));
      res.status(200).json(recommendedGames);
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
    const { gameId } = req.params;
    const { id } = req.user;
    try {
      const cart = await this.service.removeGameFromCart(id, gameId);
      res.status(200).json({
        games: transformGames(cart.games),
        user: transformUser(cart.user),
      });
    } catch (error) {
      return res.status(404).json({ error: error.message });
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
  name: user.name,
  image: user.image,
});
export default GamesController;
