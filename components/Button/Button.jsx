import React from "react";
import styles from "./Button.module.css";
import Spinner from "../Spinner/Spinner";


const Button = ({ onClick, isLoading, title, className, children }) => {
  return (
    <button className={`${className} ${styles.button} `} onClick={onClick}>
      {isLoading ? <Spinner /> : children ? children : <>{title}</>}
    </button>
  );
};

export default Button;