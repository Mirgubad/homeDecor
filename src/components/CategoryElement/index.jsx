import "./categoryel.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const CategoryElement = ({ img, title, id, type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (type === "category") {
      navigate(`/products?categoryIds=${id}&collectionIds=`);
    } else if (type === "collections") {
      navigate(`/products?categoryIds=&collectionIds=${id}`);
    }
  };
  return (
    <article className="category__item">
      <div className="category__item--top" onClick={() => handleClick(type)}>
        <img className="category__item--img" src={img} alt={title} />
      </div>
      <div className="category__item--bottom">
        <span className="category__item--title">{title}</span>
      </div>
    </article>
  );
};

export default CategoryElement;
