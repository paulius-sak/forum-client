import React, { useEffect, useState } from "react";
import styles from "./questions.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import QuestionsWrapper from "../../components/questionsWrapper/questionsWrapper";
import Link from "next/link";
import QuestionsFilter from "../../components/QuestionsFilter/QuestionsFilter";

const Index = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [filter, setFilter] = useState("all")

  const router = useRouter();

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/questions`);
      setQuestions(response.data.questions);
      setFilteredQuestions(response.data.questions);
      console.log(response.data.questions);
    } catch (err) {
      console.log("err", err);
    }
  };

  const filterQuestions = (filter) => {
    setFilter(filter);
    if (filter === "all") {
      setFilteredQuestions(questions);
    } else if (filter === "answered") {
      setFilteredQuestions(questions.filter(q => q.answer_count > 0));
    } else if (filter === "unanswered") {
      setFilteredQuestions(questions.filter(q => q.answer_count === 0));
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    filterQuestions(filter);
  }, [questions, filter]);
  return (
    <PageTemplate>
      <QuestionsFilter filter={filter} onFilterChange={filterQuestions}/>
      <section>
        <h1>All questions</h1>
        <Link href="/askQuestion" >Ask Question</Link>
      </section>
      {filteredQuestions && <QuestionsWrapper questions={filteredQuestions} />}
    </PageTemplate>
  );
};

export default Index;
