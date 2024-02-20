import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Footer() {
    return (
        <footer>
            <section className='footer'>
                <img src={logo} alt='Logo'/>
                <ul className='footer-links'>
                    <label>Domant Navigation</label>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/booking'>Reservation</Link></li>
                    <li><Link to='/order'>Order</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                <ul className='footer-links'>
                    <label>Contact</label>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
                <ul className='footer-links'>
                    <label>Social Media Links</label>
                    <li><Link to='/'>Facebook</Link></li>
                    <li><Link to='/'>Twitter</Link></li>
                    <li><Link to='/'>Instagram</Link></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;