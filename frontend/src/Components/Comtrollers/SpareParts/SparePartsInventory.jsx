import './spareparts.css'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const SparePartsInventory = ()=>{
    const SparePartsInventoryData = [{
   description: 'Belt input hppper',
   partNumber: '810134-001',
   compatibleMachine: 'Ds4-ES1, MX810100, DFX, DX3100',
   quantity: 45,
   status: 'In Stock'
    },
{
   description: 'Gear, roller',
   partNumber: '451004-002',
   compatibleMachine: 'MX810100, DX3100',
   quantity: 4,
   status: 'Critical Low'
    },
    {
   description: 'Sensor, reflective',
   partNumber: '784001-001',
   compatibleMachine: 'Ds4-ES1, MX810100, DX3100',
   quantity: 11,
   status: 'Low Stock'
    },
    {
   description: 'Motor, drirving',
   partNumber: '815410-145',
   compatibleMachine: 'MX810100, MX1100',
   quantity: 17,
   status: 'In Stock'
    }
]
    return (
        <div className='spare-parts-inventory-container'>

            <div  className='spare-parts-inventory-container-header'>
<span  className='spare-parts-inventory-container-title'>Spare Parts Inventory</span>
<span  className='spare-parts-inventory-container-view-purchase-requests-btn'><span>View all Purchase Request</span> <ArrowForwardOutlinedIcon fontSize=''/></span>
            </div>

            <div className='spare-parts-inventory-table-display-criteria'>
<div className='spare-parts-inventory-table-display-criteria-search-bar'>
    <SearchOutlinedIcon fontSize='small'/>
    <input type='text' className='spare-parts-inventory-table-display-criteria-search-input' placeholder='Search part number of name...'/>
</div>
<div className='spare-parts-inventory-table-display-criteria-machine-selection selection-control'>

   <select className='spare-parts-inventory-list-select'>
    <option>All Machine Tyes</option>
    <option>MX 8100</option>
    <option>Dx3100</option>
    <option>DX Neopost</option>
    <option>MX 1100</option>
    <option>DS4-ES1</option>
    <option>DFX</option>
   </select>

</div>
<div className='spare-parts-inventory-table-display-criteria-part-status-selction selection-control'>
    <select className='spare-parts-inventory-list-select'>
    <option>All Status</option>
    <option>In Stock</option>
    <option>Low Stock</option>
    <option>Critical Low</option>
   </select>

</div>
<div className='spare-parts-inventory-table-display-criteria-Sort-by-part-name selection-control'>
       <select className='spare-parts-inventory-list-select'>
    <option>Part Name</option>
    <option>Part Number</option>
    <option>Modification </option>
    <option>Status</option>
   </select>

</div>
<div className='spare-parts-inventory-table-display-criteria-export-list'>
    <select className='spare-parts-inventory-list-select export-spare-btn'>
    <option>Export</option>
    <option>to pdf</option>
    <option>to excel</option>
    <option>to html </option>
   </select>

</div>
            </div>


            <div  className='spare-parts-inventory-table-display-table'>
<Table >
    <TableHead>
        <TableRow >
            <TableCell>#</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Part Number</TableCell>
            <TableCell>Compatible Machine</TableCell>
            <TableCell>Stock Quantity</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
          SparePartsInventoryData.map((spare, index)=>(
            <TableRow key={index}  sx={{ '& td': { fontSize: '11px' } }} >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{spare.description}</TableCell>
                <TableCell>{spare.partNumber}</TableCell>
                <TableCell>{spare.compatibleMachine}</TableCell>
                <TableCell>{spare.quantity}</TableCell>
                <TableCell>
                    <span className={spare.status==='In Stock' ? 'in-stock': spare.status==='Low Stock' ? 'low-stock' : spare.status==='Critical Low' ? 'critical-low': 'empty-stock'}>

                    {spare.status}
                    </span>
                    
                    </TableCell>
                <TableCell>
                    <div className='pare-parts-inventory-table-display-table-action-btns'>
                        <button  className='pare-parts-inventory-table-display-table-action-request-spare-btn'>Request Part</button>
                        <button className='pare-parts-inventory-table-display-table-action-edit-part-btn'><ModeEditOutlinedIcon fontSize='small'/></button>
                        <button className='pare-parts-inventory-table-display-table-action-view-part-btn'><RemoveRedEyeOutlinedIcon fontSize='small'/></button>
                    </div>
                </TableCell>

            </TableRow>
          ))  
        }
    </TableBody>
</Table>
            </div>




            <div className='spare-parts-inventory-table-display-table-list-page'>
<span>showing 1 to 10 of 89 entries</span>
<div className='spare-parts-inventory-table-display-table-list-page-buttons'>
<button className='spare-parts-inventory-list-page-control-buttons'><KeyboardArrowLeftOutlinedIcon fontSize='medium'/></button>
<button className='spare-parts-inventory-list-page-control-buttons'>1</button>
<button className='spare-parts-inventory-list-page-control-buttons displayed-page-number'>2</button>
<button className='spare-parts-inventory-list-page-control-buttons'>3</button>
<button className='spare-parts-inventory-list-page-control-buttons'>...</button>
<button className='spare-parts-inventory-list-page-control-buttons'>9</button>
<button className='spare-parts-inventory-list-page-control-buttons'><KeyboardArrowRightOutlinedIcon fontSize='medium'/></button>

</div>
            </div>
           
        </div>
    )
}
export default SparePartsInventory