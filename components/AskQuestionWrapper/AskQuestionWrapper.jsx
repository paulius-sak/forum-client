import React, { useEffect, useState } from "react";
import styles from "./AskQuestionWrapper.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";

const AskQuestionWrapper = () => {
  const router = useRouter();

  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [isError, setError] = useState(false);

  const askQuestion = async () => {
    const questionBody = {
      question_title: title,
      question_text: text,
    };

    const headers = {
      authorization: cookies.get("jwt_token"),
    };

    if (!title || !text) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/questions`,
        questionBody,
        { headers }
      );

      console.log("response", response);

      if (response.status === 201) {
        cookies.get("jwt_token");
        router.back();
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <section className={styles.loginWrapper}>
      <h1>LOGIN</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="">Question title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="">Describe your Question with more details</label>
        <input
          type="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <button onClick={askQuestion}>Ask Question</button>

      {isError && alert("Please fill all the inputs")}
    </section>
  );
};

export default AskQuestionWrapper;
