import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
    return (
        <div className="featuredInfo">
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Tareas completadas</h2>
                <div className="featuredInfoTasks">
                    <h2 className="featuredInfoTasksTitle">2,415</h2>
                    <span className="featuredInfoText">26.4 %<ArrowUpward className="featuredIcon" /></span>
                </div>
                <p>Comparadas con el último mes</p>
            </div>
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Tareas Rechazadas</h2>
                <div className="featuredInfoTasks">
                    <h2 className="featuredInfoTasksTitle">15</h2>
                    <span className="featuredInfoText">-11.4 %<ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <p>Comparadas con el último mes</p>
            </div>
            <div className="featuredInfoItem">
                <h2 className="featuredInfoTitle">Tareas Pendientes</h2>
                <div className="featuredInfoTasks">
                    <h2 className="featuredInfoTasksTitle">512</h2>
                    <span className="featuredInfoText">5.4 %<ArrowUpward className="featuredIcon" /></span>
                </div>
                <p>Comparadas con el último mes</p>
            </div>
        </div>
    )
}

export default FeaturedInfo;