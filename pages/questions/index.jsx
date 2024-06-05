import React, { useEffect, useState } from "react";
import styles from "./questions.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import QuestionsWrapper from "../../components/QuestionsWrapper/QuestionsWrapper";
import Link from "next/link";
import QuestionsFilter from "../../components/QuestionsFilter/QuestionsFilter";
import Spinner from "@/components/Spinner/Spinner";

const Index = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false)

  const router = useRouter();

  const fetchQuestions = async () => {
    setLoading(true)
    try {
      
      const response = await axios.get(`${process.env.SERVER_URL}/questions`);
      setQuestions(response.data.questions);
      setFilteredQuestions(response.data.questions);
      setLoading(false)
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

  const fetchUsers = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/users`, {
        headers,
      });
      setUsers(response.data.users);
    } catch (err) {
      console.log("err", err);
    }
  };

  const filterQuestions = (filter) => {
    setFilter(filter);
    if (filter === "all") {
      setFilteredQuestions(questions);
    } else if (filter === "answered") {
      setFilteredQuestions(questions.filter((q) => q.answer_count > 0));
    } else if (filter === "unanswered") {
      setFilteredQuestions(questions.filter((q) => q.answer_count === 0));
    }
  };

  const DeleteQuestion = async (id) => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.delete(
        `${process.env.SERVER_URL}/questions/${id}`,
        {
          headers,
        }
      );

      fetchQuestions();
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
    fetchUser();
    fetchUsers();
  }, []);

  useEffect(() => {
    filterQuestions(filter);
  }, [questions, filter]);

  return (
    <PageTemplate>
      <h2 className={styles.title}>All Questions</h2>
      <QuestionsFilter filter={filter} onFilterChange={filterQuestions} />
      <section className={styles.askLink}>
        <Link user={user} href="/askQuestion">
          Ask Question
        </Link>
      </section>
      {isLoading ? (
        <Spinner />
      ) : (
        filteredQuestions && (
          <QuestionsWrapper
            DeleteQuestion={DeleteQuestion}
            questions={filteredQuestions}
            user={user}
            users={users}
          />
        )
      )}
    </PageTemplate>
  );
};

export default Index;
