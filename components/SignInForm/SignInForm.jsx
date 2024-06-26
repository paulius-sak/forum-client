import React, { useState } from "react";
import styles from "./SignInForm.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import Button from "../Button/Button";
import EyeOnSvg from "../../assets/icons/eyeOn.svg";
import EyeOffSvg from "../../assets/icons/eyeOff.svg";

const SignInForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState();
  const [isError, setError] = useState(false);
  const [isBadData, setBadData] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const onSignIn = async () => {
    const signInBody = {
      name: name,
      email: email,
      password: password,
      avatarUrl: avatarUrl,
    };

    if (!name || !email || !password) {
      setError(true);
      setSuccess(false)
        setBadData(false);
        setEmailExists(false)
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users`,
        signInBody
      );

      if (response.status === 200) {
        setSuccess(true)
        setBadData(false);
        setEmailExists(false)
        setError(false)
      }

      console.log("response", response);
    } catch (err) {
      setBadData(true);
      if (err.response.status === 500) {
        setEmailExists(true)
        setSuccess(false)
        setBadData(false)
        setError(false)
      }
      console.log("err", err);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onLogin();
    }
  };

  return (
    <section className={styles.signInWrapper}>
      <h1>Sign-In</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="">name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="">*password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          required
        />
        <img
          className={styles.eyeIcon}
          src={showPassword ? EyeOnSvg.src : EyeOffSvg.src}
          alt="show/hide password"
          onClick={() => setShowPassword(!showPassword)}
        />
        <span className={styles.pswValid}>
          *at least 6 characters and 1 number
        </span>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="">avatar url(optional)</label>
        <input
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button className={styles.signInBtn} title="Sign-In" onClick={onSignIn} />

      {isError && (
        <small className={styles.error}>* please fill all inputs</small>
      )}

      {isBadData && (
        <small className={styles.error}>* your provided data is bad</small>
      )}
      {emailExists && (
        <small className={styles.error}>* user already exists</small>
      )}
      {success && (
        <small className={styles.success}>* user created successfully. You can login now.</small>
      )}
    </section>
  );
};

export default SignInForm;
