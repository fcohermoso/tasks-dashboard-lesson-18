import "./Home.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import LatestTasksWidget from "../../components/LatestTasksWidget/LatestTasksWidget";

const Home = () =>{
    return (
        <div className="home">
            <FeaturedInfo />            
            <div className="widget">                    
                <LatestTasksWidget />
            </div>
        </div>
    )
}

export default Home;
