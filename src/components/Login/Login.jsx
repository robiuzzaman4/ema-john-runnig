import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleLogin} className='form'>
                <h2 className='form-title'> Login </h2>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter Your Email'
                        required />
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type={`${showPassword ? 'text' : 'password'}`}
                        name='password'
                        placeholder='Enter Your Password'
                        required />
                    <div onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <small >Hide Password</small>
                        : <small >Show Password</small>
                    }
                    </div>
                </label>
                <button className='btn-login'>
                    Login
                </button>
                <p className='form-change-link'>New to Ema-john? <Link to='/register'><span className='span'>Create New Account</span></Link> </p>
            </form>
        </div>
    );
};

export default Login;