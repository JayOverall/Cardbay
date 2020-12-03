import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Navbar.css";
import logo from "../Assets/img/CardBayLogo.png";
// import Login from "./components.Login.js";
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">

                <ul className="left">
                <li>
                <Link to="/" className="navbar-brand">
                        <img id="logo" src={logo} alt="logo"/>  </Link>
                </li>
                  </ul>


                    <Link to="/" className="brand-logo">CARDBAY </Link>

                    <ul className="right">
                        <li><Link to="/login">Signup/Login</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
                        </li>

                    </ul>
                </div>
            </nav>


    )
}

export default Navbar;
