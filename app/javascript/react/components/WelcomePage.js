import img from '../../../assets/images/CreditCard.png'
import React from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom"

const WelcomePage = (props) => {

  return(
    <div>
      <h1 className = "welcome-title">Welcome to Nickel</h1>
      <a href='/users/sign_in'>
        <img className="welcome-image" src={img} />
      </a>
      <h3 className = "welcome-title">Ever get tired of forgetting your credit card information?</h3>
      <h4 className = "welcome-title">With this website you can add all of your credit card information into a tidy virtual wallet</h4>
      <h4 className = "welcome-title">Please sign in or sign up before using this website</h4>
      <Footer />
    </div>
  )
}

export default WelcomePage
