import React from "react";
import { useState } from "react";
import Logo from "../assets/img/logo.webp";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={Logo}
    />
  </a>
);

function loggedUser() {
  // API calls for user authentication
  return false;
}

const HeadingComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);

return (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Cart</li>
        {(loggedIn)? (<button onClick={()=>{setLoggedIn(false)}}>Logout</button>):(<button onClick={()=>{setLoggedIn(true)}}>Login</button>)}
      </ul>
    </div>
  </div>
)};

export default HeadingComponent;
