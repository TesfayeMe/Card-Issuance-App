import './header.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
const Header = () => {
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
                <div className="user-info">
                    <div className="user-avatar">
                        <PersonSharpIcon fontSize="medium" />
                    </div>
                    <div className="user-info-details">
                        <span className="user-name">John Doe</span>
                        <span className="user-role">Administrator</span>

                    </div>
                    <div className="user-dropdown">
                        <ul>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    );
}
export default Header