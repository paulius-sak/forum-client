import React, { useState } from "react";
import styles from "./signInForm.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const SignInForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);

  const onSignIn = async () => {
    const signInBody = {
      name: name,
      email: email,
      password: password,
    };

    if (!name || !email || !password) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users`,
        signInBody
      );

      if (response.status === 200) {
        setBadData(false);
        router.push("/login");
      }

      console.log("response", response);
    } catch (err) {
      setBadData(true);
      console.log("err", err);
    }
  };

  return (
    <section className={styles.loginWrapper}>
      <h1>Sign-In</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="">name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="">password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={onSignIn}>Sign-In</button>
      

      {/* cia pakeisti i alert */}
      {isError && console.log("Please fill all the inputs")}

      {isBadData && console.log("Your provided data is bad")}
    </section>
  );
};

export default SignInForm;
