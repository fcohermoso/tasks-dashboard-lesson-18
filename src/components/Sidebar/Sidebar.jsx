import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Dashboard</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link className="siderListLink" to="/">
                                <Home className="listItemIcon" /> Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;