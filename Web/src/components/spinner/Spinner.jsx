import "./Spinner.css";

function Spinner() {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <span role="status" className="fs-4">
          Loading...
        </span>
        <div className="spinner-grow spinner-grow-big text-info" />
        <div className="spinner-grow spinner-grow-big text-info" />
        <div className="spinner-grow spinner-grow-big text-info" />
      </div>
    </div>
  );
}

export default Spinner;
