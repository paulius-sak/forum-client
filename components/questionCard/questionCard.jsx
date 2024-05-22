import React from "react";
import styles from "./questionCard.module.css";
import Link from "next/link";

const QuestionCard = ({ id, question_title, question_text, date }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{question_title}</h2>
      <p>{question_text}</p>
      <h5>{date}</h5>
      
    </div>
  );
};

export default QuestionCard;
