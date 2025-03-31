class SearchController {
  constructor(service) {
    this.service = service;
  }

  searchGames = (req, res) => {
    res.json(this.service.searchGame("apex", 1));
  };
}

export default SearchController;
