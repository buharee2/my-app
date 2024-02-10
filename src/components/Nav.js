import logo from '../images/logo.svg';
import humburgerMenu from '../images/humburgerMenu.svg';
import cartIcon from '../images/cartIcon.svg';
import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    useEffect(() => {
       const handleResize = () => {
        if (window.innerWidth > 768) {
            setMenuOpen(false);
        }
       };

       const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target) && window.innerWidth <= 768) {
            setMenuOpen(false);
        }
       }
       
       window.addEventListener('resize', handleResize);
       document.addEventListener('click', handleClickOutside);

       return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('click', handleClickOutside);
       };
    }, [menuOpen]);

    return (
        <>
            <nav ref={navRef} className={`navbar ${menuOpen ? "Open" : ""}`}>
                    <img className='nav-icons menu' onClick={toggleMenu} src={humburgerMenu} alt='Menu' />
                    <a className='logo' href='/'><img  src={logo} alt='Logo' /></a>
                    <img className='nav-icons cart' src={cartIcon} alt='Cart' />
                <ul  className={`nav-links ${menuOpen ? "visible" : ""}`}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Menu'>Menu</NavLink></li>
                    <li><NavLink to='/Reservation'>Reservation</NavLink></li>
                    <li><NavLink to='/Order'>Order</NavLink></li>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;