import './spareparts.css'
import Header from '../Header/Header'
import SideMenu from '../SideMenu/SideMenu'
import SparePartsUpperCards from './SparePartsUpperCards'
import SparePartsInventory from './SparePartsInventory'
import RecentUsedSpares from './RecentUsedSpares';
import LowStockAlerts from './LowStockAlerts';
import PredictiveMaintenance from './PredictiveMaintenance';
import SpareUsageTrend from './SpareUsageTrend'
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
<div className='recent-used-spares-and-low-stock-alerts'>
<RecentUsedSpares/>
<LowStockAlerts/>
</div>
            {/* <p>Spare Parts leftSpare Parts leftSpare Parts left Spare Parts leftSpare Parts leftSpare Parts leftSpare Parts left Spare Parts leftSpare Parts leftSpare Parts leftSpare Parts leftSpare Parts left</p> */}
</div>
<div className='spare-part-page-controller-right'>

<PredictiveMaintenance/>
<SpareUsageTrend/>
            
</div>
</div>
            </div>
        </div>
    )
}
export default SpareParts;