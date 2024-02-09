import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  // React Hooks: useState
  const [clicked, setClick] = useState(false);
  // useState accepts an initial state and returns two values:
  // I)The current state.II) A function that updates the state.
  const handleClick = () => {
    setClick(!clicked);
  };
  //-------------------------------------------------------
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []); //     Passing an empty array as dependency makes useEffect() run only on the first render

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            JP&nbsp;Travels&nbsp;
            <i class="lni lni-pyramids"></i>
          </Link>
          {/*     Hamburger Menu/ Cross using Lineicons CSS CDN     */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "lni lni-cross-circle" : "lni lni-list"} />
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links-mobile">
                Sign Up
              </Link>
            </li>
          </ul>
          {/*      Logical AND: only works if both sides of && is true     */}
          {button && (
            <Button type="submit" buttonStyle="btn--outline">
              SIGN UP
            </Button>
          )}
          {/*     and button is only true when screen size if less than 960     */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
