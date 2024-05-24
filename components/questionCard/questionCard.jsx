import React from "react";
import styles from "./questionCard.module.css";
import Link from "next/link";

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
        <h5>{answer_count} answers</h5>
        {isCreator && <button onClick={DeleteQuestion}>delete</button>}
        <h5>Asked: {questionUser ? questionUser.name : "undef"}</h5>
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
