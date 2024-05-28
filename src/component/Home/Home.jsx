import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
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
              <Footer></Footer>
        </div>
    );
};

export default Home;