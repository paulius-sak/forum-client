import React from "react";
import styles from "./Button.module.css";
import Spinner from "../Spinner/Spinner";


const Button = ({ onClick, isLoading, title, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {isLoading? <Spinner/> : <>{title}</>}
    </button>
  );
};

export default Button;