import React, { useState, useEffect } from "react";
import styles from "./PostAnswer.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import Button from "../Button/Button";

const PostAnswer = () => {
  const router = useRouter();
  const { id: question_id } = router.query;

  const [isError, setError] = useState(false);
  const [text, setText] = useState("");

  const postAnswer = async () => {
    const answerBody = {
      answer_text: text,
    };

    const headers = {
      authorization: cookies.get("jwt_token"),
    };

    if (!text) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/questions/${question_id}/answers`,
        answerBody,
        { headers }
      );

      console.log("response", response);

      if (response.status === 200) {
        console.log(response.data);
        router.reload();
      }
    } catch (err) {
      console.log("err", err);
      
    }
  };
  return (
    <section className={styles.answerWrapper}>
      <h1>Post Answer</h1>

      <div className={styles.inputGroup}>
        <textarea
          rows="12"
          cols="100"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <Button className={styles.postAnswerBtn} title="Post Answer" onClick={() => postAnswer()}/>

      {isError && <small className={styles.error}>* can`t post empty answer</small>}
    </section>
  );
};

export default PostAnswer;
