import styles from "@/styles/Home.module.css";
import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Button from "../components/Button/Button";
import Link from "next/link";

const Index = () => {
  return (
    <PageTemplate>
      <main className={styles.wrapper}>
        <div className={styles.greetings}>
          <h1>Every Question is a Riddle, Let`s Solve Them Together!</h1>
          <h3>
            Become a part of Riddle and connect with like-minded individuals.
            Together, we can tackle even the toughest questions.
          </h3>
        </div>
        <section className={styles.ctaButtons}>
          <Link href="/signInLogin">
            <Button title="Get Started" className={styles.ctaButton} />
          </Link>
          <Link href="/about">
            <Button title="Learn More" className={styles.ctaButton} />
          </Link>
        </section>
        <section className={styles.features}>
          <div className={styles.feature}>
            <p>Engage with a vibrant community of problem solvers.</p>
          </div>
          <div className={styles.feature}>
            <p>Get expert help and share your own knowledge.</p>
          </div>
          <div className={styles.feature}>
            <p>Collaborate and learn through discussions.</p>
          </div>
        </section>
      </main>
    </PageTemplate>
  );
};

export default Index;
