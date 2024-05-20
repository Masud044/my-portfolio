import About from "../About/About";
import Skill from "../Skill/Skill";
import Banner from "./Banner";

import Navber from "./Navber";


const Home = () => {
    return (
        <div>
             <Navber></Navber>
             
              <Banner ></Banner>
            
              
              <About></About>
              <Skill></Skill>
        </div>
    );
};

export default Home;