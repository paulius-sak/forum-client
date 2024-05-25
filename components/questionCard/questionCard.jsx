import React from "react";
import styles from "./questionCard.module.css";
import Link from "next/link";
import Button from "../Button/Button";

const QuestionCard = ({
  id,
  question_title,
  date,
  answer_count,
  DeleteQuestion,
  user,
  user_id,
  users,
}) => {
  const isCreator = user && user.id === user_id;

  const questionUser = users.find((user) => user.id === user_id);

  return (
    <div className={styles.wrapper}>
      <section className={styles.userInfo}>
        <h5>{date.split("T")[0]}</h5>
        <h5>Answers: {answer_count} </h5>
        {isCreator && <Button title="Delete" className={styles.deleteBtn} onClick={DeleteQuestion}/>}
        <h5>Asked: {questionUser ? questionUser.name : "undefined"}</h5>
      </section>
      <section className={styles.title}>
        <Link href={`/question/${id}`}>
          <h2>{question_title}</h2>
        </Link>
      </section>
    </div>
  );
};

export default QuestionCard;
