import React, { useState, useEffect } from "react";
import styles from "./question.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import AnswerWrapper from "@/components/AnswerWrapper/AnswerWrapper";
import cookies from "js-cookie";

const Question = () => {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [noAnswers, setNoAnswers] = useState(false);
  const [user, setUser] = useState(null);

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

  const DeleteAnswer = async (id) => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.delete(
        `${process.env.SERVER_URL}/answers/${id}`,
        {
          headers,
        }
      );

      router.reload()
    } catch (err) {
      console.log("err", err);
    }
  };

  const fetchUser = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/user/me`, {
        headers,
      });
      setUser(response.data.user);
    } catch (err) {
      console.log("err", err);
    }
  };

 

  useEffect(() => {
    fetchUser();
  }, []);


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
      {answers && <AnswerWrapper answers={answers} noAnswers={noAnswers} user={user} DeleteAnswer={DeleteAnswer}/>}
    </PageTemplate>
  );
};

export default Question;
