import React from "react";
import styles from "./StatisticsWrapper.module.css";
import MainStatistics from "../MainStatistics/MainStatistics";
import TopContributors from "../TopContributors/TopContributors";

const StatisticsWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <MainStatistics />
      <TopContributors />
    </div>
  );
};

export default StatisticsWrapper;
