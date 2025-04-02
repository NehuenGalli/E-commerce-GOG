class SearchController {
  constructor(service, tokenController) {
      this.service = service;
      this.tokenController = tokenController;
  }

  searchGames = async (req, res) => {
      try {
          const { name, page = 1 } = req.query;
          let result = await this.service.searchGame(name, parseInt(page));

          // Si result no es un objeto válido, asignamos valores por defecto
          if (!result || typeof result !== 'object') {
              result = { list: [], currentPage: "1", amountOfElements: 0, amountOfPages: 0 };
          }

          // Convertimos list en un array si no lo es
          let games = Array.isArray(result.list) ? result.list : result.list ? [result.list] : [];

          // Transformamos los juegos para eliminar relatedGames
          const transformedList = games.map(transformGame);

          res.json({
              ...result, // Mantiene todas las demás propiedades (currentPage, amountOfElements, amountOfPages)
              list: transformedList // Lista de juegos sin relatedGames
          });
      } catch (error) {
          res.status(400).json({ error: error.message });
      }
  };
}

const transformGame = (game) => {
  // Clonar el objeto sin relatedGames
  const { relatedGames, ...rest } = game;
  return rest;
};

export default SearchController;