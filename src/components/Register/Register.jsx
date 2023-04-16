import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [err, setErr] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        setErr('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setErr("Your password didn't match");
            return;
        } else if (password.length < 6) {
            setErr("password should be 6 characters");
            return;
        }

        createUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch((error) => {
            console.log(error.message);
            setErr(error.message)
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleRegister} className='form'>
                <h2 className='form-title'> Register </h2>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='email'
                        placeholder='Email'
                        required />
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        required />
                </label>
                <label>
                    <span>Confirm Password:</span>
                    <input
                        type="password"
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        required />
                </label>
                <button className='btn-login'>
                    Register
                </button>
                <p className='form-change-link'>Already have an account? <Link to='/login'><span className='span'>Login Now</span></Link> </p>
                {
                    err && <p className='err'>{err}</p>
                }
            </form>
        </div>
    );
};

export default Register;