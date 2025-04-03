import { object, string } from "yup";

import { HEADER } from "../constants.js";

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
      const cardInfoNumber = cardInfo.cardNumber.length;
      const card = {
        cardName: cardInfo.cardName,
        cardNumber: cardInfoNumber,
        cardExpiration: new Date(cardInfo.cardExpiration),
        cardCvv: Number(cardInfo.cardCvv),
      };
      const userId = req.user.id;
      console.log("Draft created:", cardInfoNumber);

      await this.service.purchase(userId, card);
      res.status(201).json({ message: "Purchase completed" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default PurchaseController;
