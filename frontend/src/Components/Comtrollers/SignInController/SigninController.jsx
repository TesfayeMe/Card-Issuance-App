import React, { useState } from 'react';
import { signinService } from '../../Services/signinService';
import './signin.css';
const SignInController = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleSignIn = async (e) => {
        e.preventDefault();
        if (userEmail === '' || userPassword === '') {
            alert('Please fill in all fields');
            return;
        }
        else {
            const userData = {
                email: userEmail,
                password: userPassword
            }
            const sinninResponse = await signinService(userData);
            const responseData = await sinninResponse.json();
            if (responseData.status === true) {
                localStorage.setItem('token', responseData.token);
                document.getElementById('error-message').textContent = '';
                window.location.href = '/';
                console.log('Sign-in successful:', responseData.message);
                console.log('Received token:', responseData.token);
            }
            else {
                document.getElementById('error-message').textContent = responseData.message;
                document.getElementById('error-message').style.display = 'block';
                console.error('Sign-in failed:', sinninResponse.message);
            }

        }

    };

    return (
        <div className="signin-container">
            <div className="signin-form-container">
                <div className="signin-header">
                    <h1>Welcome Back</h1>
                    <p>Please enter your credentials to sign in.</p>
                </div>
                <form className="signin-form" onSubmit={(e) => { handleSignIn(e) }}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={(e) => setUserPassword(e.target.value)} />
                    </div>
                    <div className="error-message-container">
                        <span id="error-message">Invalid email or password.</span>
                    </div>
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
                <p className="create-account-link">Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}
export default SignInController;