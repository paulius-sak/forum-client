import React, { useEffect, useState } from "react";
import styles from "./questions.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import QuestionsWrapper from "../../components/questionsWrapper/questionsWrapper";
import Link from "next/link";

const Index = () => {
  const [questions, setQuestions] = useState(null);

  const router = useRouter();

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/questions`);
      setQuestions(response.data.questions);
      console.log(response.data.questions);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <PageTemplate>
      <section>
        <h1>All questions</h1>
        <Link href="/askQuestion" >Ask Question</Link>
      </section>
      {questions && <QuestionsWrapper questions={questions} />}
    </PageTemplate>
  );
};

export default Index;
