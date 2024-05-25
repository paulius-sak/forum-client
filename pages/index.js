import Image from "next/image";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import  cookies  from "js-cookie";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageTemplate from "../components/PageTemplate/PageTemplate";




const Index = () => {
  return (
  <PageTemplate>
    <main className={styles.wrapper}>
      <div className={styles.greetings}>
        <h1>Every Question is a Riddle, Let`s Solve Them Together!</h1>
        <h3>Become a part of Riddle and connect with like-minded individuals. Together, we can tackle even the toughest questions. </h3>
      </div>
    </main>
 
</PageTemplate>
  )
};

export default Index;
