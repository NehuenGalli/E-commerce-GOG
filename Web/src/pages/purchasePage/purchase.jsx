import "./purchaseStyle.css";
import NavBar from "../../components/navBar/navBar";

export default function Purchase() {
  return (
    <>
      <NavBar />
      <div className="container size d-flex justify-content-center pt-5">
        <div className="colorOfForm size d-flex w-5 justify-content-center ">
          <form>
            <div className="mb-3 d-flex flex-column">
              <label for="exampleInputEmail1" className="form-label d-flex ">
                CARD HOLDER NAME
              </label>
              <input
                type="email"
                className="form-control d-flex"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text flex-column">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 flex-column">
              <label for="exampleInputPassword1" className="form-label d-flex">
                Password
              </label>
              <input
                type="password"
                className="form-control d-flex"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check d-flex">
              <input
                type="checkbox"
                className="form-check-input d-flex"
                id="exampleCheck1"
              />
              <label className="form-check-label d-flex" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary persButton d-flex justify-content-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

{
  /*<div className="purchaseAndcheckOut">
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
