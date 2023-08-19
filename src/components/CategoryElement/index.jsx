import React from "react";
import "./categoryel.css";
import { Link } from "react-router-dom";

const CategoryElement = ({ img, title }) => {
  return (
    <article className="category__item">
      <Link to="#">
        <img className="category__item--img" src={img} alt={title} />
      </Link>
      <div className="category__item--bottom">
        <span className="category__item--title">{title}</span>
      </div>
    </article>
  );
};

export default CategoryElement;
