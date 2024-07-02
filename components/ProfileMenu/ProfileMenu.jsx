import React from 'react'
import styles from "./ProfileMenu.module.css"
import Link from 'next/link'
import logoutSvg from "../../assets/icons/logout.svg";

const ProfileMenu = ({logout, user}) => {
  return (
    <section className={styles.wrapper}>
        <img className={styles.avatar} src={user.avatarUrl} alt="" />
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
        <h4>Joined: {user.date.split("T")[0]}</h4>

        <div className={styles.line}></div>

        <Link href="/account">👤 Profile</Link>
        <div className={`${styles.logout} ${styles.tooltipContainer}`}>
                <button onClick={logout}>
                  <img src={logoutSvg.src} alt="logout" />
                  Logout
                </button>
                
              </div>
    </section>
  )
}

export default ProfileMenu