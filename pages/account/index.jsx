import React, { useState, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "./account.module.css";
import axios from "axios";
import cookies from "js-cookie";
import Spinner from "@/components/Spinner/Spinner";

const Account = () => {

    const [user, setUser] = useState(null);

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
      <main className={styles.wrapper}>
        <h1 className={styles.title}>My account</h1>
        {user ? (
          <section className={styles.accountInfo}>
            <h3>name: {user.name}</h3>
            <h3>email: {user.email}</h3>
            <h3>avatar: 
              <img className={styles.avatar} src={user.avatarUrl} alt="" />
            </h3>
          </section>
        ) : (
          <Spinner></Spinner>
        )}
      </main>
    </PageTemplate>
  );
};

export default Account;
