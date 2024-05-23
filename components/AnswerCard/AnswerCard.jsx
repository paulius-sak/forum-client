import React from "react";
import styles from "./AnswerCard.module.css";

const AnswerCard = ({
  id,
  date,
  answer_text,
  gained_likes,
  gained_dislikes,
  DeleteAnswer,
  user,
  user_id,

}) => {
  const isCreator = user && user.id === user_id
  return <div className={styles.wrapper}>
    <p>{answer_text}</p>
    <h5>liked:{gained_likes.length}</h5>
    <h5>disliked:{gained_dislikes.length}</h5>
    <h6>created: {date.split("T")[0]}</h6>
    {isCreator && <button onClick={DeleteAnswer}>delete</button>}
  </div>;
};

export default AnswerCard;
