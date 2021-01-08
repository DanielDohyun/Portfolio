import { ControlCameraOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    // const onScroll = () => {
    //     if (window.scrollY >= 60) {
    //         setNav(true);
    //     } else {
    //         setNav(false);
    //     }
    // }

    const handleActive = id => {
        setActive(id);
    }

    const toggleOpen = () => {
        setToggle(!toggle);
    }

    // window.addEventListener('scroll', onScroll);

    return (
        <div className={toggle ? 'header-toggle header' : 'header'} >
            <h1><Link to="/">DANIEL KIM</Link></h1>

            <div className={toggle ? 'header__right open' : 'header__right'}>
                <ul className={toggle ? 'header__right open' : 'header__right'}>
                    <li>
                        <Link id="1" className={`header__item ${active == 1 ? 'active-color' : ''}`} onClick={(id) => {
                            toggleOpen();
                            handleActive(1);
                        }} to="/">WORK</Link>
                    </li>
                    <li>
                        <Link id="2" className={`header__item ${active == 2 ? 'active-color' : ''}`} onClick={(id) => {
                            toggleOpen();
                            handleActive(2);
                        }} to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link id="3" className={`header__item ${active == 3 ? 'active-color' : ''}`} onClick={(id) => {
                            toggleOpen();
                            handleActive(3);
                        }} to="/contact">CONTACT</Link>
                    </li>
                </ul>
                
            </div>

            <button className="header__toggle" onClick={toggleOpen}>
                <i class="fas fa-bars"></i>
            </button>
        </div>
    )
}

export default Header;
