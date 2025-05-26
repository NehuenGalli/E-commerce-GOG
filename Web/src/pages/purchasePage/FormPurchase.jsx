import { useState } from "react";
import { useNavigate } from "react-router";
import "./purchaseStyle.css";
import { purchase } from "../../services/purchaseService";
import { ROUTES } from "../../constants";
import { toast } from "react-toastify";

const FormPurchase = () => {
  const [nameCard, setNameCard] = useState("");
  const [numCard, setNumCard] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCVV] = useState("");

  const navigate = useNavigate();

  const submitCard = (e) => {
    e.preventDefault();
    purchase(nameCard, numCard, expDate, cvv)
      .then((response) => {
        toast.success(response.data);
        navigate(ROUTES.LIBRARY);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <form onSubmit={submitCard} className=" formBGColor px-5 rounded-2 ">
        <h3 className="text-white mt-3"></h3>
        <div className="mb-3 d-flex flex-column flex-column align-items-center">
          <div className="mb-3 d-flex flex-column ">
            <label className="form-label d-flex ">CARD HOLDER NAME</label>
            <input
              type="text"
              className="form-control d-flex w-100"
              value={nameCard}
              onChange={(e) => {
                setNameCard(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3 flex-column">
            <label className="form-label d-flex">NUMBER</label>
            <input
              type="text"
              className="form-control d-flex"
              onChange={(e) => {
                setNumCard(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3 flex-column">
            <label className="form-label d-flex">CVV</label>
            <input
              type="password"
              className="form-control d-flex"
              onChange={(e) => {
                setCVV(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3 flex-column">
            <label className="form-label d-flex">EXPIRATION DATE</label>
            <input
              type="text"
              className="form-control d-flex "
              onChange={(e) => {
                setExpDate(e.target.value);
              }}
              required
            />
          </div>
          <div className="d-flex">
            <button
              type="submit"
              className="btn btn-primary persButton d-flex justify-content-center w-fit-content"
            >
              Buy
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormPurchase;
