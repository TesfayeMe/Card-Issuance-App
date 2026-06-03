import './signin.css';
const SignInController = () => {
    return (
        <div className="signin-container"> 
        <div className="signin-form-container">
            <div className="signin-header">
                <h1>Welcome Back</h1>
                <p>Please enter your credentials to sign in.</p>
            </div>
            <form className="signin-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="signin-button">Sign In</button>
            </form>
            <p className="create-account-link">Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
        </div>
    );
}
export default SignInController;