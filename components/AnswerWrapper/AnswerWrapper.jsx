import React from "react";
import AnswerCard from "../AnswerCard/AnswerCard";
import PostAnswer from "../PostAnswer/PostAnswer";

const AnswerWrapper = ({ answers, noAnswers }) => {
  return (
    <section>
      {noAnswers ? (
        <div>There are no answers yet</div>
      ) : (
        answers.map((answer) => (
          <AnswerCard
            id={answer.id}
            key={answer.id}
            date={answer.date}
            answer_text={answer.answer_text}
            gained_likes={answer.gained_likes}
            gained_dislikes={answer.gained_dislikes}
          />
        ))
      )}

      <PostAnswer />
    </section>
  );
};

export default AnswerWrapper;
