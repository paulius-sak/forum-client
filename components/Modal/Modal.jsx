import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";


const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <>
      <div className={styles.main}>
        <h4>{message}</h4>
        <div className={styles.buttons}>
          <Button className={styles.cancelBtn} title="Cancel" onClick={() => onCancel()} />
          <Button
          className={styles.confirmDeleteBtn}
            title="Delete"
            onClick={() => onConfirm()}
          />
        </div>
      </div>

      <div className={styles.background}></div>
    </>
  );
};

export default Modal;
