import React from "react";
import styles from "./questionsWrapper.module.css";
import QuestionCard from "../questionCard/questionCard";

const QuestionsWrapper = ({ questions, DeleteQuestion, user}) => {
  return (
    <div className={styles.questionsWrapper}>
      {questions.map((question) => (
        <QuestionCard
          DeleteQuestion={() => DeleteQuestion(question.id)}
          id={question.id}
          key={question.id}
          question_title={question.question_title}
          answer_count={question.answer_count}
          date={question.date}
          user={user}
          user_id={question.user_id}
        />
      ))}
    </div>
  );
};

export default QuestionsWrapper;
