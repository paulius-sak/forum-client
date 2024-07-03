import React, { useState, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "./account.module.css";
import axios from "axios";
import cookies from "js-cookie";
import Spinner from "@/components/Spinner/Spinner";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/router";

const Account = () => {
  const [user, setUser] = useState(null);
  const [isShowWarning, setShowWarning] = useState(false)

  const router = useRouter()


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

  const deleteAccount = async (id) => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.delete(`${process.env.SERVER_URL}/user/${id}`, {
        headers,
        
      });
      router.push("/")
    } catch (err) {
      console.log("err", err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <PageTemplate>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Profile</h1>
        {user ? (
          <>
            <section className={styles.accountInfo}>
              <h3>name: {user.name}</h3>
              <h3>email: {user.email}</h3>
              <h3>
                avatar:
                <img className={styles.avatar} src={user.avatarUrl} alt="" />
              </h3>
            </section>
            <section className={styles.accountInfo}>
              <Button onClick={() => {setShowWarning(true)}} className={styles.deleteAccBtn} title="delete account"></Button>
              
            </section>
          </>
        ) : (
          <Spinner></Spinner>
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
