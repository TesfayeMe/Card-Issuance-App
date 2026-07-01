import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const PredictiveMaintenance = () => {
    const predictiveMaintenanceData = [
        {
            partName: "Print Head(SPR-840051-001)",
            priority: "High Priority",
            estRequiredIn: "7 days",
            recommendedQty: 10
        },
        {
            partName: "Ink Cartridge(SPR-840052-001)",
            priority: "Medium Priority",
            estRequiredIn: "14 days",
            recommendedQty: 5
        },
        {
            partName: "Roller(SPR-840053-001)",
            priority: "Low Priority",
            estRequiredIn: "30 days",
            recommendedQty: 2
        }
    ];
    return (
        <div className='predictive-maintenance-container'>
            <span className='predictive-maintenance-title'>Predictive Maintenance</span>
            <div className='predictive-maintenance-content'>
                <span className='predictive-maintenance-content-title'>Smart Recommendations</span>
                <span className='predictive-maintenance-content-essay'>Based on usage patterns and machine performance, the following spare parts are recommended for ordering:</span>
                {
                    predictiveMaintenanceData.map((item, index) => (
                        <div key={index} className={`predictive-maintenance-recommendations ${item.priority.toLowerCase().replace(' ', '_')}`}>
                            <ul>
                                <li>
                                    <span>{item.partName}</span>
                                    <span className={`${item.priority.toLowerCase().replace(' ', '_')}_color ${item.priority.toLowerCase().replace(' ', '_')}_left_bg`}>{item.priority}</span>
                                </li>
                                 <li>
                                    <span>Est. Required In</span>
                                    <span className={`${item.priority.toLowerCase().replace(' ', '_')}_color ${item.priority.toLowerCase().replace(' ', '_')}_left`}>{item.estRequiredIn}</span>
                                </li>
                                <li>
                                    <span>Recommended Qty</span>
                                    <span className={`${item.priority.toLowerCase().replace(' ', '_')}_color ${item.priority.toLowerCase().replace(' ', '_')}_left`}>{item.recommendedQty}</span>
                                </li>
                            </ul>
                        </div>
                    ))
                }
                
                <span className='predictive-maintenance-view-all'>
                        View all Recommendations
                        <ArrowForwardOutlinedIcon fontSize="small" />
                    </span>
            </div>
        </div>
    )
}
export default PredictiveMaintenance;