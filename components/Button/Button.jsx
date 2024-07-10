import React from "react";
import styles from "./Button.module.css";
import Spinner from "../Spinner/Spinner";

const Button = ({ onClick, isLoading, title, className, children, type }) => {
  const getButtonClass = () => {
    switch (type) {
      case "confirm":
        return styles.confirmButton;
      case "delete":
        return styles.deleteButton;
      case "neutral":
        return styles.neutralButton;
      default:
        return styles.button;
    }
  };

  return (
    <button className={`${className} ${getButtonClass()} ${styles.button}`} onClick={onClick}>
      {isLoading ? <Spinner /> : children ? children : <>{title}</>}
    </button>
  );
};

export default Button;