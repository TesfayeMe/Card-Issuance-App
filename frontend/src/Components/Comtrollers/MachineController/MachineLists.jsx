import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import './machinecontroller.css'
const MachineLists = ()=>{
    const machineLists = [{
        machineModel: 'DS4-ES1',
        total: 41,
        machineType: 'DS4-ES1',
        location: 'Various Locations',
        status: 'Active',
        lastUpdate: 'Jun 20, 2026 09:15 AM'
    },
{
        machineModel: 'MX Series',
        machineType: 'MX810100',
        total: 2,
        location: 'Zagwe bldg',
        status: 'Active',
        lastUpdate: 'Jun 21, 2026 11:15 AM'
    },
{
        machineModel: 'DX3100',
        machineType: 'DX3100',
        total: 2,
        location: 'Zagwe bldg',
        status: 'active one of them',
        lastUpdate: 'Jun 11, 2022 09:15 AM'
    },{
        machineModel: 'DFX',
        machineType: 'DFX',
        total: 10,
        location: 'Zagwe bldg',
        status: '4 of them active',
        lastUpdate: 'Jan 20, 2026 09:15 AM'
    },
{
        machineModel: 'MX Series',
        machineType: 'MX1100',
        total: 3,
        location: 'Zagwe bldg and Kera Backups',
        status: 'Active',
        lastUpdate: 'Feb 20, 2022 09:15 AM'
    }]
return (
    <div>
        
        <Table>
            <TableHead>
                <TableRow>

                <TableCell>#</TableCell>
                <TableCell>Machine Code</TableCell>
                <TableCell>Machine Type</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Updated</TableCell>
                <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
{
    machineLists.map((machine, index)=>(
       <TableRow key={index} sx={{ '& td': { fontSize: '11px' } }} >
<TableCell>{index+1}</TableCell>
<TableCell>
    <div className='machine-code-and-total'>
        <span  className='machine-code'>

    {machine.machineType}
        </span>
        <span className='machine-total'>
            {machine.total} Machines
        </span>
    </div>
    </TableCell>
<TableCell>{machine.machineType}</TableCell>
<TableCell>{machine.machineModel}</TableCell>
<TableCell>{machine.location}</TableCell>
<TableCell>{machine.status}</TableCell>
<TableCell>{machine.lastUpdate}</TableCell>
<TableCell className='d-flex gap-2'>
        <button className='action-buttons-machine-list'><VisibilityOutlinedIcon  fontSize='small'/></button>
        <button className='action-buttons-machine-list action-buttons-machine-list-edit'><ModeOutlinedIcon fontSize='small'/></button>
        <button className='action-buttons-machine-list'><MoreVertIcon  fontSize='small'/></button>
    </TableCell>
</TableRow> 
    ))
}

            </TableBody>
        </Table>
        <div className='table-bottom-pagenation-view'>
<div className='table-bottom-pagenation-view-label'>
Showing 1 to 5 of 5 machine groups
</div>
<div className='table-bottom-pagenation-view-button-control'>
<button>
    <KeyboardArrowLeftOutlinedIcon fontSize='small'/>
</button>
<span className='pagnation-page'>1</span>
<button>
    <KeyboardArrowRightOutlinedIcon fontSize='small'/>
    
</button>
</div>
        </div>
    </div>
)
}
export default MachineLists;