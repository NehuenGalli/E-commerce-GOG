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
}
export default TagController;
