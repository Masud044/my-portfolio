import About from "../About/About";
import Education from "../Education/Education";
import Skill from "../Skill/Skill";
import Work from "../Work/Work";
import Banner from "./Banner";

import Navber from "./Navber";


const Home = () => {
    return (
        <div>
             <Navber></Navber>
             
              <Banner ></Banner>
            
              
              <About></About>
              <Skill></Skill>
              <Education></Education>
              <Work></Work>
        </div>
    );
};

export default Home;