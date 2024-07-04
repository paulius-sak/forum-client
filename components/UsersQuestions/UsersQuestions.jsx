import React from "react";
import styles from "./UsersQuestions.module.css";
import Button from "../Button/Button";

const UsersQuestions = ({ questions, user, DeleteQuestion }) => {
  if (!Array.isArray(questions)) {
    return null;
  }

  const userQuestions = questions.filter(question => user && question.user_id === user.id);



  return (
    <section className={styles.wrapper}>
      {userQuestions.length > 0 ? (
        userQuestions.map((question) => (
          <div key={question.id} id={question.id} className={styles.questionCard}>
            <h3 className={styles.questionTitle}>{question.question_title}</h3>
            <p className={styles.answerCount}>Answers: {question.answer_count}</p>
            <p className={styles.date}>Date: {new Date(question.date).toLocaleDateString()}</p>
            <Button title="Delete" onClick={() => DeleteQuestion(question.id)}></Button>
          </div>
        ))
      ) : (
        <p>No questions created by you.</p>
      )}
    </section>
  );
};

export default UsersQuestions;