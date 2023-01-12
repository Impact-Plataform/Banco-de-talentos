import React from "react";

const Spinner = () => {
  
  return (
    <button className="btn btn-primary" type="button" disabled>
      <span
        className="spinner-grow spinner-grow-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
       Carregando...
    </button>
    
  );
};

export default Spinner;
