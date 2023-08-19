import React from "react";
import "../Results/result.css";
import Pagination from "../Pagination";

const Results = ({ children, pageCount, currentPage, handlePageClick }) => {
  return (
    <section className="results">
      <div className="results__items">{children}</div>
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </section>
  );
};

export default Results;
