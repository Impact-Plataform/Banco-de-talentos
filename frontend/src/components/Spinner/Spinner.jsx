import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center text-center w-100">
      <button className="btn btn-primary fw-bold" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Carregando...
      </button>
    </div>
  );
};

export default Spinner;
