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

  //   purchase = async (req, res) => {
  //     try {
  //       const draftPurchase = await purchaseBodySchema.validate(req.body);
  //       const userId =
  //       this.service.purchaseGame(userId, draftPurchase);
  //       res.status(200).json("Purchase completed");
  //     } catch (error) {
  //       res.status(400).json({
  //         error: "Cart is empty",
  //       });
  //       res.status(401).json({
  //         error: "Unauthorized",
  //       });
  //     }
  //   };
}

export default PurchaseController;
