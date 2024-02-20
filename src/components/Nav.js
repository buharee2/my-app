import logo from '../images/logo.svg';
import humburgerMenu from '../images/humburgerMenu.svg';
import cartIcon from '../images/cartIcon.svg';
import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
                    <Link className='logo' to='/'><img  src={logo} alt='Logo' /></Link>
                    <img className='nav-icons cart' src={cartIcon} alt='Cart' />
                <ul  className={`nav-links ${menuOpen ? "visible" : ""}`}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/booking'>Reservation</NavLink></li>
                    <li><NavLink to='/order'>Order</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;