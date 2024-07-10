import React from "react";
import styles from "./UsersQuestions.module.css";
import Button from "../Button/Button";
import Link from "next/link";

const UsersQuestions = ({ questions, user, DeleteQuestion, truncateTitle }) => {
  if (!Array.isArray(questions)) {
    return null;
  }

  const userQuestions = questions.filter(question => user && question.user_id === user.id);



  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>My Questions</h1>
      {userQuestions.length > 0 ? (
        userQuestions.map((question) => (
          <section key={question.id} id={question.id} className={styles.questionCard}>
            
            <Link href={`/question/${question.id}`}><h3  className={styles.questionTitle}>{truncateTitle(question.question_title, 60)}</h3></Link>
            <h5 className={styles.date}>Created: {new Date(question.date).toLocaleDateString()}</h5>
            <Button type="delete" className={styles.deleteBtn} title="Delete" onClick={() => DeleteQuestion(question.id)}></Button>
          </section>
        ))
      ) : (
        <p className={styles.noQuestions}>No questions created by You. <Link href="/askQuestion">Ask Question</Link></p>
      )}
    </section>
  );
};

export default UsersQuestions;