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
      console.log("Draft created:", draft);

      const { cardNumber, cardName, cardExpiration, cardCvv } =
        purchaseBodySchema.validate(req.body);

      const userId = req.user.id;
      const draft = new DraftPurchase(
        cardNumber,
        cardName,
        cardExpiration,
        cardCvv
      );
      await this.service.purchaseGame(userId, draft);
      res.status(200).json({ message: "Purchase completed" });
    } catch (error) {
      res.status(400).json({
        error: "Cart is empty",
      });
    }
  };
}

export default PurchaseController;
