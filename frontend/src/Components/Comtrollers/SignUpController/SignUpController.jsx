import React, { useState } from 'react';
import signupService  from '../../Services/signupService'
import './signup.css';
const SignUpController = () => {

    const [signUpData, setSignUpData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signUpData);
        let errorCounter = 0;
        if (signUpData.password !== signUpData.confirmPassword) {
            setError({ ...error, confirmPassword: 'Passwords do not match' });
            // alert("Passwords do not match!");
            errorCounter++;
            return;
        }
        if (!signUpData.firstName || !signUpData.lastName || !signUpData.emailAddress || !signUpData.phoneNumber || !signUpData.password) {
            setError({
                ...error,
                firstName: !signUpData.firstName ? 'First name is required' : '',
                lastName: !signUpData.lastName ? 'Last name is required' : '',
                emailAddress: !signUpData.emailAddress ? 'Email is required' : '',
                phoneNumber: !signUpData.phoneNumber ? 'Phone is required' : '',
                password: !signUpData.password ? 'Password is required' : ''
            });
            errorCounter++;
            return;
        }
        if (!/\S+@\S+\.\S+/.test(signUpData.emailAddress)) {
            setError({ ...error, emailAddress: 'Invalid email format' });
            errorCounter++;
            return;
        }
        if (!/^\d{10}$/.test(signUpData.phoneNumber)) {
            setError({ ...error, phoneNumber: 'Invalid phone number' });
            errorCounter++;
            return;
        }
        if (signUpData.password.length < 6) {
            setError({ ...error, password: 'Password must be at least 6 characters' });
            errorCounter++;
            return;
        }
        if (!/[A-Z]/.test(signUpData.password)) {
            setError({ ...error, password: 'Password must contain at least one uppercase letter' });
            errorCounter++;
            return;
        }

        if (!/[a-z]/.test(signUpData.password)) {
            setError({ ...error, password: 'Password must contain at least one lowercase letter' });
            errorCounter++;
            return;
        }

        if (!/[0-9]/.test(signUpData.password)) {
            setError({ ...error, password: 'Password must contain at least one numeric value' });
            errorCounter++;
            return;
        }

        if (!/[!@#$%&*()_\-+=\[\]{};':"\\|,.<>\/?]/.test(signUpData.password)) {
            setError({
                ...error,
                password: 'Password must contain at least one special character value'
            });
            errorCounter++;
            return;
        }

        if (signUpData.firstName.length < 3) {
            setError({ ...error, firstName: 'Names must have more than 3 alphabets' })
            errorCounter++;
            return;
        }
        if (signUpData.lastName.length < 3) {
            setError({ ...error, lastName: 'Names must have more than 3 alphabets' })
            errorCounter++;
            return;
        }

        if (errorCounter === 0) {
            const signupServiceResponse = await signupService(signUpData);
            const responseData = await signupServiceResponse.json();
            console.log(responseData)
            if (responseData.status === true) {
                window.location.href ='/signin'
            }
            else {
                // alert(`Server Response ${responseData.message}`);
                alert(`Something went wrong, please try later!`);
            }
        }

    };

    return (
        <div className="sign-up-controller">
            <div className="sign-up-header">


                <h2>Sign Up</h2>
                <p>Please fill in the form to create an account.</p>
            </div>
            <div className="sign-up-form">
                <form onSubmit={handleSubmit}>
                    <div className="name-group">
                        <div className="form-group ">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" name="firstname" required onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })} />
                            {error.firstName && <span className="error">{error.firstName}</span>}
                        </div>
                        <div className="form-group ">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" name="lastname" required onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })} />
                            {error.lastName && <span className="error">{error.lastName}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={(e) => setSignUpData({ ...signUpData, emailAddress: e.target.value })} />
                        {error.email && <span className="error">{error.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" required onChange={(e) => setSignUpData({ ...signUpData, phoneNumber: e.target.value })} />
                        {error.phone && <span className="error">{error.phone}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })} />
                        {error.password && <span className="error">{error.password}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })} />
                        {error.confirmPassword && <span className="error">{error.confirmPassword}</span>}
                    </div>

                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
                <p className="login-link">Have an account? <a href="/signin">Login</a></p>
            </div>
        </div>
    );
}
export default SignUpController;