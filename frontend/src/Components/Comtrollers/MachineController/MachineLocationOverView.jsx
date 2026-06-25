import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './machinecontroller.css'
const MachineLocationOverView = ()=>{
    const MachineLocations = [{
        location: 'Outline',
        quntity: 20,
                },{
        location: 'City',
        quntity: 20,
                },
            {
        location: 'Central-Kera',
        quntity: 2,
                },
            {
        location: 'Central-Zagwe',
        quntity: 16,
                },
            {
        location: 'Border',
        quntity: 2,
                }]
    return (
        <div className='machin-summary-container-and-location-overview'>
            <span  style={{paddingLeft: '15px', fontWeight: 'bold'}}>Location Overview</span>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Location</TableCell>
                        <TableCell>Machines</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        MachineLocations.map((location, index)=>(
                            <TableRow key={index}>
                                <TableCell>{location.location}</TableCell>
                                <TableCell>{location.quntity}</TableCell>
                            </TableRow>
                        ))
                    }
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>58</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default MachineLocationOverView;