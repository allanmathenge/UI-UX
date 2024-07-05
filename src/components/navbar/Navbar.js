import React from 'react';
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { IoLogoGithub, IoIosMenu } from "react-icons/io";
import { MdLaptopMac } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="hero">
        <div className="navbar">

            <div className="logo">
                <MdLaptopMac className="laptop-logo" />
            </div>

            <div className="pages">
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
                </ul>
            </div>
            <div className="nav-input">
                <input 
                    type="text" 
                    placeholder="Search..."
                    className="search-nav-input"
                />
                <CiSearch className="search-icon" />
            </div>
            <div className="search-socials">
                <div className="socials">
                    <BsTwitterX />
                    <FiFacebook />
                    <IoLogoGithub />
                </div>
            </div>
            <div className="menu-icon">
                <Menu />
            </div>
        </div>
    </div>
  )
}

export default Navbar