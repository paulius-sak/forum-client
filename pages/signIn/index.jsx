import React, {useState} from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import SignInForm from '../../components/signInForm/signInForm'
import LoginForm from '../../components/loginForm/loginForm'

const Index = () => {
    const [showSignInForm, setShowSignInForm] = useState(true);

    const toggleForms = () => {
        setShowSignInForm(!showSignInForm);
      };
  return (
    <PageTemplate>
        {showSignInForm ? <SignInForm /> : <LoginForm />}
      <button onClick={toggleForms}>Toggle Forms</button>
    </PageTemplate>
  )
}

export default Index