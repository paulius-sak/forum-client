import React from 'react'
import styles from "./login.module.css"
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import LoginSigninForm from '../../components/loginSigninForm/loginSigninForm'

const Index = () => {
  return (
    <PageTemplate>
        <LoginSigninForm/>
    </PageTemplate>
  )
}

export default Index