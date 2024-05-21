import React, { useState } from "react";
import styles from "./loginSigninForm.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";

const LoginSigninForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
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
        router.push("/");
      }
      setLoading(false);

      console.log("response", response);
    } catch (err) {
      setBadData(true);
      console.log("err", err);
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>LOGIN</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
      <label htmlFor="">password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="6+ char long, at least 1 num"
      />
      </div>
      {/* <Button isLoading={isLoading} onClick={onLogin} title="Login" /> */}
      <button onClick={onLogin}>login</button>
      <p>
        Don`t have an account?{" "}
        <button className={styles.signInLink}>Sign In</button>
      </p>

      {/* cia pakeisti i alert */}
      {isError && console.log("Please fill all the inputs")}

      {isBadData && console.log("Your provided data is bad")}
    </div>
  );
};

export default LoginSigninForm;
