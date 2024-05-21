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
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Questions</a>
          </li>
        </ul>

        <div className={styles.login}>
          <div className={`${styles.account} ${styles.tooltipContainer}`}>
            <a href="/login">
              <img
                className={styles.accLogo}
                src={accountSvg.src}
                alt="Login"
              />
            </a>
            <span className={styles.tooltipLogin}>Login</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
