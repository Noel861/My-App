import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="page_width">
            <header>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="nav_links">
                    <ul>
                        <li>
                            <a href></a>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href></a>
                            <Link to="./AboutUs">About Us</Link>
                        </li>
                        <li>
                            <a href></a>
                            <Link to="/services">Contact Us</Link>
                        </li>
                        <li className="btn_sign">
                            <a href></a>
                            <Link to="/SignUp">Sign Up</Link>
                        </li>
                    </ul>

                </div>
            </header>
        </div>
    )
}

export default Header