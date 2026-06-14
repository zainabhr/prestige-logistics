import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Prestige Logistics</h2>
            <ul>
                <li><Link to="/"><i className="fas fa-home "></i>Home</Link></li>
                <li><Link to="/users"><i className="fas fa-users "></i>Users</Link></li>
                <li><Link to="/drivers"><i className="fas fa-truck "></i>Drivers</Link></li>
                <li><Link to="/restaurants"><i className="fas fa-utensils "></i>Restaurants</Link></li>
                <li><Link to="/ads"><i className="fas fa-bullhorn "></i>Ads</Link></li>
                <li><Link to="/promo-codes"><i className="fas fa-ticket-alt "></i>Promo Codes</Link></li>
                <li><Link to="/orders"> <i className="fas fa-clipboard-list "></i>Orders</Link></li>
                <li><Link to="/finance"> <i className="fas fa-money-bill-wave "></i>Finance</Link></li>
            </ul>
        </div>
    );
}


export default Sidebar;