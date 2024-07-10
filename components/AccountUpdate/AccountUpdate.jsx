import React from "react";
import styles from "./AccountUpdate.module.css";
import Button from "../Button/Button";

const AccountUpdate = ({ user }) => {
  return (
    <section className={styles.accountInfo}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" defaultValue={user.name} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" defaultValue={user.email} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="avatarUrl">Avatar URL:</label>
        <input
          type="text"
          id="avatarUrl"
          name="avatarUrl"
          defaultValue={user.avatarUrl}
        />
      </div>
      <section className={styles.avatarImgWrapper}>
        <img className={styles.avatar} src={user.avatarUrl} alt="" />
      </section>

      <section className={styles.saveBtnWrapper}>
        <Button className={styles.saveBtn} title="Save Changes" />
      </section>
    </section>
  );
};

export default AccountUpdate;
