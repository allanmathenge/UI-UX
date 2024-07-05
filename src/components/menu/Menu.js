import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { IoLogoGithub, IoIosMenu } from "react-icons/io";

const Menu = () => {
    const [ activeClass, setActiveClass] = useState("");

    const handleMenuClick = () => {
        setActiveClass(activeClass === ""? "active" : "");
    }

    const closeMenu = () => {
        setActiveClass("");
    }

  return (
    <nav>
        <div
            onClick={handleMenuClick}
            className={activeClass ? "ham-menu active" : "ham-menu"}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div onClick={closeMenu} className={activeClass ? "off-screen-menu active" : "off-screen-menu"}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <div className="ham-menu-socials">
                    <div className="ham-menu-social-icons">
                    <BsTwitterX />
                    <FiFacebook />
                    <IoLogoGithub />
                    </div>
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Menu