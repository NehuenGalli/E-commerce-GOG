import "./paginacion.css";
const Paginacion = ({ totalPages, currentPage, onPageChange }) => {
  const firstPage = () => onPageChange(1);

  const previousPage = () => onPageChange(Math.max(currentPage - 1, 1));

  const nextPage = () => onPageChange(Math.min(currentPage + 1, totalPages));

  const lastPage = () => onPageChange(totalPages);

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-3">
      <button
        className="btn btn-link text-dark p-0"
        onClick={firstPage}
        disabled={currentPage === 1}
      >
        <i className="bi bi-chevron-double-left"></i>
      </button>
      <button
        className="btn btn-link text-dark p-0"
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <span className="text-dark fw-bold">
        {currentPage} of {totalPages}
      </span>

      <button
        className="btn btn-link text-dark p-0"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
      <button
        className="btn btn-link text-dark p-0"
        onClick={lastPage}
        disabled={currentPage === totalPages}
      >
        <i className="bi bi-chevron-double-right"></i>
      </button>
    </div>
  );
};

export default Paginacion;
