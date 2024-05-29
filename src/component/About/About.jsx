import { Slide } from "react-awesome-reveal";
import image from "../../assets/masud2.jpg";
import { FaArrowDown } from "react-icons/fa";
import resume from '../../assets/Resume of Showkat Ali.pdf'

const About = () => {
  return (
    <div name="About" className="mt-40">
      <Slide duration={2000} direction="left">
        {" "}
        <h1 className="text-white text-center text-4xl font-medium ">
          About{" "}
          <span className="text-cyan-400 text-center text-4xl font-medium">
            Me
          </span>{" "}
        </h1>
      </Slide>

      <div className="md:grid md:grid-cols-2  mt-20">
        <Slide duration={2000} direction="left">
          <div className="md:flex-none flex items-center justify-center ">
            <img
              className="rounded-3xl "
              src={image}
              alt="pic"
              width={350}
              height={300}
            />
          </div>
        </Slide>

        <div className="md:mt-0 mt-10">
          <Slide duration={2000} direction="down">
            <h1 className="text-3xl text-center font-medium md:text-justify text-white mb-3">
              I'm Masud
            </h1>
            <h2 className="text-xl text-center md:text-justify text-white mb-5">
              Full Stack Developer
            </h2>
          </Slide>

          <Slide duration={2000} direction="right">
            <p className="text-white md:text-justify text-center  mt-10 text-[22px] p-2">
              I am a Full Stack Developer from Bangladesh. I have been working
              as a web developer for quite some time now. I believe i am a very
              ambitious person who loves to work on making the website work
              well.Working on the web is my passion as i love to work on
              exciting projects.This is the filed i get to express my
              creativity.
            </p>
          </Slide>

          {/* resume download */}

          <Slide duration={2000} direction="right">
            {" "}
            <div className="flex md:justify-start justify-center items-center">
              <a href={resume} download='Resume'>
              <button className="bg-cyan-600 px-9 py-2 rounded-full mt-6 border-none outline-none  text-white font-medium cursor-pointer">
                Resume
              </button>
              </a>
             
              <FaArrowDown className="text-white -ml-8  mt-6" />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
