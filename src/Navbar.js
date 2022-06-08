import React, {useState} from 'react';
import { FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";


import  './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(

            <nav className="Navbar">
                <span className="nav-logo">euroEVENTS</span>
                <div className={'nav-items ${isOpen && "open"}'}>
                <a href="/#">Home</a>
                <a href="/#/login">Sign in</a>
                <a href="/#">Sign up</a>
                <a href="/#/acc">Accommodation</a>
                <a href="/#/contact">Contact</a>
                </div>
                <div className={'nav-toggle ${isOpen && "open"}'} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                </div>
            </nav>

    );
}

export default Navbar;