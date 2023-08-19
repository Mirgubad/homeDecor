import React from "react";
import "../HomeProducts/homeproduct.css";

import SectionTop from "../SectionTop";
const HomeProducts = ({ children, title }) => {
  return (
    <section className="homeproduct">
      <div className="homeproduct__contents container">
        {title && <SectionTop title={title} href="https://www.google.com/" />}
        <div className="product__contents ">{children}</div>
      </div>
    </section>
  );
};

export default HomeProducts;
