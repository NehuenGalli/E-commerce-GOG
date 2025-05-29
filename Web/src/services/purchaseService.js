import axios from "axios";
import { errorMessage } from "../utilities/error_message";

import { getToken } from "../utilities/localstorageUtils";

import { API, ROUTES } from "../constants";

const api = axios.create({
  baseURL: API.BASE_URL,
});

const purchase = (nameCard, numCard, expDate, cvv) =>
  api
    .post(
      ROUTES.PURCHASE,
      {
        cardName: nameCard,
        cardNumber: numCard,
        cardExpiration: expDate,
        cardCvv: cvv,
      },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    )
    .then((response) => response)
    .catch((error) => {
      throw errorMessage(error);
    });

export { purchase };
