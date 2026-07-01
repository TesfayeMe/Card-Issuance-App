import { Container, Row, Col, Card } from "react-bootstrap";
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import {Typography } from '@mui/material'; // Using MUI layout utilities
import EastSharpIcon from '@mui/icons-material/EastSharp';
import { ChartsContainer } from '@mui/x-charts/ChartsContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
const SpareUsageTrend =()=>{
    const usageTrendData = [
        { month: 'Jan', usage: 2 },
        { month: 'Feb', usage: 8 },
        { month: 'Mar', usage: 4 },
        { month: 'Apr', usage: 13 },
        { month: 'May', usage: 10 },
        { month: 'Jun', usage: 27 },
        
      ];

    return(
        <div className="spare-usage-trend-container" >
            <div className="spare-usage-trend-header" >
               <span className="spare-usage-trend-title"><strong>Usage Trend</strong> (last 6 months)</span>
               <span>
                <select className="spare-usage-trend-select">
                    <option value="last_6_months">All Parts</option>
                    <option value="last_12_months">MX8100</option>
                    <option value="last_24_months">MX1100</option>
                    <option value="last_24_months">DX3100</option>
                    <option value="last_24_months">DFX</option>
                    <option value="last_24_months">DS4-ES1</option>
                </select>
               </span>
               

            </div>
            
<Box sx={{ width: '100%', height: 200, position: 'relative', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#f5f5f5', padding: '16px' }}>
  <svg style={{ display: 'block', height: 0 }}>
    <defs>
      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1976d2" stopOpacity={0.5} />
        <stop offset="100%" stopColor="#1976d2" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>

  <LineChart 
    // height={170}
    series={[
      { 
        data: usageTrendData.map(item => item.usage), 
        label: 'Parts Used', 
        area: true, 
        showMark: true, 
        color: 'url(#gradient1)',
      }
    ]}
    xAxis={[{ scaleType: 'point', data: usageTrendData.map(item => item.month)  }]}
    yAxis={[{ scaleType: 'linear' }]}
    bottomAxis={null}
    leftAxis={null}
    margin={{ top: 0, right: 0, bottom: -5, left: -5 }}
  />
</Box>
<div className="spare-usage-trend-footer" >
<div className="spare-part-usage-trend-total-parts-used">
    <span>Total Parts Used: </span>
    <span className="spare-usage-trend-total-parts-used-value">
        {usageTrendData.reduce((sum, item) => sum + item.usage, 0)}
    </span>
    <span className="spare-usage-trend-in-percentage">
<NorthOutlinedIcon fontSize="" /> <span>14.5%</span>
    </span>
    <span className="spare-usage-trend-in-percentage-text">
vs last 6 months
    </span>
</div>
<div className="spare-part-usage-trend-manthly-average" >
    <span>Monthly Average: </span>
    <span className="spare-usage-trend-monthly-average-value">
        {(usageTrendData.reduce((sum, item) => sum + item.usage, 0) / usageTrendData.length).toFixed(2)}
    </span>
    <span className="spare-usage-trend-in-percentage-text">
        Parts / Month
    </span>
</div>
</div>
        </div>
    )
}
export default SpareUsageTrend;