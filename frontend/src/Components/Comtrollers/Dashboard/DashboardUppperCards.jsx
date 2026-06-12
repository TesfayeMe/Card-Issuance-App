import './dashboard.css'
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import DashboardChart from './DashboardMiddleCard';

import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
// import { AreaChart } from '@mui/x-charts/AreaChart';
const DashboardUppperCards = ({title, total, description, icon, graphData} )=>{



  const inData = [60, 10, 0, 30, 100];
const outData = [2, 60, 3, 11, 50];
const xLabels = ['January', 'February', 'March', 'April', 'May'];

const graphDataIn = graphData[1].in;
const graphDataOut = graphData[1].out;
// const graphDataIn = graphData[1].in;
const stockMonths = [];
const inStock = [];
const outStock = [];
console.log(graphData)
console.log(graphData.month)
console.log(graphData[0])
// console.log(graphData.month)
graphData.forEach(element => {

    stockMonths.push(element.month);
});
console.log("months", stockMonths);
graphData.forEach(element => {

    inStock.push(element.instock);
});
console.log("Ins", inStock)
graphData.forEach(element => {

    outStock.push(element.outstock);
});
console.log("Outs", outStock)



const AreaGradient = () => (
  <defs>
    <linearGradient id="stockGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#1976d2" stopOpacity={0.4} />
      <stop offset="100%" stopColor="#1976d2" stopOpacity={0.0} />
    </linearGradient>
  </defs>
);




return (
    <div className='DashboardUppperCards-container'>
        <div className='card-header'>
            <div className='card-header-icon'>
<BuildSharpIcon/>
            </div>
<div className='card-header-total-and-title'>
    <div className='card-header-total'>
{total}
    </div>
    <div className='card-header-title'>
        {title}
    </div>
</div>
</div>
<div className='card-description'>
    
    4.5% {description}

</div>
<div className='card-graph-data'>

 {/* {graphData}  */}




{/* 
 <Box sx={{ width: 250, height: 100 }}>
      <LineChart
        series={[
          { data: inStock, label: 'In Stock' },
          { data: outStock, label: 'Out Stock' },
        ]}
        xAxis={[{ scaleType: 'point', data: stockMonths }]}
        yAxis={[{ width: 100 }]}
        // margin={{ right: 24 }}
        margin={{ left: -73 }}
        height={120}
        slotProps={{
          line: {
            style: {
              strokeWidth: 2,
            },
          },
        }}
      />
    </Box> */}






 {/* <Box sx={{ width: 178, height: 90 }} style={{backgroundColor: 'green', top: '10px', marginTop: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <LineChart
        series={
            [
          { data: outStock}
        ]
    }
        xAxis={[{ scaleType: 'point', data: stockMonths }]}
        yAxis={[{ width: -20 }]}
        // margin={{ left: -73 }}
        margin={{bottom: -1}}
        // margin={{top: -15}}
        height={120}
        slotProps={{
          line: {
            style: {
              strokeWidth: 2,
            },
          },
        }}
      />
    </Box>  */}


<Box sx={{ height: 90 }}>
      {/* Invisible SVG for the gradient definition */}
      <svg style={{ display: 'block', height: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1976d2" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#1976d2" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      <LineChart style={{marginTop: '-10px'}}
        series={[
          {
            data: outStock,
            area: true,
            showMark: false,
            color: '#1976d2',
          },
        ]}
        xAxis={[{ scaleType: 'point', data: stockMonths }]}
        // These two lines completely remove the axes
        bottomAxis={null}
        leftAxis={null}
        // Removing margins prevents axis space allocation
        margin={{ top: 0, right: 0, bottom: -25, left: -46 }}
        // Use slotProps to ensure the area uses the gradient
        slotProps={{
          area: {
            style: { fill: 'url(#gradient)' }
          },
        }}
      />
    </Box>







</div>
        </div>
    
)
}
export default DashboardUppperCards;