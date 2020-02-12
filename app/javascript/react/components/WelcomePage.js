import React from 'react'
import Footer from './Footer'

const WelcomePage = (props) => {

  return(
    <div>
      <h1 className = "welcome-title">Welcome to Nickel</h1>
      <h4 className = "welcome-title">Please sign in or sign up before using this website</h4>
      <Footer />
    </div>
  )
}

export default WelcomePage
