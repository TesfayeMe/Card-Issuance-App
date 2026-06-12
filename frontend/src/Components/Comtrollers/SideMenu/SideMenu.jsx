import './sidemenu.css'
import logo from '../../../../public/logof.png' 
import Footer from '../../Footer/Footer'
import { Link, useNavigate } from 'react-router-dom';
import Authentication from '../../Authentication/Authentication';
import PrintSharpIcon from '@mui/icons-material/PrintSharp';
import { useEffect, useState } from 'react';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp';
import idProcIcon from '../../../assets/id-proc-icon.svg'
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
const SideMenu = () => {

const user = localStorage.getItem('token');
  const navigate = useNavigate(); // Cleaner than window.location.href
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [menuClick, setMenuClick] = useState(false);

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


  
useEffect(()=>{

  document.getElementById('side-menu-list').addEventListener('click', (e)=>{
    if(e.target.classList.contains('side-menu-major-list'))
    {
      const minorList = e.target.nextElementSibling;
      if(minorList)
      {
        minorList.classList.toggle('hidden');
      }
    }
  })
}, [menuClick])
















  return (
    <div className="side-menu">
      <div className="side-menu-contents">
 <div className="side-menu-header">
        <div className="logo-image">
          <img className='logo-img' src={logo} alt="Logo" />
        </div>
      <div className='logo-text'>
        <p className='logo-title'>CARD ISSUANCE</p>
      <p className='logo-subtitle'>SYSTEM</p>
      </div>

      </div>
        <ul id='side-menu-list' onClick={(e)=>setMenuClick(true)}>
            <li className='side-menu-major-list'><DashboardCustomizeSharpIcon/>Dashboard<span></span></li>
            {authenticatedUser && authenticatedUser.role_id < 3 && (
            <li className='side-menu-major-list'><PeopleSharpIcon/>User Management<KeyboardArrowRightSharpIcon/></li>
            )}
            <li className='side-menu-major-list'> <PrintSharpIcon/> Machines <KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'><ViewModuleRoundedIcon/>Machine Modules<KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'><BuildSharpIcon/>Spare Parts<KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'><InventorySharpIcon/> Inventory<KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'> <RepeatRoundedIcon/>Stock Movement<KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'><ErrorSharpIcon/>Incident Management<KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'><img className='' style={{width: '35px', height: '35px'}} src={idProcIcon}/>ID Proccessing<KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'><AssessmentSharpIcon/>Reports<KeyboardArrowRightSharpIcon/></li>
            <li className='side-menu-major-list'><SettingsSharpIcon/>Settings<KeyboardArrowRightSharpIcon/></li>
        </ul>
     {
       authenticatedUser && (<h3 style={{color: 'black'}}> {authenticatedUser?.first_name}</h3>)
      }
      </div>
        <Footer/>
    </div>
  )
}
export default SideMenu