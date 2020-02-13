import React from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom"

const WelcomePage = (props) => {

  return(
    <div>
      <h1 className = "welcome-title">Welcome to Nickel</h1>
      <Link to='/users/sign_in'>
        <img className ="welcome-image" src = "http://clipart-library.com/images_k/credit-card-transparent-background/credit-card-transparent-background-16.png" />
      </Link>
      <h3 className = "welcome-title">Ever get tired of forgetting your credit card information?</h3>
      <h4 className = "welcome-title">With this website you can add all of your credit card information into a tidy virtual wallet</h4>
      <h4 className = "welcome-title">Please sign in or sign up before using this website</h4>
      <Footer />
    </div>
  )
}

export default WelcomePage