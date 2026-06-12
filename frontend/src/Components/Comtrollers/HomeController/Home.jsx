import './home.css';
// Note: If this fails during deployment, change path to '/logof.png'
import logo from '../../../../public/logof.png'; 
import Footer from '../../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Authentication from '../../Authentication/Authentication';
import { useEffect, useState } from 'react';

const Home = () => {
  const user = localStorage.getItem('token');
  const navigate = useNavigate(); // Cleaner than window.location.href
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If no token exists at all, redirect to landing/login immediately
    if (!user || user === 'undefined' || user === null) {
      navigate('/');
      return;
    }
const checkAuth = async () => {
  try {
    const result = await Authentication(user);
    console.log(result);

    if (result && result.status === true) {
      setAuthenticatedUser(result.user);
      setIsLoading(false); // Only stop loading when state is successfully populated!
      return; 
    } 
    
    if (result && result.message === 'token_expired.') {
      localStorage.removeItem('token');
      navigate('/');
      return;
    }

    // If response does not match criteria, kick out to landing page
    localStorage.removeItem('token');
    navigate('/');
  } catch (error) {
    console.error("Auth request failed:", error);
    navigate('/');
  }
};
    checkAuth();
  }, [user, navigate]);
    return (
        <>
        <div className='home-page-container'>
            <div className='home-page-header'>
                <div className='home-page-header-left-side'>
<div className='home-page-header-left-side-logo'>
<img src={logo}/>
<span className='home-page-header-left-side-logo-txt'>Card Issuance Solution </span>

</div>
                </div>
<div className='home-page-header-right-side'>

<a className='home-page-header-links' href='#home-page-main-banners'>Home</a>
{authenticatedUser && authenticatedUser.role_id && ( <Link className='home-page-header-links' to={'/dashboard'}>Dashboard</Link>)}
<a className='home-page-header-links' href='#home-page-main-services'>Service</a>
<a className='home-page-header-links' href='#home-page-main-features'>Features</a>
<a href='#home-page-main-support' className='home-page-header-links'>Support</a>
 {!authenticatedUser  && (<Link className='home-page-header-links' to={'/signin'}><span className='login-link'>Log in</span></Link>)}


                </div>
            </div>









            <div className='home-page-main'>
                <div className='home-page-main-banners' id='home-page-main-banners'>
<div>
    <h1>
        Card issuance solution mgt
    </h1>
</div>

<div className='banner-container'>
<div className='banner-left'>
    <span>
        Streamline Secure Operations: Machines, Parts, and Credentials.
    </span>
<span>
        Your nSingle.
    </span>
</div>
</div>
                </div>
<div className='home-page-main-services' id='home-page-main-services'>
    services
    {authenticatedUser && (

    <h1>Welcome back, {authenticatedUser?.first_name || 'Guest'}!</h1>
    )}
</div>
<div className='home-page-main-features' id='home-page-main-features'>
features
</div>
<div className='home-page-main-support' id='home-page-main-support'>
support
</div>
            </div>
            
        {/* <Footer/> */}
        <div className='home-page-footer'>
<div className="footer-content">
                <p>&copy; 2026 Card Issuance App.</p><br />
                <p>All rights reserved.</p>
            </div>
        </div>
        </div>
        </>
    );
}
export default Home;