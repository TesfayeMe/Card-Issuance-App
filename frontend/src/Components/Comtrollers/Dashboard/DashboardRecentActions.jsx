import EastSharpIcon from '@mui/icons-material/EastSharp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const DashboardRecentActions = ()=>{
    const stockMovmentData = [
  {
    date: 'May 07, 2026',
    refernce: 'damage-replacment',
    description: 'Paper Feed Roller',
    movmentType: 'OUT',
    quantityMoved: 2,
    performedBy: 'Tesfaye Melaku'
  },
  {
    date: 'May 09, 2026',
    refernce: 'maintenance-issue',
    description: 'Fuser Assembly',
    movmentType: 'OUT',
    quantityMoved: 1,
    performedBy: 'Abebe Kebede'
  },
  {
    date: 'May 12, 2026',
    refernce: 'stock-replenishment',
    description: 'Toner Cartridge',
    movmentType: 'IN',
    quantityMoved: 10,
    performedBy: 'Marta Bekele'
  },
  {
    date: 'May 15, 2026',
    refernce: 'damage-replacment',
    description: 'Separation Pad',
    movmentType: 'OUT',
    quantityMoved: 3,
    performedBy: 'Samuel Desta'
  },
  {
    date: 'May 18, 2026',
    refernce: 'new-purchase',
    description: 'Transfer Belt Unit',
    movmentType: 'IN',
    quantityMoved: 4,
    performedBy: 'Hana Tadesse'
  }
]

const idProcessingData = [
  {
    jobId: 1,
    fileName: 'gondar_district_may07.xlsx',
    totalRecords: 130,
    status: 'Completed',
    createdAt: 'May 07, 2026'
  },
  {
    jobId: 2,
    fileName: 'bahirdar_branch_may10.xlsx',
    totalRecords: 95,
    status: 'Completed',
    createdAt: 'May 07, 2026'
  },
  {
    jobId: 3,
    fileName: 'addis_ababa_hq_may12.xlsx',
    totalRecords: 210,
    status: 'Processing',
    createdAt: 'May 07, 2026'
  },
  {
    jobId: 4,
    fileName: 'hawassa_region_may15.xlsx',
    totalRecords: 175,
    status: 'Completed',
    createdAt: 'May 07, 2026'
  },
  {
    jobId: 5,
    fileName: 'mekelle_zone_may18.xlsx',
    totalRecords: 88,
    status: 'Failed',
    createdAt: 'May 07, 2026'
  }
]
return(
    <div className="dashboard-recent-actions-container">
        <div className="dashboard-recent-stock-movemnts">

<div className="dashboard-recent-actions-header">
    <span className="dashboard-recent-actions-header-title">
        Recent Stock Movments
    </span>
    <span className="dashboard-recent-actions-header-view-all-movemnt-button">
        <span>
            View All
        </span>
        <EastSharpIcon fontSize=''/>
    </span>
</div>

 {/* Recent Stock movement tables */}
    {/* <TableContainer component={Paper} sx={{ maxWidth: 650, margin: 'auto', mt: 4 }}> */}
    <TableContainer className='tables' component={Paper} sx={{ margin: 'auto', mt: 1, fontSize: '11' }}>
      <Table aria-label="simple data table">
        <TableHead>
          <TableRow style={{backgroundColor : '#f8f8f8'}}>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell ><strong>Reference</strong></TableCell>
            <TableCell ><strong>Description</strong></TableCell>
            <TableCell ><strong>Type</strong></TableCell>
            <TableCell ><strong>Quantity</strong></TableCell>
            <TableCell ><strong>By</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockMovmentData.map((stock, index) => (
            <TableRow 
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }} // Removes last border
            >
              <TableCell component="th" scope="row">{stock.date}</TableCell>
              <TableCell >{stock.refernce}</TableCell>
              <TableCell >{stock.description}</TableCell>
              <TableCell ><span className={`${stock.movmentType==='IN' ? 'green-color': 'red-color'}`}>{stock.movmentType}</span></TableCell>
              <TableCell >{stock.quantityMoved}</TableCell>
              <TableCell >{stock.performedBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



        </div>
        <div className="dashboard-recent-id-processing-jobs">

<div className="dashboard-recent-actions-header">
    <span className="dashboard-recent-actions-header-title">
        Recent Recent ID Processing Jobs
    </span>
    <span className="dashboard-recent-actions-header-view-all-movemnt-button">
        <span>
            View All
        </span>
        <EastSharpIcon fontSize=''/>
    </span>

</div>



{/* Recent Stock movement tables */}
    {/* <TableContainer component={Paper} sx={{ maxWidth: 650, margin: 'auto', mt: 4 }}> */}
    <TableContainer className='tables' component={Paper} sx={{margin: 'auto', mt: 1, fontSize: '11' }}>
      <Table aria-label="simple data table">
        <TableHead>
          <TableRow style={{backgroundColor : '#f8f8f8'}} >
            <TableCell><strong>Job ID</strong></TableCell>
            <TableCell ><strong>File Nmae</strong></TableCell>
            <TableCell ><strong>Total Records</strong></TableCell>
            <TableCell ><strong>Status</strong></TableCell>
            <TableCell ><strong>Created At</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {idProcessingData.map((idProc, index) => (
            <TableRow 
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} // Removes last border
            >
              <TableCell component="th" scope="row">{idProc.jobId}</TableCell>
              <TableCell >{idProc.fileName}</TableCell>
              <TableCell >{idProc.totalRecords}</TableCell>
              <TableCell ><span className={`${idProc.status==='Completed' ? 'green-color': idProc.status==='Processing'? 'gray-color': 'red-color'}`}>{idProc.status}</span></TableCell>
              <TableCell >{idProc.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </div>
    </div>
)
}
export default DashboardRecentActions;