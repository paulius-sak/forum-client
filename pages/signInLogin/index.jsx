import React, { useState } from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import SignInForm from "../../components/SignInForm/SignInForm";
import LoginForm from "../../components/LoginForm/LoginForm";
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
        {showSignInForm ? (
            <>
              Already have an account? <span className={styles.blueText}>Login</span> here
            </>
          ) : (
            <>
              Don`t have an account? <span className={styles.blueText}>Sign-in</span> here
            </>
          )}
        </button>
      </div>
      
    </PageTemplate>
  );
};

export default Index;
