import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";


const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);


  const onLogin = async () => {
    
    const loginBody = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users/login`,
        loginBody
      );

      if (response.status === 200) {
        setBadData(false);
        cookies.set("jwt_token", response.data.jwt);
        router.back();
      }
      

      console.log("response", response);
    } catch (err) {
      setBadData(true);
      console.log("err", err);
      
    }
  };

  return (
    <section className={styles.loginWrapper}>
      <h1>LOGIN</h1>
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
      <button onClick={onLogin}>login</button>
      

      {isError && alert("Please fill all the inputs")}

      {isBadData && alert("Your provided data is bad")}
    </section>
  );
};

export default LoginForm;
