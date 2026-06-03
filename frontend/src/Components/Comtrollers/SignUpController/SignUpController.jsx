import './signup.css';
const SignUpController = () => {
    return (
        <div className="sign-up-controller">
            <div className="sign-up-header">


                <h2>Sign Up</h2>
                <p>Please fill in the form to create an account.</p>
            </div>
            <div className="sign-up-form">
                <form >
                    <div className="name-group">
                        <div className="form-group ">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" name="firstname" required />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" name="lastname" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>

                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
<p className="login-link">Have an account? <a href="/signin">Login</a></p>
            </div>
        </div>
    );
}
export default SignUpController;