import React from "react";
import "../SectionTopBottom/sectionTopBottom.css";

const SectionTopBottom = ({ children }) => {
  return (
    <section className="sectionTopBottom">
      <div className="sectionTopBottom__items">{children}</div>
    </section>
  );
};

export default SectionTopBottom;
