import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import SampleNextArrow from "../SampleNextArrow";
import SamplePrevArrow from "../SamplePrevArrow";
const MainSlider = ({ options, children }) => {
  return (
    <Slider
      style={{ paddingBottom: "12rem" }}
      {...options}
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
    >
      {children}
    </Slider>
  );
};

export default MainSlider;
