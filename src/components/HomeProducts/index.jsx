import "../HomeProducts/homeproduct.css";
import { useLocation } from "react-router-dom";
import React from "react";

import SectionTop from "../SectionTop";
const HomeProducts = ({ children, title }) => {
  const location = useLocation();
  return (
    <section className="homeproduct">
      <div
        className={`homeproduct__contents ${
          location.pathname !== "/" ? "" : "container"
        }`}
      >
        {title && (
          <SectionTop title={title} href="http://localhost:5173/products" />
        )}
        <div className="product__contents ">{children}</div>
      </div>
    </section>
  );
};

export default HomeProducts;
