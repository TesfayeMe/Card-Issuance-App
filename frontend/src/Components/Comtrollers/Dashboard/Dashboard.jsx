import SideMenu from "../SideMenu/SideMenu";
import Header from "../Header/Header";
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import "./dashboard.css";
import DashboardUppperCards from './DashboardUppperCards'
import { Container, Row, Col, Card } from "react-bootstrap";

import DashboardMiddleCards from './DashboardMiddleCard'
import DashboardRecentActions from './DashboardRecentActions'
import { useEffect, useState } from "react";
const Dashboard = () => {


  const cardData = [
  
    {
    "title": "Total Machines",
    "total": 48,
    "description": "4.1 from last month",
    "icon": "CreditCard",
    "graphData": [
      { "month": "Jan", "instock": 48, 'outstock': 0 },
      { "month": "Feb", "instock": 48, 'outstock': 0 },
      { "month": "Mar", "instock": 48, 'outstock': 0 },
      { "month": "Apr", "instock": 48, 'outstock': 0 },
      { "month": "May", "instock": 48, 'outstock': 0 },
      { "month": "Jun", "instock": 48, 'outstock': 0 }
    ]
  },
    {
    "title": "Total Spare Parts",
    "total": 318,
    "description": "6.3% from last month ",
    "icon": "CreditCard",
    "graphData": [
     { "month": "Jan", "instock": 41, 'outstock': 4 },
     { "month": "Feb", "instock": 30, 'outstock': 8 },
     { "month": "Mar", "instock": 43, 'outstock': 3 },
     { "month": "Apr", "instock": 40, 'outstock': 14 },
     { "month": "May", "instock": 80, 'outstock': 21 },
     { "month": "Jun", "instock": 60, 'outstock': 18 }
    ]
  },
    {
    "title": "Total Inventory (Qty)",
    "total": 4231,
    "description": "2.4% from last month",
    "icon": "CreditCard",
    "graphData": [
      { "month": "Jan", "instock": 120, 'outstock': 6 },
      { "month": "Feb", "instock": 60, 'outstock': 1 },
      { "month": "Mar", "instock": 0, 'outstock': 0 },
      { "month": "Apr", "instock": 0, 'outstock': 2 },
      { "month": "May", "instock": 80, 'outstock': 14 },
      { "month": "Jun", "instock": 122, 'outstock': 4 }
    ]
  },
    {
    "title": "Low Stock Items",
    "total": 11,
    "description": "7.2% from last month",
    "icon": "CreditCard",
    "graphData": [
      { "month": "Jan", "instock": 120, 'outstock': 2 },
      { "month": "Feb", "instock": 60, 'outstock': 2 },
      { "month": "Mar", "instock": 0, 'outstock': 0 },
      { "month": "Apr", "instock": 0, 'outstock': 1 },
      { "month": "May", "instock": 80, 'outstock': 4 },
      { "month": "Jun", "instock": 122, 'outstock': 3 }
    ]
  }
,
    {
    "title": "Pending ID Jobs",
    "total": 3,
    "description": "60.2% from last month",
    "icon": "CreditCard",
    "graphData": [
      { "month": "Jan", "instock": 120, 'outstock': 1 },
      { "month": "Feb", "instock": 60, 'outstock': 1 },
      { "month": "Mar", "instock": 0, 'outstock': 0 },
      { "month": "Apr", "instock": 0, 'outstock': 1 },
      { "month": "May", "instock": 80, 'outstock': 0 },
      { "month": "Jun", "instock": 122, 'outstock': 0 }
    ]
  },
    {
    "title": "Open Incidents",
    "total": 5,
    "description": "17.2% from last month",
    "icon": "CreditCard",
    "graphData": [
      { "month": "Jan", "instock": 120, 'outstock': 3 },
      { "month": "Feb", "instock": 60, 'outstock': 4 },
      { "month": "Mar", "instock": 0, 'outstock': 6 },
      { "month": "Apr", "instock": 0, 'outstock': 0 },
      { "month": "May", "instock": 80, 'outstock': 4 },
      { "month": "Jun", "instock": 122, 'outstock': 5 }
    ]
  }

]
    return (
        <div className="dashboard">
            <SideMenu />
            <div className="dashboard-container">
                <Header />
                <div className="dashboard-content">
                   <div className="dashboard-content-header">
                    <div className="dashboard-content-header-left">
<span className="dashboard-content-header-left-title">Dashboard</span>
<p className="dashboard-content-header-left-p"> Welcome back, Tesfaye! Here's what's happening with your system today.</p>
                    </div>


<div className="dashboard-content-header-right">
<CalendarTodayTwoToneIcon fontSize="50"/>
<span className="dashboard-content-header-right-date">June 08, 2026</span>
                    </div>


                   </div>

                  <Container fluid>
  <Row md={2} lg={3} xl={4} xxl={8} className="g-3 align-items-center"> 
    {
      cardData.map((card, index) => (
        <Col key={index}>
          <DashboardUppperCards {...card} />
        </Col>
      ))
    }
  </Row>
</Container>


<DashboardMiddleCards/>

<DashboardRecentActions/>






                 

                </div>
            </div>

        </div>
    );
}
export default Dashboard;