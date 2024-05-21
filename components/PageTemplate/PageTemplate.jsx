import React from 'react'
import styles from "../PageTemplate/PageTemplate.module.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const PageTemplate = ({children}) => {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.content}>{children}</div>
        <Footer/>
    </div>
  )
}

export default PageTemplate