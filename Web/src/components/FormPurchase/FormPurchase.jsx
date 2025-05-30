import { useState } from "react";
import { useNavigate } from "react-router";
import { purchase } from "../../services/purchaseService";
import { ROUTES } from "../../constants";
import { toast } from "react-toastify";
import { validateCardData } from "../../utilities/validateCard";

const FormPurchase = ({ items }) => {
  const [nameCard, setNameCard] = useState("");
  const [numCard, setNumCard] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCVV] = useState("");

  const navigate = useNavigate();

  const submitCard = (e) => {
    e.preventDefault();
    const errorMsg = validateCardData({ nameCard, numCard, expDate, cvv });
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }
    purchase(nameCard, numCard, expDate, cvv)
      .then(() => {
        toast.success("Compra exitosa");
        localStorage.removeItem("cart");
        setTimeout(() => navigate(ROUTES.LIBRARY), 1000);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <form
        onSubmit={submitCard}
        className="formBGColor rounded-2 d-flex flex-column justify-content-center py-3 px-5 gap-3 "
      >
        <h3 className="text-white align-self-start">{`Buy ${items[0].name}`}</h3>
        <div>
          <label className="form-label ">CARD HOLDER NAME</label>
          <input
            type="text"
            className="form-control"
            value={nameCard}
            onChange={(e) => {
              setNameCard(e.target.value);
            }}
            pattern="[A-Za-z\s]+"
            required
          />
        </div>
        <div>
          <label className="form-label ">NUMBER</label>
          <input
            type="text"
            inputMode="numeric"
            className="form-control"
            onChange={(e) => {
              setNumCard(e.target.value);
            }}
            required
            maxLength={16}
          />
        </div>
        <div>
          <label className="form-label ">CVV</label>
          <input
            type="password"
            inputMode="numeric"
            className="form-control"
            onChange={(e) => {
              setCVV(e.target.value);
            }}
            maxLength={4}
            required
          />
        </div>
        <div>
          <label className="form-label ">EXPIRATION DATE</label>
          <input
            type="text"
            className="form-control "
            onChange={(e) => {
              setExpDate(e.target.value);
            }}
            placeholder="MM/YY"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary persButton w-25 align-self-center my-2"
        >
          Buy
        </button>
      </form>
    </>
  );
};

export default FormPurchase;
