import "./TopBar.css";
import { NotificationsNone, Settings, Person } from "@mui/icons-material";

const TopBar = ()  =>{
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <h2 className="logo">Dashboard</h2>
                </div>
                <div className="topbarRight">
                    <div className="topbarRightIconWrapper">
                        <NotificationsNone />
                    </div>
                    <div className="topbarRightIconWrapper">
                        <Settings className="topRightIcon" />
                    </div>
                    <div className="topbarRightIconWrapper">
                        <Person className="topRightIcon" />
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default TopBar;