import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1><Link to="/">Daniel Kim</Link></h1>

            <div className="header__right">
                <ul className="header__right">
                    <li>
                        <Link className="header__item active" to="/">WORK</Link>
                    </li>
                    <li>
                        <Link className="header__item" to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link className="header__item" to="/contact">CONTACT</Link>
                    </li>
                </ul>
                
            </div>

            <button className="header__toggle">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    )
}

export default Header;
