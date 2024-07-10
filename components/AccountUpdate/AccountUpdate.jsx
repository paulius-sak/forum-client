import React, {useState} from "react";
import styles from "./AccountUpdate.module.css";
import Button from "../Button/Button";

const AccountUpdate = ({ user, UpdateUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

  const handleUpdateUser = () => {
    UpdateUser({ name, email, avatarUrl });
  };

  return (
    <section className={styles.accountInfo}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="avatarUrl">Avatar URL:</label>
        <input
          type="text"
          id="avatarUrl"
          name="avatarUrl"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </div>
      <section className={styles.avatarImgWrapper}>
        <img className={styles.avatar} src={avatarUrl} alt="" />
      </section>
      <section className={styles.saveBtnWrapper}>
        <Button
        type="confirm"
          onClick={handleUpdateUser}
          className={styles.saveBtn}
          title="Save Changes"
        />
      </section>
    </section>
  );
};

export default AccountUpdate;
