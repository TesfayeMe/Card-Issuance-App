import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const LowStockAlerts = ()=>{
    const spareData = [
    {
description: 'roller, cleaning',
partNumber: '57124-001',
CompatibleMachine: 'DS4-ES1, Mx1100',
availableStock: 3,
minStock: 5
    },
     {
description: 'roller, cleaning',
partNumber: '57124-001',
CompatibleMachine: 'DS4-ES1, Mx1100',
availableStock: 3,
minStock: 5
    },
    {
description: 'roller, cleaning',
partNumber: '57124-001',
CompatibleMachine: 'DS4-ES1, Mx1100',
availableStock: 3,
minStock: 5
    },
{
description: 'roller, cleaning',
partNumber: '57124-001',
CompatibleMachine: 'DS4-ES1, Mx1100',
availableStock: 3,
minStock: 5
    },
    {
description: 'roller, cleaning',
partNumber: '57124-001',
CompatibleMachine: 'DS4-ES1, Mx1100',
availableStock: 3,
minStock: 5
    },
]
    return (
        <div className='spares-low-stock-alerts-container'>
            <div  className='spares-low-stock-alerts-container-header'>
                <span className='spares-low-stock-alerts-container-header-title'>Low Stock Alerts</span>
                <span className='spares-low-stock-alerts-container-header-view-all-btn'>View All</span>

            </div>
            <Table>
                <TableHead>
                    <TableRow sx={{'& td, & th': {padding: '4px', fontSize: '11px', fontWeight: 'bold', color: '#5d5f5e'}}}>
                        <TableCell >#</TableCell>
                        <TableCell >Part Name</TableCell>
                        <TableCell >Part Number</TableCell>
                        <TableCell >Compatible Machine</TableCell>
                        <TableCell >Stock</TableCell>
                        <TableCell >Min. Stock</TableCell>
                        <TableCell >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                       spareData.map((spare, index)=>(
                        <TableRow key={index}  sx={{ '& td': { fontSize: '11px' ,
            padding: '8px 14px' } }} >
<TableCell>{index + 1}</TableCell>
<TableCell>{spare.description}</TableCell>
<TableCell>{spare.partNumber}</TableCell>
<TableCell>{spare.CompatibleMachine}</TableCell>
<TableCell>{spare.availableStock}</TableCell>
<TableCell>{spare.minStock}</TableCell>
<TableCell>
    <span>Critical Low</span>
</TableCell>
                        </TableRow>
                       )) 
                    }
                </TableBody>
            </Table>
        </div>
    )
}
export default LowStockAlerts;