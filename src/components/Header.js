import React from 'react';
import logo from '../images/logo.svg';
import humburgerMenu from '../images/humburgerMenu.svg';
import cartIcon from '../images/cartIcon.svg';
import Nav from './Nav';

function Header() {
    return (
        <div id='header'>
            <div id="headerIcons">
                <img id='bar' src={humburgerMenu} alt='Nav Bar' />
                <img id='logo' src={logo} alt='Logo' />
                <img id='cart' src={cartIcon} alt='Cart' />
            </div>
            <Nav/>
        </div>
    )
}

export default Header;