import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Prestige Logistics</h2>
            <ul>
                <li><NavLink to="/dashboard"><i className="fas fa-home "></i>Home</NavLink></li>
                <li><NavLink to="/users"><i className="fas fa-users "></i>Users</NavLink></li>
                <li><NavLink to="/drivers"><i className="fas fa-truck "></i>Drivers</NavLink></li>
                <li><NavLink to="/restaurants"><i className="fas fa-utensils "></i>Restaurants</NavLink></li>
                <li><NavLink to="/ads"><i className="fas fa-bullhorn "></i>Ads</NavLink></li>
                <li><NavLink to="/promo-codes"><i className="fas fa-ticket-alt "></i>Promo Codes</NavLink></li>
                <li><NavLink to="/orders"> <i className="fas fa-clipboard-list "></i>Orders</NavLink></li>
                <li><NavLink to="/finance"> <i className="fas fa-money-bill-wave "></i>Finance</NavLink></li>
            </ul>
        </div>
    );
}


export default Sidebar;