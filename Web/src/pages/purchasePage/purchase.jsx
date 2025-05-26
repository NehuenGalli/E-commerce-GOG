import "./purchaseStyle.css";
import NavBar from "../../components/navBar/navBar";

export default function Purchase() {
  return (
    <>
      <NavBar />
      <div className="container d-lg-flex mt-4 justify-content-center justify-content-sm-center flex-column flex-lg-row">
        <form className=" formBGColor px-5 rounded-2">
          <h3 className="text-white mt-3">Buy juegoEspecifico</h3>
          <div className="mb-3 d-flex flex-column flex-column align-items-center">
            <div className="mb-3 d-flex flex-column ">
              <label className="form-label d-flex ">CARD HOLDER NAME</label>
              <input type="text" className="form-control d-flex" />
            </div>
            <div className="mb-3 flex-column">
              <label className="form-label d-flex">NUMBER</label>
              <input type="text" className="form-control d-flex" />
            </div>
            <div className="mb-3 flex-column">
              <label className="form-label d-flex">CVV</label>
              <input type="password" className="form-control d-flex" />
            </div>
            <div className="mb-3 flex-column">
              <label className="form-label d-flex">EXPIRATION DATE</label>
              <input type="text" className="form-control d-flex " />
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
        <div className="checkOut mt-3 mt-lg-0">
          <h6 style={{ color: "white" }}>CheckOut</h6>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "15px",
            }}
          >
            <p style={{ color: "white" }}>Products</p>
            <p style={{ color: "white" }}>Fees 1%</p>
            <h6 style={{ color: "white" }}>Total</h6>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /*
  <div className="colorOfForm size d-flex w-5 justify-content-center rounded-2"></div>
  
  
  <div className="purchaseAndcheckOut">
        <h1>esta es la pagina de Purchase</h1>

        <div className="formPurchase">
          <form className="formP">
            <label for="exampleInputEmail1" class="form-label">
              CARD HOLDER NAME
            </label>
            <input type="text" className="inputP" />

            <label for="exampleInputPassword1" class="form-label">
              NUMBER
            </label>
            <input className="inputP" type="text" />

            <label for="exampleInputPassword1" class="form-label">
              CVV
            </label>
            <input className="inputP" type="text" />

            <label for="exampleInputPassword1" class="form-label">
              EXPIRATION DATE
            </label>
            <input className="inputP" type="text" />
            <button type="submit" className="btn btn-primary persButton mt-2">
              Buy
            </button>
          </form>
        </div>
        <div className="checkOut">
          <p>cheackout</p>
        </div>
      </div>*/
}
