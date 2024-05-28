import { Cursor, useTypewriter } from "react-simple-typewriter";
import image from "../../assets/77.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
  FaArrowDown 
} from "react-icons/fa";
import { Link } from "react-scroll";

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
    <div
      id="BannerDescription"
      className="md:grid md:grid-cols-2 mt-24 md:mt-0"
    >
      <div className="md:mt-40 text-center md:text-start">
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

        <div className="flex gap-5 mt-12 md:justify-start justify-center items-center">
          <a href="/"> <FaLinkedin className="h-6 w-6 text-white"></FaLinkedin></a>
          <a href="/"><FaGithub className="h-6 w-6 text-white"></FaGithub></a>
         
          <a href="/"><FaInstagramSquare className="h-6 w-6 text-white"></FaInstagramSquare></a>
          <a href="/"><FaFacebook className="h-6 w-6 text-white"></FaFacebook></a>
          
          
        </div>
      </div>
      <div className="md:flex-none flex items-center justify-center mt-40">
        <img
          className="rounded-full "
          src={image}
          alt="pic"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default BannerDescription;
