import React from "react";
import AnswerCard from "../AnswerCard/AnswerCard";
import PostAnswer from "../PostAnswer/PostAnswer";

const AnswerWrapper = ({ answers, noAnswers, DeleteAnswer, user, users }) => {
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
            user_id={answer.user_id}
            user={user}
            DeleteAnswer={() => DeleteAnswer(answer.id)}
            users={users}
          />
        ))
      )}

      <PostAnswer />
    </section>
  );
};

export default AnswerWrapper;
