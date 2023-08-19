import React from "react";
import SlickSlider from "../SlickSlider";
import "../HomeMainSlider/homemainslider.css";

const HomeMainSlider = ({ children }) => {
  const options = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="category">
      <div className="categories container">
        <SlickSlider options={options}>{children}</SlickSlider>
      </div>
    </section>
  );
};

export default HomeMainSlider;
