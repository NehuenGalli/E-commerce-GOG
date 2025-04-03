class GamesController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  getGames = async (req, res) => {
    try {
      const { page } = req.query;
      const juegos = await this.service.getGames(page);
      const juegosRestringidos = juegos.list.map((game) => ({
        id: game.id,
        name: game.name,
        mainImage: game.mainImage,
        tags: game.tags,
        price: game.price,
        currentPage: game.currentPage,
        amountOfElements: game.amountOfElements,
        amountOfPages: game.amountOfPages,
      }));
      res.status(200).json({ list: juegosRestringidos });
    } catch (error) {
      res.status(400).json({ error: "Wrong page number" });
    }
  };

  getGameById = (req, res) => {
    const { gameId } = req.params;
    const game = this.service.getGame(gameId);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.status(200).json(game);
  };

  getRecommended = (req, res) => {
    const recommendedGames = this.service.getRecommendedGames().map((game) => ({
      id: game.id,
      name: game.name,
      mainImage: game.mainImage,
      tags: game.tags,
      price: game.price,
    }));
    res.status(200).json(recommendedGames);
  };

  addGameToCart = (req, res) => {
    try {
      const { id, name, image } = req.user;

      const { gameId } = req.params;
      this.service.addGameToCart(id, gameId);

      const game = this.service.getGame(gameId);

      const gameInfo = {
        id: game.id,
        name: game.name,
        mainImage: game.mainImage,
        tags: game.tags,
        price: game.price,
      };

      const userInfo = {
        id: id,
        name: name,
        imagine: image,
      };

      res.status(200).json({
        game: gameInfo,
        user: userInfo,
      });
    } catch (error) {
      res.status(401).json({ error: "Unauthorize" });
      res.status(404).json({ error: "Not Found" });
    }
  };

  deleteGame = async (req, res) => {
    const { gameId } = req.params;
    const { id, name, image } = req.user;

     const game = await this.service.getGame(gameId);

    try {
      const cart = await this.service.removeGameFromCart(id, gameId); 
      
      const response = {
        games: cart.games.map(game => ({  // <-- Usa cart.games, no el juego eliminado
            id: game.id,
            name: game.name,
            mainImage: game.mainImage?.url || null,
            tags: game.tags?.map(tag => ({
                id: tag.id,
                name: tag.name,
                image: { src: tag.image?.src }
            })) || [],
            price: game.price
        })),
        user: {
            id: id,
            name: name,
            image: image || null
        }
    };

    res.status(200).json(response);

    } catch (error) {
      return res.status(400).json({ error: error.message});  
    }
  };

}
export default GamesController;
