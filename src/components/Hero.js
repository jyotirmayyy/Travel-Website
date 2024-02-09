import React from 'react'
import { Button } from './Button'
import './Hero.css'
import '../App.css'

function Hero() {
    return (
      <>
        <div className="hero-container">
          <img
            src="https://www.grasshopperyatra.com/assets/images/main/1689854332979.jpg"
            alt=""
          />
          <h1>JABALPUR AWAITS</h1>
          <p>What are you waiting for</p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GET STARTED
            </Button>
          </div>
          <div className="hero-btns">
            <Button className="btns" buttonSize="btn--large">
              BOOK NOW
            </Button>
          </div>
        </div>
      </>
    );
}

export default Hero