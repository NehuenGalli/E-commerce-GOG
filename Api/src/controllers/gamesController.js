class GamesController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  getGames = (req, res) => {
    res.json(this.service.getGames());
  };

  getGameById = (req, res) => {
    const { gameId } = req.params;
    const game = this.service.getGame(gameId);
    if (!game) {
      return res.status(400).json({ error: "Game not found" });
    }
    res.json(game);
  };
}

export default GamesController;
