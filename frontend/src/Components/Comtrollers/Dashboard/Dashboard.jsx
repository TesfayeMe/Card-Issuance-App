import SideMenu from "../SideMenu/SideMenu";
import "./dashboard.css";
const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <SideMenu />
            <div className="dashboard-content">
                <h2>
                    Welcome to the Dashboard! Here you can manage your cards, view transactions, and access various features of the Card Issuance App. Use the side menu to navigate through different sections and stay updated with your card activities.
                </h2>
                <p>
                    This dashboard provides an overview of your card management activities, allowing you to easily access important information and perform necessary actions. Whether you want to check your card balance, view transaction history, or manage your account settings, everything is conveniently organized here for your ease of use.
                </p>

            </div>
        </div>
    );
}
export default Dashboard;