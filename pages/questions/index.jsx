import React, { useEffect, useState } from "react";
import styles from "./questions.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import QuestionsWrapper from "../../components/questionsWrapper/questionsWrapper";


const Index = () => {
  const [questions, setQuestions] = useState(null);

  const router = useRouter();

  const fetchQuestions = async () => {
    try {
        const headers = {
            authorization: cookies.get("jwt_token")
        }
        const response = await axios.get(`${process.env.SERVER_URL}/questions`, {headers,})
        setQuestions(response.data.questions)
        console.log(response.data.questions)
    } catch (err) {
        if (response.status === 401) {
            router.push("/signInLogin")
        }
        console.log("err", err)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])
  return (
    <PageTemplate>
      {questions && <QuestionsWrapper questions={questions} />}
    </PageTemplate>
  );
};

export default Index;
