import './header.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

import { Link, useNavigate } from 'react-router-dom';
import Authentication from '../../Authentication/Authentication';
import { useEffect, useState } from 'react';

const Header = () => {



const user = localStorage.getItem('token');
  const navigate = useNavigate(); // Cleaner than window.location.href
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

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


//handle user info click

const handleUserInfoClick = async ()=>{
    // alert('User Info')
    const userDropDown = document.getElementsByClassName('user-dropdown');
userDropDown[0].classList.toggle('change-user-dropdown');
}


//handle logout click
const handleLogout = async ()=>{
 localStorage.removeItem('token');
 window.location.href ='/'   
}





    return (
        <header className="app-header">
            <div className="app-header-left-side">
               
                    <MenuSharpIcon fontSize="medium" />
                
                <div className="search-bar">
                    <SearchSharpIcon color="action" fontSize="small" />
                    <input type="text" className='search-input' placeholder="Search..." />
                    <span>Ctrl+/</span>
                </div>
            </div>

            <div className="app-header-right-side">
                <div className="notification-icon">
                    <div className="notification-badge">3
                    </div>
                    <NotificationsNoneSharpIcon fontSize="medium" />
                    <div className="notification-dropdown">
                        <ul>
                            <li>New user registered</li>
                            <li>Server downtime scheduled</li>
                            <li>New comment on your post</li>
                        </ul>
                    </div>
                </div>
                <div className="user-info" onClick={handleUserInfoClick}>
                    <div className="user-avatar">
                        <PersonSharpIcon fontSize="medium" />
                    </div>
                    <div className="user-info-details">
                        <span className="user-name">
                            {
       authenticatedUser && (<span> {authenticatedUser?.first_name}</span>)
      }
                        </span>
                        <span className="user-role">{
       authenticatedUser && (<span > {authenticatedUser?.role_id === 1 ? 'Administrator': authenticatedUser?.role_id === 2 ? 'Manager' : "Engineer"}</span>)
      }</span>

                    </div>
                    <div className="user-dropdown">
                        <ul>
                            
                            <li><a href='/profile'>Profile</a></li>
                            <li><a href='/settings'>Settings</a></li>
                            <li onClick={handleLogout}><a href='#'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    );
}
export default Header