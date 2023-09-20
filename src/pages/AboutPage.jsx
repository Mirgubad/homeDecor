import { useGetAllStatisticsQuery } from "../services/statistics";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import AboutUs from "../components/AboutUs";
import Loader from "../components/Loader";
import React, { useEffect, useState } from "react";
import Statistics from "../components/Statistics";
import StatisticsElement from "../components/StatisticsElement";

const AboutPage = () => {
  useSetPageTitle("About");
  const { data: statistics, isLoading } = useGetAllStatisticsQuery();

  return isLoading || !statistics ? (
    <Loader />
  ) : (
    <main>
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
