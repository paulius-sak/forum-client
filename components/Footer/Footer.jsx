import React from 'react'
import styles from "../Footer/Footer.module.css"
import Image from 'next/image'
import facebookSvg from "../../assets/icons/facebook.svg"
import githubSvg from "../../assets/icons/github.svg"
import instaSvg from "../../assets/icons/insta.svg"

const Footer = () => {
  return (
    <footer className={styles.main}>
        <div className={styles.footerList}>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contacts</a>
            <a href="#">Newsletter</a>
        </div>
        <div className={styles.line}></div>
        <div className={styles.icons}>
            <a href="#"><Image src={facebookSvg.src} alt="facebook link" width={32} height={32}/></a>
            <a href="#"><Image src={githubSvg.src} alt="github link" width={32} height={32}/></a>
            <a href="#"><Image src={instaSvg.src} alt="instagram link" width={32} height={32}/></a>
        </div>
        
        <div className={styles.rights}>© Riddle 2024</div>
    </footer>
  )
}

export default Footer