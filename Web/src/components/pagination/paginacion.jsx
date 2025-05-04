import "./paginacion.css";
const Paginacion = ({
  totalPages,
  currentPage,
  primerPagina,
  ultimaPagina,
  anteriorPagina,
  siguientePagina,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-3">
      <button
        className="btn btn-link text-dark efecto p-0"
        onClick={primerPagina}
        disabled={currentPage === 1}
      >
        <i className="bi bi-chevron-double-left"></i>
      </button>
      <button
        className="btn btn-link text-dark p-0 efecto"
        onClick={anteriorPagina}
        disabled={currentPage === 1}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <span className="text-dark fw-bold">
        {currentPage} of {totalPages}
      </span>

      <button
        className="btn btn-link text-dark p-0 efecto"
        onClick={siguientePagina}
        disabled={currentPage === totalPages}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
      <button
        className="btn btn-link text-dark p-0 efecto "
        onClick={ultimaPagina}
        disabled={currentPage === totalPages}
      >
        <i className="bi bi-chevron-double-right"></i>
      </button>
    </div>
  );
};

export default Paginacion;
