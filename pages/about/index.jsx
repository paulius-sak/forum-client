import React from "react";
import styles from "./about.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Link from "next/link";

const index = () => {
  return (
    <PageTemplate>
      <main className={styles.wrapper}>
        <h1>About Us</h1>
        <p>
          Welcome to Riddle, where every question is a challenge and every
          answer is a discovery. Our mission is to create a dynamic community
          where curious minds come together to explore, learn, and solve
          problems collaboratively.
        </p>
        <h2>Our Story</h2>
        <p>
          Riddle was founded on the belief that every question has an answer,
          and sometimes, the journey to finding that answer is just as important
          as the solution itself. We started as a small group of enthusiasts who
          loved solving puzzles, sharing knowledge, and helping each other out.
          Today, we are a growing community of thinkers, learners, and
          problem-solvers from around the world.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to connect people through questions and
          answers. Whether you`re stuck on a tricky problem, looking for expert
          advice, or just eager to learn something new, Riddle is the place to
          be. We believe in the power of collective intelligence and the magic
          that happens when people come together to share their knowledge and
          insights.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>A Vibrant Community:</strong> Join a diverse group of
            individuals who are passionate about learning and solving problems.
          </li>
          <li>
            <strong>Expert Help:</strong> Get answers from experts and
            experienced members who are eager to help.
          </li>
          <li>
            <strong>Knowledge Sharing:</strong> Share your knowledge and help
            others while expanding your own understanding.
          </li>
          <li>
            <strong>Collaborative Learning:</strong> Engage in discussions, ask
            questions, and work together to find solutions.
          </li>
        </ul>
        <h2>Our Values</h2>
        <p>
          At Riddle, we value curiosity, collaboration, and community. We
          believe that every question deserves attention, every answer should be
          respectful and thoughtful, and everyone’s voice should be heard. We
          are committed to maintaining a positive, inclusive, and supportive
          environment for all our members.
        </p>
        <h2>Join Us</h2>
        <p>
          We invite you to be a part of our community. Whether you`re here to
          ask questions, provide answers, or simply learn something new, Riddle
          is the perfect place to ignite your curiosity and expand your
          knowledge. Together, we can solve any riddle!
        </p>
        <p>
          Thank you for visiting Riddle. We look forward to your contributions
          and are excited to see what we can discover together.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out
          to us through our <Link href="/contacts">Contact Page</Link>.
        </p>
      </main>
    </PageTemplate>
  );
};

export default index;
