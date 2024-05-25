import React, { useState, useEffect } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/logo/Riddle.png";
import loginSvg from "../../assets/icons/logIn.svg";
import logoutSvg from "../../assets/icons/logout.svg";
import Link from "next/link";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();

  const fetchLoggedUser = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/user/me`, {
        headers,
      });
      setUser(response.data.user);
      setIsLogged(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchLoggedUser();
  }, []);

  const logout = () => {
    cookies.remove("jwt_token");
    setIsLogged(false);
    setUser(null);
    router.push("/");
  };

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
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contacts">Contact Us</Link>
          </li>
          <li>
            <Link href="/questions">Questions</Link>
          </li>
        </ul>

        <div className={styles.login}>
          {!isLogged ? (
            <div className={`${styles.account} ${styles.tooltipContainer}`}>
              <Link href="/signInLogin">
                <img
                  className={styles.loginLogo}
                  src={loginSvg.src}
                  alt="Login"
                />
              </Link>
              <span className={styles.tooltipLogin}>Login</span>
            </div>
          ) : (
            <div className={styles.userWrapper}>
              <span className={styles.hiUser}>Hi {user.name}</span>
              <div className={`${styles.logout} ${styles.tooltipContainer}`}>
                <button onClick={logout}>
                  <img src={logoutSvg.src} alt="logout" />
                </button>
                <span className={styles.tooltipLogout}>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
