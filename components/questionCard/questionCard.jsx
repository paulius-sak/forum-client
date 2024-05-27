import React, { useState } from "react";
import styles from "./QuestionCard.module.css";
import Link from "next/link";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const truncateTitle = (title, length) => {
  return title.length > length ? `${title.substring(0, length)}...` : title;
};

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
  const [isShowWarning, setShowWarning] = useState(false);
  const isCreator = user && user.id === user_id;

  const questionUser = users.find((user) => user.id === user_id);

  return (
    <div className={styles.wrapper}>
      <section className={styles.userInfo}>
        <h5>{date.split("T")[0]}</h5>
        <h5>Answers: {answer_count} </h5>

        {isCreator && (
          <Button
            title="Delete"
            className={styles.deleteBtn}
            onClick={() => setShowWarning(true)}
          />
        )}

        <h5>Asked: {questionUser ? questionUser.name : "undefined"}</h5>
      </section>
      <section className={styles.title}>
        <Link href={`/question/${id}`}>
          <h2>{truncateTitle(question_title, 60)}</h2>
        </Link>
      </section>
      {isShowWarning && (
        <Modal
          message="Do you really want to delete your question?"
          onConfirm={DeleteQuestion}
          onCancel={() => setShowWarning(false)}
        />
      )}
    </div>
  );
};

export default QuestionCard;
