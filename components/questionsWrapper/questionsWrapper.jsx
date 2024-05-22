import React from 'react'
import styles from "./questionsWrapper.module.css"
import QuestionCard from "../questionCard/questionCard"

const QuestionsWrapper = ({questions}) => {
  return (
    <div className={styles.questionsWrapper}>
        {questions.map((question) => (
            <QuestionCard
            id={question.id}
            key={question.id}
            question_title={question.question_title}
            answer_count={question.answer_count}
            date={question.date}
            />
        ))}
        
    </div>
  )
}

export default QuestionsWrapper