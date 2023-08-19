import React from "react";
import "../Collections/collections.css";

const Collections = ({ children }) => {
  return (
    <section className="collection">
      <div className="collection__items">{children}</div>
    </section>
  );
};

export default Collections;
