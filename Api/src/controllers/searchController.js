class SearchController {
  constructor(service) {
    this.service = service;
  }

  searchGames = async (req, res) => {
    try {
      const { name, page } = req.query;
      const juegos = await this.service.searchGame(name, page);

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
}

export default SearchController;
