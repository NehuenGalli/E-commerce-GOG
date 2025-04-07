import { transformGames } from "../helpers/gameHelper.js";

class SearchController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  searchGames = async (req, res) => {
    try {
      const { name, page } = req.query;
      const games = await this.service.searchGame(name, page);
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
}

export default SearchController;
