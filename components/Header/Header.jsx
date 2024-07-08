import React, { useState, useEffect } from "react";
import styles from "../Header/Header.module.css";
import loginSvg from "../../assets/icons/logIn.svg";
import Link from "next/link";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import aboutSvg from "../../assets/icons/about.svg";
import contactsSvg from "../../assets/icons/contacts.svg";
import questionsSvg from "../../assets/icons/questions.svg";
import burgerSvg from "../../assets/icons/burger.svg";
import closeSvg from "../../assets/icons/close.svg";
import downSvg from "../../assets/icons/down.svg";
import upSvg from "../../assets/icons/up.svg";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import HomeSvg from "../../assets/icons/home.svg";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isDisplayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isProfileMenu, setProfileMenu] = useState(false);

  const onBurgerBtnClick = () => {
    setDisplayMobileMenu(!isDisplayMobileMenu);
  };

  const onAccountClick = () => {
    setProfileMenu(!isProfileMenu);
  };

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

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <header className={styles.main}>
      <div className={styles.headerItems}>
        <button onClick={onBurgerBtnClick} className={styles.burgerBtn}>
          <img src={isDisplayMobileMenu ? closeSvg.src : burgerSvg.src} />
        </button>

        {isDisplayMobileMenu && (
          <div className={styles.mobileMenu}>
            <nav>
              <ul className={styles.mobileNavbar}>
                <li>
                  <Link
                    href="/"
                    className={activeLink === "/" ? styles.activeLink : ""}
                  >
                    <img src={HomeSvg.src} alt="home" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/questions"
                    className={
                      activeLink === "/questions" ? styles.activeLink : ""
                    }
                  >
                    <img src={questionsSvg.src} alt="questions" /> Questions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={activeLink === "/about" ? styles.activeLink : ""}
                  >
                    <img src={aboutSvg.src} alt="about us" /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className={
                      activeLink === "/contacts" ? styles.activeLink : ""
                    }
                  >
                    <img src={contactsSvg.src} alt="contacts" /> Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <h3>Riddle</h3>
          </Link>
        </div>

        <ul className={styles.navbar}>
          <li>
            <Link
              href="/questions"
              className={activeLink === "/questions" ? styles.activeLink : ""}
            >
              <img src={questionsSvg.src} alt="questions" /> Questions
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={activeLink === "/about" ? styles.activeLink : ""}
            >
              <img src={aboutSvg.src} alt="about us" /> About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className={activeLink === "/contacts" ? styles.activeLink : ""}
            >
              <img src={contactsSvg.src} alt="contacts" /> Contact Us
            </Link>
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
              <button onClick={onAccountClick} className={styles.hiUserWrapper}>
                <span className={styles.hiUser}>
                  {user.name}
                  <img src={isProfileMenu ? upSvg.src : downSvg.src} alt="" />
                </span>
              </button>

              {isProfileMenu && (
                <ProfileMenu logout={logout} user={user}></ProfileMenu>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
