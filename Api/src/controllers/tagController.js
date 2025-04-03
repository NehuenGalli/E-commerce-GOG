class TagController {
  constructor(service) {
    this.service = service;
  }

  //No hay funcion para llamar a los tags
  getTags = (req, res) => {
    try {
      const tags = this.service.tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        image: tag.image,
      }));
      res.status(200).json(tags);
    } catch (error) {
      res.status(400).json({ error: "Error" });
    }
  };
}
export default TagController;
