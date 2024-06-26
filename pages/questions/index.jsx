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
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const questionsPerPage = 5;

  const router = useRouter();

  const fetchQuestions = async (page = 1, filter = "all") => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/questions`, {
        params: { page, limit: questionsPerPage, filter },
      });

      const { questions, totalPages, currentPage } = response.data;

      setQuestions(questions);
      setFilteredQuestions(questions);
      setTotalPages(totalPages);
      setCurrentPage(currentPage);
      setLoading(false);
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
    fetchQuestions(1, filter);
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

      fetchQuestions(currentPage);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchQuestions(newPage, filter);
    }
  };

  useEffect(() => {
    fetchQuestions(currentPage, filter);
    fetchUser();
    fetchUsers();
  }, [currentPage, filter]);


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
          <>
            <QuestionsWrapper
              DeleteQuestion={DeleteQuestion}
              questions={filteredQuestions}
              user={user}
              users={users}
            />
            <div className={styles.pagination}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )
      )}
    </PageTemplate>
  );
};

export default Index;
