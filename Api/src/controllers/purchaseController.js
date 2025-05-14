import { object, string } from "yup";

const purchaseBodySchema = object({
  cardName: string().required(),
  cardNumber: string().required(),
  cardExpiration: string().required(),
  cardCvv: string().required(),
})
  .noUnknown(true)
  .strict();

class PurchaseController {
  constructor(service, tokenController) {
    this.service = service;
    this.tokenController = tokenController;
  }

  purchase = async (req, res) => {
    try {
      const cardInfo = await purchaseBodySchema.validate(req.body);
      const card = {
        cardHolderName: cardInfo.cardName,
        cardNumber: Number(cardInfo.cardNumber),
        expirationDate: new Date(cardInfo.cardExpiration),
        cvv: Number(cardInfo.cardCvv),
      };
      const userId = req.user.id;
      console.log("Draft created:", card);

      await this.service.purchase(userId, card);
      res.status(201).json({ message: "Purchase completed" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default PurchaseController;
