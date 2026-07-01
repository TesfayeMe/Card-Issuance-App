import { Container, Row, Col, Card } from "react-bootstrap";
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import {Typography } from '@mui/material'; // Using MUI layout utilities
import EastSharpIcon from '@mui/icons-material/EastSharp';
import { ChartsContainer } from '@mui/x-charts/ChartsContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
// import { Box } from '@mui/material';
const DashboardMiddleCards = ({ data }) => {

//stock movement
const cardData = 
    {
    "title": "Low Stock Items",
    "total": 11,
    "description": "7.2% from last month",
    "icon": "CreditCard",
    "graphData": [
      { "month": "Jan", "instock": 120, 'outstock': 12 },
      { "month": "Feb", "instock": 60, 'outstock': 21 },
      { "month": "Mar", "instock": 70, 'outstock': 100 },
      { "month": "Apr", "instock": 51, 'outstock': 11 },
      { "month": "May", "instock": 80, 'outstock': 41 },
      { "month": "Jun", "instock": 122, 'outstock': 31 }
    ]
  }
const stockMonths = [];
const inStock = [];
const outStock = [];
cardData.graphData.forEach(element => {

    stockMonths.push(element.month);
});
console.log("months", stockMonths);
cardData.graphData.forEach(element => {

    inStock.push(element.instock);
});
console.log("Ins", inStock)
cardData.graphData.forEach(element => {

    outStock.push(element.outstock);
});
console.log("Outs", outStock)
//stock movement end



//Inventory js
const inventoryPieChartData = [
  { label: 'Group A', value: 1000, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];
const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};
const totalValue = (inventoryPieChartData || []).reduce((sum, item) => sum + item.value, 0);
//inventory js end








//Incident js
const incidentPieChartData = [
  { label: 'Group A', value: 6, color: '#0088FE' },
  { label: 'Group B', value: 2, color: '#00C49F' },
  { label: 'Group C', value: 1, color: '#FFBB28' },
  { label: 'Group D', value: 3, color: '#FF8042' },
  { label: 'Group E', value: 2, color: '#ff02dd' },
];
const incidentSettings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};
const IncidentTotalValue = (incidentPieChartData || []).reduce((sum, item) => sum + item.value, 0);
//Incident js end
//  const { ref, width, height } = useResizeObserver();


  return (
    <div className="dashboard-middle-card-container p-3">

   <Container fluid>
  <Row xl={3} className="g-3 align-items-center">
    
<div className="dashboard-middle-cards inventory-overview-card">
<h1></h1>
<div className="dashboard-middle-cards-header">
  <span className="dashboard-middle-cards-header-left">
  Inventory Overview 
  </span>
<span className="dashboard-middle-cards-header-right">
</span>
</div>
<div className="dashboard-middle-cards-data inventory-card">

  <div className="inventory-data">
<Box sx={{ position: 'relative', width: 200, height: 200 }}>
      {/* 1. The Donut Chart */}
      <PieChart
        series={[
          {
            data: inventoryPieChartData || [],
            innerRadius: 50,
            outerRadius: 100,
            arcLabel: (item) => `${item.value}`, 
          },
        ]}
        margin={{ right: 0, left: 0, top: 0, bottom: 0 }} // Center the pie perfectly
        width={200}
        height={200}
        slotProps={{ legend: { hidden: true } }}
      />

      {/* 2. Absolute Centered Text Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none', // Allows hover interactions to pass through to the slices
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1 }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
          {totalValue}
        </Typography>
      </Box>
    </Box>



<div className="data-left-for-labels">
  <div className="data-left-for-labels-each">
    <div className="data-left-for-labels-each-label-color available-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  Available
</span>
<span className="data-left-for-labels-value">
  892 (92.3%)
</span>
    </div>

  </div>

 <div className="data-left-for-labels-each">
   <div className="data-left-for-labels-each-label-color low-stock-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  Low Stock
</span>
<span className="data-left-for-labels-value">
  18 (2.3%)
</span>
    </div>

  </div>


   <div className="data-left-for-labels-each">
     <div className="data-left-for-labels-each-label-color out-of-stock-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  Out of Stock
</span>
<span className="data-left-for-labels-value">
  14 (1.6%)
</span>
    </div>

  </div>

   <div className="data-left-for-labels-each">
     <div className="data-left-for-labels-each-label-color reserved-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  Reserved
</span>
<span className="data-left-for-labels-value">
  210 (14.1%)
</span>
    </div>

  </div>



</div>
</div>
<div className="dashboard-middle-container-horizontal-line">

</div>
<div className="dashboard-middle-container-view-detials-button">
<div className="dashboard-middle-container-view-detials-button-container">
  <span>
  View inventory details
</span>
<EastSharpIcon fontSize=""/> 
</div>
</div>

{/* end */}
</div>



</div>
<div className="dashboard-middle-cards stock-movement-card">

<div className="dashboard-middle-cards-header">
  <span className="dashboard-middle-cards-header-left">
  Stock Movement (This Month) 
  </span>
<span className="dashboard-middle-cards-header-right">
  <span>This Month</span><KeyboardArrowDownSharpIcon fontSize=""/>
</span>
</div>

<div  className="dashboard-middle-cards-data stock-movement-data" style={{width: '100%'}}>
  
<Box sx={{ width: '100%', height: 200, position: 'relative'}}>
  <svg style={{ display: 'block', height: 0 }}>
    <defs>
      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1976d2" stopOpacity={0.5} />
        <stop offset="100%" stopColor="#1976d2" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c319d2" stopOpacity={0.5} />
        <stop offset="100%" stopColor="#d219d2" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>

  <LineChart 
    // height={170}
    series={[
      { 
        data: outStock, 
        label: 'Out Stock', 
        area: true, 
        // showMark: true, 
        color: 'url(#gradient1)',
      },
      { 
        data: inStock, 
        label: 'In Stock',
        area: true, 
        // showMark: true, 
        color: 'url(#gradient2)',
      },
    ]}
    xAxis={[{ scaleType: 'point', data: stockMonths }]}
    bottomAxis={null}
    leftAxis={null}
    margin={{ top: 0, right: 0, bottom: -5, left: -5 }}
  />
</Box>
  
  
</div>

<div className="dashboard-middle-container-horizontal-line" ></div>


<div className="dashboard-middle-container-view-detials-button">
<div className="dashboard-middle-container-view-detials-button-container">
  <span>
  View all movments
</span>
<EastSharpIcon fontSize=""/> 
</div>
</div>

</div>



<div className="dashboard-middle-cards Incidents-by-status">
<div className="dashboard-middle-cards-header">
  <span className="dashboard-middle-cards-header-left">
  Incident by Status
  </span>
<span className="dashboard-middle-cards-header-right">
 
</span>
</div>

<div className="incidents-by-status-data">

<Box sx={{ position: 'relative', width: 200, height: 200 }}>
      {/* 1. The Donut Chart */}
      <PieChart
        series={[
          {
            data: incidentPieChartData || [],
            innerRadius: 50,
            outerRadius: 100,
            arcLabel: (item) => `${item.value}`, 
          },
        ]}
        margin={{ right: 0, left: 0, top: 0, bottom: 0 }} // Center the pie perfectly
        width={200}
        height={200}
        slotProps={{ legend: { hidden: true } }}
      />

      {/* 2. Absolute Centered Text Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none', // Allows hover interactions to pass through to the slices
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', lineHeight: 1 }}>
          Total
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
          {IncidentTotalValue}
        </Typography>
      </Box>
    </Box>


<div className="data-left-for-labels">
  <div className="data-left-for-labels-each">
    <div className="data-left-for-labels-each-label-color open-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  Open
</span>
<span className="data-left-for-labels-value">
  6 (92.3%)
</span>
    </div>

  </div>

 <div className="data-left-for-labels-each">
   <div className="data-left-for-labels-each-label-color inproogress-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  In Progress
</span>
<span className="data-left-for-labels-value">
  2 (2.3%)
</span>
    </div>

  </div>


   <div className="data-left-for-labels-each">
     <div className="data-left-for-labels-each-label-color resolved-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  Resolved
</span>
<span className="data-left-for-labels-value">
  4 (1.6%)
</span>
    </div>

  </div>

   <div className="data-left-for-labels-each">
     <div className="data-left-for-labels-each-label-color on-hold-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  On Hold
</span>
<span className="data-left-for-labels-value">
  2 (14.1%)
</span>
    </div>

  </div>

  <div className="data-left-for-labels-each">
     <div className="data-left-for-labels-each-label-color escalated-color">

    </div>
    <div className="data-left-for-labels-text">
<span className="data-left-for-labels-title">
  Escalated
</span>
<span className="data-left-for-labels-value">
  2 (14.1%)
</span>
    </div>

  </div>

</div>

</div>
<div className="dashboard-middle-container-horizontal-line">

</div>
<div className="dashboard-middle-container-view-detials-button">
<div className="dashboard-middle-container-view-detials-button-container">
  <span>
  View all incidents
</span>
<EastSharpIcon fontSize=""/> 
</div>
</div>

</div>
  </Row>
</Container>
    </div>
  )
};

export default DashboardMiddleCards;