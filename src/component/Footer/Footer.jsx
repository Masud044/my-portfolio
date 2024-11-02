
import { Link } from "react-scroll";
import {
    FaPhoneAlt,
    FaLocationArrow,
    FaLinkedin,
    FaGithub,
    FaFacebook,
  } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";
import { Slide } from "react-awesome-reveal";
const Footer = () => {
    return (
        <div className="mt-10 bg-[#0a192f] w-full px-5">

          <Slide direction="down" duration={2000}>  <div className="grid md:grid-cols-3 grid-cols-1 py-2 gap-10">
                <div className="text-white mt-5">
                <h1 className="text-[20px]  font-medium text-white opacity-80 mb-5">Masud | protfolio</h1>
                <p className="font-thin  mb-10">Thank You for visiting <br /> my personal portfolio website
                </p>
                </div>
                <div className="text-white mt-5">
               <h1 className="text-[20px]  font-medium text-white opacity-80 mb-5">Quick Links</h1>
               <ul >
          <li>
            <Link
              className="text-white font-thin cursor-pointer"
              to="Home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-thin cursor-pointer"
              to="About"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-thin cursor-pointer"
              to="Skill"
              smooth={true}
              duration={500}
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
             className="text-white font-thin cursor-pointer"
              to="Education"
              smooth={true}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-thin cursor-pointer"
              to="Work"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
         
          <li>
            <Link
              className="text-white font-thin cursor-pointer"
              to="Contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

                
                </div>
                <div className="text-white mt-5">
   <h1 className="text-[20px]  font-medium text-white opacity-80 mb-5">Contact Info</h1>
   <div>
    <div className="flex items-center gap-2"><FaPhoneAlt className="h-4 w-4 text-cyan-400 opacity-80"></FaPhoneAlt>
   <p className="text-white opacity-80">+8801774528132</p>
   </div>
   <div className="flex items-center gap-2"><MdEmail className="h-4 w-4 text-cyan-400 opacity-80"></MdEmail>
   <a
                href="/"
                className="text-white hover:text-red-600 hover:underline opacity-80"
              >
                masudmia0701@gmail.com
              </a>
   </div>
   <div className="flex items-center gap-2">
    <FaLocationArrow className="h-4 w-4 opacity-80 text-cyan-400 "></FaLocationArrow>
   <p className="text-white opacity-80">Rangpur, Bangladesh</p>
   </div>
   <div className="flex gap-5 mt-4 md:justify-start items-center">
            <a href="https://www.linkedin.com/in/md-masudmia/">
              <FaLinkedin className="h-5 w-5 text-cyan-400  "></FaLinkedin>
            </a>

            <a href="https://github.com/Masud044" target="blank">
              <FaGithub className="h-5 w-5 text-cyan-400 "></FaGithub>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100015750668482" target="blank">
              <FaFacebook className="h-5 w-5 text-cyan-400 "></FaFacebook>
            </a>
          </div>
   
   
   </div>

  
                </div>
            </div></Slide>
             
          
             
        </div>
    );
};

export default Footer;