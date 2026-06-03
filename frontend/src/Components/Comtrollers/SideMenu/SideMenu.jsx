import './sidemenu.css'
import logo from '../../../../public/logof.png' 
import Footer from '../../Footer/Footer'
const SideMenu = () => {
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
        <ul>
            <li>Dashboard</li>
            <li>User Management</li>
            <li>Machines</li>
            <li>Machine Modules</li>
            <li>Spare Parts</li>
            <li> Inventory</li>
            <li> Stock Movement</li>
            <li>Incident Management</li>
            <li>ID Proccessing</li>
            <li>Reports</li>
            <li>Settings</li>
        </ul>
      </div>
     
        <Footer/>
    </div>
  )
}
export default SideMenu