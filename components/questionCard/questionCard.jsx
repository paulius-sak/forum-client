import React from "react";
import styles from "./questionCard.module.css";
import Link from "next/link";

const QuestionCard = ({ id, question_title, date, answer_count, DeleteQuestion, user, user_id, users}) => {
  const isCreator = user && user.id === user_id
  
  const questionUser = users.find(user => user.id === user_id)


  return (
    <div className={styles.wrapper}>
      <Link href={`/question/${id}`}><h2>{question_title}</h2></Link>
      
      <h5>created: {date.split("T")[0]}</h5>
      <h5>Total answers: {answer_count}</h5>
      {isCreator &&<button onClick={DeleteQuestion}>delete</button>}
      <h4>User:{questionUser ? questionUser.name : "undef"}</h4>
    </div>
  );
};

export default QuestionCard;
