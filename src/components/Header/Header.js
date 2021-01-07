import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [nav, setNav] = useState(false);

    const onScroll = () => {
        if (window.scrollY >= 60) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', onScroll);

    return (
        <div className={nav ? 'header active' : 'header'} >
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
