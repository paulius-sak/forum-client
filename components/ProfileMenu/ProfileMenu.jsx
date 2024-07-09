import React, { useRef } from "react";
import styles from "./ProfileMenu.module.css";
import Link from "next/link";
import logoutSvg from "../../assets/icons/logout.svg";
import accountSmallSvg from "../../assets/icons/accountSmall.svg";
import useOutsideClick from "../../closeMenuFunc/closeMenuFunc.js";

const ProfileMenu = ({ logout, user, closeMenu }) => {
  const menuRef = useRef(null);

  useOutsideClick(menuRef, closeMenu);

  return (
    <section ref={menuRef} className={styles.wrapper}>
      <img className={styles.avatar} src={user.avatarUrl} alt="" />
      <section className={styles.accountInfo}>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
        <small>Joined: {user.date.split("T")[0]}</small>
      </section>
      <div className={styles.line}></div>

      <section className={styles.menu}>
        <Link className={styles.profile} href="/account">
          <img src={accountSmallSvg.src} alt="profile" /> Profile
        </Link>

        <button className={styles.logoutBtn} onClick={logout}>
          <img src={logoutSvg.src} alt="logout" />
          <div>Logout</div>
        </button>
      </section>
    </section>
  );
};

export default ProfileMenu;
