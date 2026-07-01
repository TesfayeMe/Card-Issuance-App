import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const RecentUsedSpares =()=>{
const spareData = [
    {
description: 'roller, cleaning',
partNumber: '57124-001',
machine: 'DS4-ES1-021',
usedOn: 'May 07, 2026',
usedQuantity: 1
    },
     {
description: 'roller, cleaning',
partNumber: '57124-001',
machine: 'DS4-ES1-021',
usedOn: 'May 07, 2026',
usedQuantity: 1
    },
    {
description: 'roller, cleaning',
partNumber: '57124-001',
machine: 'DS4-ES1-021',
usedOn: 'May 07, 2026',
usedQuantity: 1
    },
{
description: 'roller, cleaning',
partNumber: '57124-001',
machine: 'DS4-ES1-021',
usedOn: 'May 07, 2026',
usedQuantity: 1
    },
    {
description: 'roller, cleaning',
partNumber: '57124-001',
machine: 'DS4-ES1-021',
usedOn: 'May 07, 2026',
usedQuantity: 1
    },
]
    return (
        <div className='spares-recent-used-spare-part'>
            
            <div className='spares-recent-used-spare-part-header'>
                <span className='spares-recent-used-spare-part-header-title'>Recent Used Spares</span>
                <span className='spares-recent-used-spare-part-header-view-all-btn'>View All</span>
            </div>
            <Table>
                <TableHead>
                    <TableRow sx={{'& td, & th': {padding: '4px', fontSize: '11px', fontWeight: 'bold', color: '#5d5f5e'}}}>
                        <TableCell>#</TableCell>
                        <TableCell>Part Name</TableCell>
                        <TableCell>Part Number</TableCell>
                        <TableCell>Machine</TableCell>
                        <TableCell>Used On</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                       spareData.map((spare, index)=>(
                        <TableRow key={index}  sx={{ '& td': { fontSize: '11px' ,
            padding: '8px 14px' } }}  >
<TableCell>{index + 1}</TableCell>
<TableCell>{spare.description}</TableCell>
<TableCell>{spare.partNumber}</TableCell>
<TableCell>{spare.machine}</TableCell>
<TableCell>{spare.usedOn}</TableCell>
<TableCell>{spare.usedQuantity}</TableCell>
                        </TableRow>
                       )) 
                    }
                </TableBody>
            </Table>
        </div>
    )
}
export default RecentUsedSpares;