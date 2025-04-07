import { transformGames } from "../helpers/transformData.js"

class TagController {
  constructor(service) {
    this.service = service;
  }

  getTags = (req, res) => {
    try {
      const tags = this.service.tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        image: tag.image,
      }));
      res.status(200).json(tags);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getGameByTag = async (req, res) => {
    const { tagId } = req.params; 
    const { page } = req.query;
    try {
      const tag = await this.service.getTag(tagId);
      const pageInfo = await this.service.getGamesByTag(tagId, page);

      const response = {
        list: transformGames(pageInfo.list),
        currentPage: pageInfo.currentPage,
        amountOfElements: pageInfo.amountOfElements,
        amountOfPages: pageInfo.amountOfPages,
      }

      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message});
    }

  };
}

export default TagController;
