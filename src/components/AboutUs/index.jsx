import React, { useEffect, useState } from "react";
import ButtonSecondary from "../ButtonSecondary";
import "../AboutUs/aboutUs.css";
import SectionTop from "../SectionTop";
import { useLocation } from "react-router-dom";

const AboutUs = ({ title, img, description }) => {
  const [aboutUs, setAboutUs] = useState({});
  const location = useLocation();

  const getAbout = async () => {
    const response = await fetch("http://localhost:3000/aboutUs");
    const res = await response.json();
    setAboutUs(res);
  };

  useEffect(() => {
    getAbout();
  }, []);
  return (
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

export default AboutUs;
