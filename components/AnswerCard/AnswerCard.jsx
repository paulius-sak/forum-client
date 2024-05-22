import React from "react";
import styles from "./AnswerCard.module.css";

const AnswerCard = ({
  id,
  date,
  answer_text,
  gained_likes,
  gained_dislikes,
}) => {
  return <div className={styles.wrapper}>
    <p>{answer_text}</p>
    <h5>liked:{gained_likes.length}</h5>
    <h5>disliked:{gained_dislikes.length}</h5>
  </div>;
};

export default AnswerCard;
