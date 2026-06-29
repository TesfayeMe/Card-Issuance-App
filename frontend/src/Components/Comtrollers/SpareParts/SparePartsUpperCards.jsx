import './spareparts.css'
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
const SparePartsUpperCards =()=>{
    const cardData = [
        {
            label: 'Total Parts In Stock',
            quantity: 1245,
            bottomText: 'Across 89 unique parts',
            change: '8.6%',
            changeDuration: 'vs last month'
        },
        {
            label: 'Low Stock Alerts',
            quantity: 23,
            bottomText: 'Parts running low',
            change: '4',
            changeDuration: 'vs last week'
        },
        {
            label: 'Pending Orders',
            quantity: 17,
            bottomText: 'Awaiting delivery',
            change: '',
            changeDuration: ''
        },
    ]
    return(
       <div className='spare-part-uppercards'>

{
    cardData.map((data, index)=>(
        <div key={index} className='spare-part-uppercards-card'>
<div className='spare-part-uppercards-card-icon-and-descrition'>
    <div className='spare-part-uppercards-card-icons'>

{data.label==='Total Parts In Stock' ? <span className='spare-part-uppercards-card-icon spare-part-uppercards-card-icon-total-instock'><ViewInArIcon/></span>: data.label==='Low Stock Alerts'? <span className='spare-part-uppercards-card-icon spare-part-uppercards-card-icon-low-stock'> <ReportProblemOutlinedIcon/></span> :<span className='spare-part-uppercards-card-icon spare-part-uppercards-card-icon-pending-orders'> <ShoppingCartOutlinedIcon/></span>}
</div>
<div className='spare-part-uppercards-card-description'>
    <span className='spare-part-uppercards-card-description-label'>{data.label}</span>
    <span className='spare-part-uppercards-card-description-quantity'>{data.quantity}</span>
    <span className='spare-part-uppercards-card-description-bottomtext'>{data.bottomText}</span>
</div>
</div>
<div className='spare-part-uppercards-card-changes-in-duration'>
    <div className='spare-part-uppercards-card-changes-in-duration-controller'>
        <span className='spare-part-uppercards-card-changes-in-duration-value'><SouthOutlinedIcon className='red-arrow'  fontSize=''/><NorthOutlinedIcon className='green-arrow' fontSize=''/>{data.change}</span>
    <span className='spare-part-uppercards-card-changes-in-duration-text'>{data.changeDuration}</span>
    </div>
    
</div>
        </div>
    ))
}

</div>
    )
}
export default SparePartsUpperCards;