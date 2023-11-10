import React, { useState } from 'react';
import './Navbar.css';
import cart from './cart.jpg';

const Navbar = () => {
    const [menu, setMenu] = useState('');

    return (
        <div className="main"> {/* Use "className" instead of "class" */}
            <div id="header">
                <div className="nav"> {/* Use "className" instead of "class" */}
                    <ul>
                        <li>
                            <a href='./dhanya.jsx'>धान्य</a> {/* Use "a" for links */}
                        </li>
                        <li>
                            <a href='/khat.jsx'>सेंद्रिय खते</a>
                        </li>
                        <li>
                            <a href='/'>खाद्य </a>
                        </li>
                        <li>
                            <a href='/Cart.jsx'>
                                <i className='fa fa-shopping-cart'></i> {/* Use "className" */}
                                <img src={cart} alt="50%" />
                                <div className="nav-cart-count">0</div>
                            </a>
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
