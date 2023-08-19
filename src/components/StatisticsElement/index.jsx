import React from "react";
import "../StatisticsElement/statisticsElement.css";

const StatisticsElement = ({ count, description }) => {
  return (
    <div className="statistics__item">
      <h2 className="statistics__item--count">{count}+</h2>
      <p className="statistics__item--desc">{description}</p>
    </div>
  );
};

export default StatisticsElement;
