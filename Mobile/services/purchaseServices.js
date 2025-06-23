import axios from "axios";
import { errorMessage } from "../utilities/error_message";

import { API, ROUTES_API } from "../constants";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const purchase = (nameCard, numCard, expDate, cvv, token) =>
  api
    .post(
      ROUTES_API.PURCHASE,
      {
        cardName: nameCard,
        cardNumber: numCard,
        cardExpiration: expDate,
        cardCvv: cvv,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => response)
    .catch((error) => {
      throw errorMessage(error);
    });

export { purchase };
