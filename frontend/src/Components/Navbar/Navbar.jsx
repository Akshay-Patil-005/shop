// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cart from './cart.jpg';

const Navbar = () => {

    return (
        <div className="main"> {/* Use "className" instead of "class" */}
            <div id="header">
                <div className="nav"> {/* Use "className" instead of "class" */}
                    <ul>
                        <li>
                            <Link to='./Dhanya'>धान्य</Link> {/* Use "a" for links */}
                        </li>
                        <li>
                            <Link to='/Khat'>सेंद्रिय खते</Link>
                        </li>
                        <li>
                            <Link to='/'>खाद्य </Link>
                        </li>
                        <li>
                            <Link to='/Cart'>
                                <i className='fa fa-shopping-cart'></i> {/* Use "className" */}
                                <img src={cart} alt="50%" />
                                <div className="nav-cart-count">0</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="searchSection"> {/* Use "className" instead of "class" */}
                <h1>
                    <span>पशु अहार</span> शोधा
                </h1>
                <div>
                    
                    <input type="search" placeholder="पशुखाद्य शोधा" id="search" />
                    <a href="index.html" id="other">
                        <i className="fa-solid fa-arrows-rotate"></i> {/* Use "className" */}
                    </a>
                </div>
                <button id="searchBtn">शोधा </button>
            </div>
        </div>
    );
};

export default Navbar;
