import React from "react";
import styles from "./QuestionsWrapper.module.css";
import QuestionCard from "../QuestionCard/QuestionCard";

const QuestionsWrapper = ({ questions, DeleteQuestion, user, users}) => {
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
          users={users}
        />
      ))}
    </div>
  );
};

export default QuestionsWrapper;
