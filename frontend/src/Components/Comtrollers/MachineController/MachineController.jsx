import SideMenu from '../SideMenu/SideMenu';
import './machinecontroller.css'
import Header from '../Header/Header'
import UpperCards from './UpperCards';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { Container, Row, Col, Card } from "react-bootstrap";
import MachineLists from './MachineLists';
import MachineTypeSummary from './MachineTypeSummary';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MachineLocationOverView from './MachineLocationOverView'
import RightSideMachineController from './RightSideMachineController'
const MachineController = ()=>{
    const machineData = [
        {
            icon: 'machine',
            total: 58,
            title: 'Total Machine',
            view: 'View all machines'
        },
        {
            icon: 'active',
            total: 48,
            title: 'Active',
            view: '82.76%'
        },
        {
            icon: 'maintenance',
            total: 7,
            title: 'Mentenance',
            view: '12.07%'
        },
        {
            icon: 'out-of-service',
            total: 3,
            title: 'Out of Service',
            view: '5.17%'
        }
    ]
    
return (
    <div className='machine-controller-page'>
        <SideMenu/>
        <div className='machine-controller-container'>
            <Header/>
             <div className='machine-controller-container-header'>
                <span className='machine-controller-container-header-title'>Machine Controller</span>
                <p className='machine-controller-container-header-directory' >
                    Home <KeyboardArrowRightSharpIcon fontSize=''/> Dashboard <KeyboardArrowRightSharpIcon fontSize=''/> Machine <KeyboardArrowRightSharpIcon fontSize=''/> machine controller
                </p>

            </div>


<div className='machine-controller-container-main'>
<div  className='machine-controller-container-main-left'>
    <div  className='machine-controller-container-main-left-upper-cards'>
       <Container fluid className=''>
  <Row className='align-items-center justify-content-between'>
    {machineData.map((machine, index) => (
      <Col sm={6} md={3} key={index} className="mb-3">
        <UpperCards machineData={machine} />
      </Col>
    ))}
  </Row>
</Container>
    </div>


    <div  className='machine-controller-container-main-left-machine-lists'>
       
        <div className='machine-list-criteria-container'> 
<div className='search-machines-container'>
    <span className='search-btn'>
        <SearchIcon fontSize=''/>
    </span>
    <input type='text' placeholder='Search machines...' className='search-machines-search-field'/>
</div>
<div className='machine-type-criteria'>
<select className='machine-type-criteria-selection  criteria-selection'>
    <option value={'all'}>All Types</option>
    <option value={'MX-Series'}>MX Series</option>
    <option value={'DS4-ES1'}>DS4-ES1</option>
    <option value={'DX-Mailer'}>DX Mailer</option>
    <option value={'DFX-Printer'}>DFX Printer</option>
</select>
</div>
<div className='machine-status-criteria'>
    <select className='machine-type-criteria-selection criteria-selection'>
    <option value={'all'}>All Status</option>
    <option value={'Active'}>Active</option>
    <option value={'Maintenance'}>Maintenance</option>
    <option value={'Out-of-service'}>Out of Service</option>
    <option value={'new'}>New</option>
</select>
</div>
<div className='machine-location-criteria'>
    <select className='machine-location-criteria-selection criteria-selection'>
    <option value={'all'}>All Locations</option>
    <option value={'Active'}>Zagwe Bldg</option>
    <option value={'Maintenance'}>Various Locations</option>
    <option value={'Out-of-service'}>Kera Backup</option>
</select>
</div>
<div className='add-new-machine-btn-controller'>
<button>
    + <span>Add Machine</span>
    </button>
</div>
<div className='three-dots-for-option-popup'>
<button>
    <MoreVertIcon fontSize=''/>
    </button>
</div>
        </div>
<MachineLists/>
    </div>
    <div  className='machine-controller-container-main-left-machine-type-summary-andlocation-overview'>
<MachineTypeSummary/>
<MachineLocationOverView/>
    </div>
</div>



<div  className='machine-controller-container-main-right'>
    {/* <div   className='machine-controller-container-main-right-machine-chart-by-type'>
Machine by Type
    </div>
    <div   className='machine-controller-container-main-right-machine-status-overview'>
        Status Overview

    </div>
    <div className='machine-controller-container-main-right-recent-machine-maintenatnce'>
Recent Maintenance
    </div> */}
    <RightSideMachineController/>
</div>
</div>

        </div>
        
    </div>
)
}
export default MachineController;