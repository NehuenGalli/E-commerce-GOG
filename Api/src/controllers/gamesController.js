class GamesController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  getGames = async (req, res) => {
    try {
      const { page } = req.query;
      const juegos = await this.service.getGames(page).list.map((game) => ({
        id: game.id,
        name: game.name,
        mainImage: game.mainImage,
        tags: game.tags,
        price: game.price,
        currentPage: game.currentPage,
        amountOfElements: game.amountOfElements,
        amountOfPages: game.amountOfPages,
      }));
      res.status(200).json({ list: juegos });
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
      const games = cart.games.map((game) => ({
        id: game.id,
        name: game.name,
        mainImage: game.mainImage,
        tags: game.tags,
        price: game.price,
      }));
      const user = {
        id: cart.user.id,
        name: cart.user.name,
        image: cart.user.image,
      };
      res.status(200).json({ games, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteGameFromCart = async (req, res) => {
    try {
      const { gameId } = req.params;
      const { userId } = req.user;
      const cart = await this.service.removeGameFromCart(userId, gameId);
      const games = cart.games.map((game) => ({
        id: game.id,
        name: game.name,
        mainImage: game.mainImage,
        tags: game.tags,
        price: game.price,
      }));
      console.log(games);
      const user = {
        id: cart.user.id,
        name: cart.user.name,
        image: cart.user.image,
      };
      console.log(user);
      res.status(200).json({ games, user });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };
}
export default GamesController;
