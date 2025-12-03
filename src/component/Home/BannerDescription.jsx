import { Cursor, useTypewriter } from "react-simple-typewriter";
import image from "../../assets/image.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
  FaArrowDown 
} from "react-icons/fa";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";



const BannerDescription = () => {
  
  const [type] = useTypewriter({
    words: [
      " FullStack Developer",
      " Frontend Developer",
      " Backend Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div>
     
<div
    name='Home'
      
      className="md:grid md:grid-cols-2 mt-24 md:mt-0"
    >
      <div  className="md:mt-40 text-center md:text-start">
        <Slide duration={1500} direction="left">
        <h1 className="font-medium  text-4xl text-white mb-3">Hi</h1>
        <h1 className="font-medium text-4xl text-white mb-5">
          I'm Masud{" "}
          <span className="font-semibold text-4xl text-cyan-400"> Mia</span>{" "}
        </h1>
        <h1 className="text-white font-medium text-2xl">
          I'm a<span className="text-red-500 font-medium text-2xl">{type}</span>
          <span>
            <Cursor cursorColor="red"></Cursor>
          </span>
        </h1>
        </Slide>
       
        <Slide direction="left" duration={2000}>
        <div className="mt-10 flex item-center justify-center md:justify-start">
         
          <Link
            className="bg-cyan-600 px-9 py-2 rounded-full  text-white font-medium cursor-pointer"
            to="About"
            smooth={true}
            duration={500}
          >
            About Me 
            
           
          </Link>
          <Link
            className="cursor-pointer"
            to="About"
            smooth={true}
            duration={500}
          >
           <FaArrowDown className="text-white -ml-8 mt-3"/>
           
          </Link>
          </div>
          </Slide>
          
          
        
 <Slide duration={2000} direction="down">
 <div className="flex gap-5 mt-12 md:justify-start justify-center items-center">
          <a href="https://www.linkedin.com/in/md-masudmia/"> <FaLinkedin className="h-8 w-8 text-cyan-400"></FaLinkedin></a>
          <a href="https://github.com/Masud044" target="blank"><FaGithub className="h-8 w-8 text-cyan-400"></FaGithub></a>
         
          {/* <a href="/"><FaInstagramSquare className="h-8 w-8 text-cyan-400"></FaInstagramSquare></a> */}
          <a href="https://www.facebook.com/profile.php?id=100015750668482" target="blank"><FaFacebook className="h-8 w-8 text-cyan-400"></FaFacebook></a>
          
          
        </div>
 </Slide>
        
      </div>
      <Slide duration={2000} direction="right">
      <div className="md:flex-none flex items-center justify-center mt-40">
        <img
          className="rounded-full "
          src={image}
          alt="pic"
          width={250}
          height={250}
        />
      </div>
      </Slide>
      
    </div>
    </div>
    
  );
};

export default BannerDescription;
