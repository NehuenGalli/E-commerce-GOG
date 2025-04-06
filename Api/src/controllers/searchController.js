class SearchController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  searchGames = async (req, res) => {
    try {
      const { name, page } = req.query;
      const games = await this.service.searchGame(name, page);
      const juegosRestringidos = games.list.map((game) => ({
        id: game.id,
        name: game.name,
        mainImage: game.mainImage,
        tags: game.tags,
        price: game.price,
        currentPage: game.currentPage,
        amountOfElements: game.amountOfElements,
        amountOfPages: game.amountOfPages,
      }));
      res.status(200).json({ juegosRestringidos });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default SearchController;
