import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import {Typography } from '@mui/material'; // Using MUI layout utilities
import { ChartsContainer } from '@mui/x-charts/ChartsContainer';
import { Container, Row, Col, Card } from "react-bootstrap";
import EastSharpIcon from '@mui/icons-material/EastSharp';

const RightSideMachineController = ()=>{
 
//machine type js
const machinePieChartData = [
  { label: 'Group A', value: 41, color: '#0088FE' },
  { label: 'Group B', value: 10, color: '#00C49F' },
  { label: 'Group C', value: 2, color: '#FFBB28' },
  { label: 'Group D', value: 2, color: '#FF8042' },
  { label: 'Group E', value: 3, color: '#ff02dd' },
];
const machineTypeSettings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};
const machineTypeTotalValue = (machinePieChartData || []).reduce((sum, item) => sum + item.value, 0);










    const machineStatusData  = [
    {
        machineStatus: 'Active',
        quntity: 48,
        percentil: '82.76%'
    },
    {
        machineStatus: 'Maintenance',
        quntity: 7,
        percentil: '12.07%'
    },
    {
        machineStatus: 'Out of Service',
        quntity: 3,
        percentil: '5.17%'
    }
   ]
   const recentMaintenanceData = [
    {
        machineCode: 'DFX-005',
        machineType: 'DFX',
        maintenanceDate: 'May 12, 2026'
    },
    {
        machineCode: 'DFX-003',
        machineType: 'DFX',
        maintenanceDate: 'Jun 12, 2026'
    },
    {
        machineCode: 'DS4-ES1-017',
        machineType: 'DS4-ES1',
        maintenanceDate: 'Mar 22, 2026'
    },
    {
        machineCode: 'MX810065',
        machineType: 'MX series',
        maintenanceDate: 'Jun 15, 2026'
    },
    {
        machineCode: 'DFX-001',
        machineType: 'DFX',
        maintenanceDate: 'Jun 01, 2026'
    }
]
    return(
        <div className="right-side-machine-controller-container">
            
            <div className="right-side-machine-controller-container-machine-by-type">
                <span className="right-side-machine-card-title">Machines by type</span>






<div className="incidents-by-status-data">

<Box sx={{ position: 'relative', width: 200, height: 200 }}>
      {/* 1. The Donut Chart */}
      <PieChart
        series={[
          {
            data: machinePieChartData || [],
            innerRadius: 30,
            outerRadius: 70,
            arcLabel: (item) => `${item.value}`, 
          },
        ]}
        margin={{ right: 0, left: 0, top: 0, bottom: 0 }} // Center the pie perfectly
        width={200}
        height={200}
        slotProps={{ legend: { hidden: true } }}
      />

      {/* 2. Absolute Centered Text Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none', // Allows hover interactions to pass through to the slices
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1 }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
          {machineTypeTotalValue}
        </Typography>
      </Box>
    </Box>


<div className="data-left-for-labels-machine-type">
  <div className="data-left-for-labels-each-machine-type">
    <div className="data-left-for-labels-each-label-color-machine-type ds4-color">

    </div>
    <div className="data-left-for-labels-text-machine-type">
<span className="data-left-for-labels-title-machine-type">
  DS4-ES1
</span>
<span className="data-left-for-labels-value-machine-type">
  41 (70.69%)
</span>
    </div>

  </div>

 <div className="data-left-for-labels-each-machine-type">
   <div className="data-left-for-labels-each-label-color-machine-type dfx-color">

    </div>
    <div className="data-left-for-labels-text-machine-type">
<span className="data-left-for-labels-title-machine-type">
  DFX
</span>
<span className="data-left-for-labels-value-machine-type">
  10 (17.24%)
</span>
    </div>

  </div>


   <div className="data-left-for-labels-each-machine-type">
     <div className="data-left-for-labels-each-label-color-machine-type mx81-color">

    </div>
    <div className="data-left-for-labels-text-machine-type">
<span className="data-left-for-labels-title-machine-type">
  MX810100
</span>
<span className="data-left-for-labels-value-machine-type">
  2 (3.45%)
</span>
    </div>

  </div>

   <div className="data-left-for-labels-each-machine-type">
     <div className="data-left-for-labels-each-label-color-machine-type dx-color">

    </div>
    <div className="data-left-for-labels-text-machine-type">
<span className="data-left-for-labels-title-machine-type">
  DX
</span>
<span className="data-left-for-labels-value-machine-type">
  2 (3.45%)
</span>
    </div>

  </div>

  <div className="data-left-for-labels-each-machine-type">
     <div className="data-left-for-labels-each-label-color-machine-type mx1100-color" >

    </div>
    <div className="data-left-for-labels-text-machine-type">
<span className="data-left-for-labels-title-machine-type">
  MX1100
</span>
<span className="data-left-for-labels-value-machine-type">
  3 (5.17%)
</span>
    </div>

  </div>

</div>

</div>
<div className="dashboard-middle-container-horizontal-line">

</div>
<div className="dashboard-middle-container-view-detials-button">
<div className="dashboard-middle-container-view-detials-button-container">
  <span>
  View full report
</span>
<EastSharpIcon fontSize=""/> 
</div>
</div>

</div>


       
















            <div className="right-side-machine-controller-container-machine-status-overview">
                  <span className="right-side-machine-card-title">Status overview</span>
       <Table>
    <TableBody>
        {
            machineStatusData.map((machineStatus, index)=>(
                <TableRow sx={{ '& td': { fontSize: '11px' } }}>
                    <TableCell>{machineStatus.machineStatus}</TableCell>
                    <TableCell>{machineStatus.quntity}</TableCell>
                    <TableCell>{machineStatus.percentil}</TableCell>
                </TableRow>
            ))
        }
        <TableRow>
            <TableCell>Total Machines</TableCell>
            <TableCell></TableCell>
            <TableCell>58</TableCell>
        </TableRow>
    </TableBody>
</Table>
            </div>


            <div className="right-side-machine-controller-container-machine-recent-maintenance">
                <div className='right-side-machine-card-title-and-view-all-btn'>
                    <span className="right-side-machine-card-title">Recent maintenance</span>
                <span>View all</span>
                </div>
                <Table >
                    <TableBody>
                        {
                        recentMaintenanceData.map((maintenedMachine, index)=>(
                            <TableRow key={index} sx={{ '& td': { fontSize: '11px' } }}>
                                <TableCell>{maintenedMachine.machineCode}</TableCell>
                                <TableCell>{maintenedMachine.machineType}</TableCell>
                                <TableCell>{maintenedMachine.maintenanceDate}</TableCell>
                            </TableRow>
                        ))    
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
export default RightSideMachineController;