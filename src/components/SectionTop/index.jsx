import "../SectionTop/sectionTop.css";
import { Link } from "react-router-dom";
import React from "react";

const SectionTop = ({ title, href }) => {
  return (
    <div className="section__top ">
      <h2 className="section__title">{title}</h2>
      {href && (
        <Link className="see__all" to={href}>
          see all
        </Link>
      )}
    </div>
  );
};

export default SectionTop;
