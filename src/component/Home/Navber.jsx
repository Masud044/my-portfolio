import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full  bg-violet-950 top-0  h-[80px] right-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-5 px-2 md:px-0 ">
        <div className="">
          <span className="text-[22px] font-serif font-semibold text-white">
            Masud
          </span>
        </div>

        <ul className="hidden md:flex gap-10">
          <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="About"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Skill"
              smooth={true}
              duration={500}
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Education"
              smooth={true}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Work"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          {/* <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Experience"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li> */}
          <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* manuber */}
        <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
          {!nav ? (
            <FaBars className="text-white h-6 w-6" />
          ) : (
            <FaTimes className="text-white h-6 w-6" />
          )}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center bg-[#0a192f] justify-items-end px-3"
          }
        >
          <li className="py-3">
            <Link
              onClick={handleClick}
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-3">
            <Link
              onClick={handleClick}
              className="text-white text-[20px] font-medium cursor-pointer"
              to="About"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-3">
            <Link
              onClick={handleClick}
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Skill"
              smooth={true}
              duration={500}
            >
              Skill
            </Link>
          </li>
          <li className="py-3">
            <Link
              onClick={handleClick}
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Education"
              smooth={true}
              duration={500}
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Work"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          {/* <li className="py-3">
            <Link
              onClick={handleClick}
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Experience"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li> */}
          <li className="py-3">
            <Link
              onClick={handleClick}
              className="text-white text-[20px] font-medium cursor-pointer"
              to="Contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navber;
