import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './machinecontroller.css'
const MachineTypeSummary = ()=>{

     const machindataSummary = [{
        machineModel: 'DS4-ES1',
        total: 41,
        machineType: 'DS4-ES1',
        activeMachines: 34,
        maintenance: 5,
        outOfService: 2
    },
{
        machineModel: 'MX Series',
        machineType: 'MX810100',
        total: 2,
          activeMachines: 2,
        maintenance: 0,
        outOfService: 0
    },
{
        machineModel: 'DX3100',
        machineType: 'DX3100',
        total: 2,
           activeMachines: 1,
        maintenance: 0,
        outOfService: 1
    },{
        machineModel: 'DFX',
        machineType: 'DFX',
        total: 10,
          activeMachines: 7,
        maintenance: 2,
        outOfService: 1
    },
{
        machineModel: 'MX Series',
        machineType: 'MX1100',
        total: 3,
           activeMachines: 3,
        maintenance: 0,
        outOfService: 0
    }]
    return (
        <div className='machin-summary-container-and-location-overview'>
            <span style={{paddingLeft: '15px', fontWeight: 'bold'}}>Machine Type Summary</span>
            <Table>
<TableHead>
    <TableRow>
        <TableCell>Machine Type</TableCell>
        <TableCell>Model</TableCell>
        <TableCell>Total Machines</TableCell>
        <TableCell>Active</TableCell>
        <TableCell>Maintenance</TableCell>
        <TableCell>Out of Service</TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {
        machindataSummary.map((machine, index)=>(
            <TableRow key={index}>
<TableCell>{machine.machineType}</TableCell>
<TableCell>{machine.machineModel}</TableCell>
<TableCell>{machine.total}</TableCell>
<TableCell>{machine.activeMachines}</TableCell>
<TableCell>{machine.maintenance}</TableCell>
<TableCell>{machine.outOfService}</TableCell>
            </TableRow>
        ))
    }
    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell>58</TableCell>
                        <TableCell>47</TableCell>
                        <TableCell>7</TableCell>
                        <TableCell>4</TableCell>
                    </TableRow>
</TableBody>
            </Table>
        </div>
    )
}
export default MachineTypeSummary;