import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className='nav'>
                <img src={logo} alt=""/>
                <div className='navlist'>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;