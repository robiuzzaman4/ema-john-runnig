import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='header'>
            <nav className='nav'>
                <img src={logo} alt="" />
                <div className='navlist'>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                {
                    user &&
                    <div className='userState'>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut}>Log Out</button>
                    </div>
                }
            </nav>
        </div>
    );
};

export default Header;