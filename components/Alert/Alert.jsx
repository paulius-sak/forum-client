import React from 'react'
import styles from "./Alert.module.css"
import Link from 'next/link'

const Alert = ({text}) => {
  return (
    <section className={styles.wrapper}>
       <Link href="/signInLogin"> <h4>{text}</h4></Link>
    </section>
  )
}

export default Alert