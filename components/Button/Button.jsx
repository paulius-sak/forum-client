import React from "react";
import styles from "./Button.module.css";


const Button = ({ onClick, title, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;