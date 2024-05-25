import React, { useState } from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import SignInForm from "../../components/signInForm/signInForm";
import LoginForm from "../../components/loginForm/loginForm";
import styles from "./signInLogin.module.css";

const Index = () => {
  const [showSignInForm, setShowSignInForm] = useState(false);

  const toggleForms = () => {
    setShowSignInForm(!showSignInForm);
  };
  return (
    <PageTemplate>
      {showSignInForm ? <SignInForm /> : <LoginForm />}

      <div className={styles.btnWrapper}>
        <button className={styles.toggleBtn} onClick={toggleForms}>
          {showSignInForm
            ? "Already have an account? Login here"
            : "Don`t have an account? Sign-in here"}
        </button>
      </div>
      
    </PageTemplate>
  );
};

export default Index;
