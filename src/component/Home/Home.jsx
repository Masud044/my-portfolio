import About from "../About/About";
import Contact from "../Contact/Contact";
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
              <Contact></Contact>
        </div>
    );
};

export default Home;