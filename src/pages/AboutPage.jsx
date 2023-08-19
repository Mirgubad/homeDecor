import React, { useEffect, useState } from "react";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import AboutUs from "../components/AboutUs";
import PopUp from "../components/PopUp";
import Statistics from "../components/Statistics";
import StatisticsElement from "../components/StatisticsElement";

const AboutPage = () => {
  const [statistics, setStatistics] = useState([]);
  useSetPageTitle("About");

  const getStatistics = async () => {
    const response = await fetch("http://localhost:3000/statistics");
    const res = await response.json();
    setStatistics(res);
  };

  useEffect(() => {
    getStatistics();
  }, []);

  console.log(statistics);
  return (
    <main>
      <PopUp
        message="THANK YOU!"
        description="Your message has been received and we will contact you as soon as possible."
      />
      <AboutUs />
      <Statistics>
        {statistics &&
          statistics.map((statistic) => (
            <StatisticsElement
              key={statistic.id}
              count={statistic.count}
              description={statistic.description}
            />
          ))}
      </Statistics>
    </main>
  );
};

export default AboutPage;
