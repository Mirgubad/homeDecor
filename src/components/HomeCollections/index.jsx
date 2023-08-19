import React from "react";
import "../HomeCollections/homeCollections.css";
import SectionTop from "../SectionTop";
import SlickSlider from "../SlickSlider";
const options = {
  arrows: true,
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};
const HomeCollections = ({ title, children }) => {
  return (
    <section className="collections">
      <div className="collections__content container">
        <SectionTop title={title} href="https://www.google.com/" />
        <div className="collections__bottom ">
          <SlickSlider options={options}>{children}</SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default HomeCollections;
