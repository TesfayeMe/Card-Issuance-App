import SideMenu from '../SideMenu/SideMenu';
import './machinecontroller.css'
import Header from '../Header/Header'
import UpperCards from './UpperCards';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { Container, Row, Col, Card } from "react-bootstrap";
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
Machine lists
    </div>
    <div  className='machine-controller-container-main-left-machine-type-summary'>
Machine type summary
    </div>
</div>
<div  className='machine-controller-container-main-right'>
    <div   className='machine-controller-container-main-right-machine-chart-by-type'>
Machine by Type
    </div>
    <div   className='machine-controller-container-main-right-machine-status-overview'>
        Status Overview

    </div>
    <div className='machine-controller-container-main-right-recent-machine-maintenatnce'>
Recent Maintenance
    </div>
</div>
</div>

        </div>
        
    </div>
)
}
export default MachineController;