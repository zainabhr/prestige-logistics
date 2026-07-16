import { NavLink } from "react-router-dom";

function Sidebar() {
    const toggleSidebar = () =>{
        document.querySelector(".sidebar").style.display = "none"
    }
    console.log(window.innerWidth)
    const handleLinkClick = () => {
        if(window.innerWidth < 680 ){
            document.querySelector(".sidebar").style.display = "none"; 
        }
};
    return (
        <div className="sidebar">
            <button 
                className="close"
                onClick={toggleSidebar}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            <h2>Prestige Logistics</h2>
            <ul>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/dashboard"><i className="fas fa-home "></i>Home</NavLink></li>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/users"><i className="fas fa-users "></i>Users</NavLink></li>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/drivers"><i className="fas fa-truck "></i>Drivers</NavLink></li>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/restaurants"><i className="fas fa-utensils "></i>Restaurants</NavLink></li>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/ads"><i className="fas fa-bullhorn "></i>Ads</NavLink></li>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/promo-codes"><i className="fas fa-ticket-alt "></i>Promo Codes</NavLink></li>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/orders"> <i className="fas fa-clipboard-list "></i>Orders</NavLink></li>
                <li><NavLink
                    onClick={handleLinkClick}
                    to="/finance"> <i className="fas fa-money-bill-wave "></i>Finance</NavLink></li>
            </ul>
        </div>
    );
}


export default Sidebar;