import React from 'react';
import PrintSharpIcon from '@mui/icons-material/PrintSharp';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import doubleWrench from '../../../assets/double-wrench.svg';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const UpperCards = ({ machineData }) => {
  console.log(machineData);

  // Helper function to render the correct icon
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'machine':
        return <PrintSharpIcon className='icons machines-icon' />;
      case 'active':
        return <CheckCircleTwoToneIcon  className='icons active-machines-icon'  />;
      case 'maintenance': // Corrected spelling typo here
      return <ConstructionSharpIcon  className='icons machines-in-maintenance-icon' />;
        // return <img className='double-wrench' src={doubleWrench} alt="wrench icon" />;
      case 'out-of-service': // Added as a fallback if iconType is 'engineering'
        return <CancelOutlinedIcon  className='icons out-of-service-machines-icon' />;
      default:
        return null;
    }
  };

  return (
    <div className="machine-controller-upprt-cards-container">
      <div className="machine-controller-upprt-cards-container-left">
        {renderIcon(machineData?.icon)}
      </div>
      
      <div className="machine-controller-upprt-cards-container-right">
        <div className="machine-controller-upper-cards-container-right-top">
          <span className="machine-controller-upprt-cards-container-right-total">
            {machineData?.total}
          </span>
          <span className="machine-controller-upprt-cards-container-right-title">
            {machineData?.title}
          </span>
        </div>
        <div className="machine-controller-upper-cards-container-right-bottom">
          {machineData?.view}
        </div>
      </div>
    </div>
  );
};

export default UpperCards;
