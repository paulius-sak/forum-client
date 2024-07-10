import React, { useState, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "./account.module.css";
import axios from "axios";
import cookies from "js-cookie";
import Spinner from "@/components/Spinner/Spinner";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/router";
import UsersQuestions from "../../components/UsersQuestions/UsersQuestions";
import AccountUpdate from "../../components/AccountUpdate/AccountUpdate";

const Account = () => {
  const [user, setUser] = useState(null);
  const [isShowWarning, setShowWarning] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const truncateTitle = (title, length) => {
    return title.length > length ? `${title.substring(0, length)}...` : title;
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
      console.log("Error fetching user:", err);
    }
  };

  const deleteAccount = async (id) => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      await axios.delete(`${process.env.SERVER_URL}/user/${id}`, {
        headers,
      });
      router.push("/");
    } catch (err) {
      console.log("Error deleting account:", err);
    }
  };

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/user/questions`,
        {
          headers,
        }
      );
      const { questions } = response.data;

      setQuestions(Array.isArray(questions) ? questions : []);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching questions:", err);
      setLoading(false);
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

      router.reload();
    } catch (err) {
      console.log("err", err);
    }
  };

  const UpdateUser = async (updatedUser) => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.put(
        `${process.env.SERVER_URL}/user/${user.id}`,
        updatedUser,
        {
          headers,
        }
      );

      setUser(response.data.user);
      router.reload();
    } catch (err) {
      console.log("Error updating user:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchQuestions();
    }
  }, [user]);

  return (
    <PageTemplate>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Profile</h1>
        {user ? (
          <>
            <AccountUpdate UpdateUser={UpdateUser} user={user} />

            {isLoading ? (
              <Spinner />
            ) : (
              <UsersQuestions
                truncateTitle={truncateTitle}
                DeleteQuestion={DeleteQuestion}
                questions={questions}
                user={user}
              />
            )}

            <section className={styles.deleteAccountWrapper}>
              <Button
              type="neutral"
                onClick={() => setShowWarning(true)}
                className={styles.deleteAccBtn}
                title="Delete account"
              />
            </section>
          </>
        ) : (
          <Spinner />
        )}

        {isShowWarning && (
          <Modal
            message="Do you really want to delete your account?"
            onConfirm={() => {
              setShowWarning(false);
              deleteAccount(user.id);
            }}
            onCancel={() => setShowWarning(false)}
          />
        )}
      </main>
    </PageTemplate>
  );
};

export default Account;
