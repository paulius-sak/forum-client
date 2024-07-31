import React from 'react'
import styles from "./MainStatistics.module.css"

const MainStatistics = () => {
  return (
    <section className={styles.wrapper}>
        <h2>Main Info</h2>
        <h4>Total users</h4>
        <h4>Total questions</h4>
        <h4>Total answers</h4>
    </section>
  )
}

export default MainStatistics