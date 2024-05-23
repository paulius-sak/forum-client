import React from "react";
import styles from "./QuestionsFilter.module.css";

const QuestionsFilter = ({filter, onFilterChange}) => {
  return (
    <section className={styles.filterWrapper}>
      <button
        className={filter === "all" ? styles.active : ""}
        onClick={() => onFilterChange("all")}
      >
        All Questions
      </button>
      <button
        className={filter === "answered" ? styles.active : ""}
        onClick={() => onFilterChange("answered")}
      >
        Answered Questions
      </button>
      <button
        className={filter === "unanswered" ? styles.active : ""}
        onClick={() => onFilterChange("unanswered")}
      >
        Unanswered Questions
      </button>
    </section>
  );
};

export default QuestionsFilter;
