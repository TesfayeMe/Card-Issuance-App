import './spareparts.css'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
const SparePartsInventory = ()=>{
    const SparePartsInventoryData = [{

    }]
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
table
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