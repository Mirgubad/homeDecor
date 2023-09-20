import "../AboutUs/aboutUs.css";
import { useGetAboutUsQuery } from "../../services/aboutUs";
import { useLocation } from "react-router-dom";
import ButtonSecondary from "../ButtonSecondary";
import Loader from "../Loader";
import React, { useEffect, useState } from "react";
import SectionTop from "../SectionTop";

const AboutUs = () => {
  const { data: aboutUs, isLoading } = useGetAboutUsQuery();
  const location = useLocation();

  return !aboutUs || isLoading ? (
    <Loader />
  ) : (
    <section className="about">
      <div className="container">
        <SectionTop title={aboutUs.title} />
      </div>
      <div className="about__contents container">
        <div className="about__left">
          <img
            className="about__left--img"
            src={aboutUs.img}
            alt={aboutUs.title}
          />
        </div>
        <div className="about__right">
          <p className="about__desc">{aboutUs.description}</p>
          {location.pathname !== "/about" ? (
            <ButtonSecondary href="/about">Learn More</ButtonSecondary>
          ) : null}
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(AboutUs);
