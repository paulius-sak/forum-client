import React, { useState, useEffect } from "react";
import styles from "./question.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import AnswerWrapper from "@/components/AnswerWrapper/AnswerWrapper";

const Question = () => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [noAnswers, setNoAnswers] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchQuestion = async () => {
        try {
          const response = await axios.get(
            `${process.env.SERVER_URL}/questions/${id}`
          );
          setQuestion(response.data.question);
        } catch (err) {
          console.log("err", err);
        }
      };

      fetchQuestion();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const fetchAnswers = async () => {
        try {
          const response = await axios.get(
            `${process.env.SERVER_URL}/questions/${id}/answers`
          );
          setAnswers(response.data.answers);
        } catch (err) {
          if (err.response && err.response.status === 404) {
            setNoAnswers(true);
          }
          console.log("err", err);
        }
      };

      fetchAnswers();
    }
  }, [id]);

  return (
    <PageTemplate>
      {question && (
        <main>
          <div className={styles.wrapper}>
            <h1>{question.question_title}</h1>
            <p>{question.question_text}</p>
          </div>
        </main>
      )}
      {answers && <AnswerWrapper answers={answers} noAnswers={noAnswers} />}
    </PageTemplate>
  );
};

export default Question;