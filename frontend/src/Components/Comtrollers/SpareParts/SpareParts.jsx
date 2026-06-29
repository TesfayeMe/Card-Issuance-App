import './spareparts.css'
import Header from '../Header/Header'
import SideMenu from '../SideMenu/SideMenu'
import SparePartsUpperCards from './SparePartsUpperCards'
import SparePartsInventory from './SparePartsInventory'
const SpareParts = ()=>{
    return (
        <div className='spare-part-page'>
            <SideMenu/>
            <div className='spare-part-page-container'>
<Header/>
<div className='spare-part-page-controller'>
<div className='spare-part-page-controller-left'>
    <SparePartsUpperCards/>
<SparePartsInventory/>
            {/* <p>Spare Parts leftSpare Parts leftSpare Parts left Spare Parts leftSpare Parts leftSpare Parts leftSpare Parts left Spare Parts leftSpare Parts leftSpare Parts leftSpare Parts leftSpare Parts left</p> */}
</div>
<div className='spare-part-page-controller-right'>

            <h1>Spare Parts right</h1>
</div>
</div>
            </div>
        </div>
    )
}
export default SpareParts;