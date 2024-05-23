import React from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/logo/Riddle.png";
import accountSvg from "../../assets/icons/account.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.headerItems}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <img src={logo.src} alt="" />
          </Link>
        </div>

        <ul className={styles.navbar}>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/questions">Questions</Link>
          </li>
        </ul>

        <div className={styles.login}>
          <div className={`${styles.account} ${styles.tooltipContainer}`}>
            <Link href="/signInLogin">
              <img
                className={styles.accLogo}
                src={accountSvg.src}
                alt="Login"
              />
            </Link>
            <span className={styles.tooltipLogin}>Login</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
