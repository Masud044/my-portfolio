import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import cplus from "../../assets/c++.png";
import bootstrap from "../../assets/bootstrap.png";
import c from "../../assets/c.png";
import css from "../../assets/css.png";
import express from "../../assets/express.png";
import firebase from "../../assets/firebase.png";
import github from "../../assets/github.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/nodejs.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import tailwind from "../../assets/tailwind.png";
import git from "../../assets/git.png";
import next from "../../assets/next.png";
import { Slide } from "react-awesome-reveal";

const Skill = () => {
  return (
    <div name="Skill" className=" max-w-[900px] mx-auto justify-center w-full">
        <Slide duration={1500} direction="right"><h1 className="text-white text-center text-4xl font-medium mt-20 mb-10">
        My <span className="text-cyan-400">Skills</span>{" "}
      </h1></Slide>
      
      <Slide cascade direction="left" duration={1500}>
        <div className="w-full  grid md:grid-cols-5 md:gap-8 grid-cols-3 gap-4 text-center py-2 px-2 ">
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={html} alt="html-logo" />
            <p className="my-4 text-white">HTML5</p>
          </div>
           <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={css} alt="css" />
            <p className="my-4 text-white">CSS3</p>
          </div>
         
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-10 mx-auto mt-4 "
              src={javascript}
              alt="javascript"
            />
            <p className="my-4 text-white">Javascript</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={react} alt="react" />
            <p className="my-4 text-white">React</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-4 mx-auto mt-4" src={mongodb} alt="mongodb" />
            <p className="my-4 text-white">Mongodb</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-9 mx-auto mt-4 " src={express} alt="express" />
            <p className="my-4 text-white">Express js</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4" src={firebase} alt="firebase" />
            <p className="my-4 text-white">Firebase</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4 " src={node} alt="node" />
            <p className="my-4 text-white">Node Js</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={redux} alt="redux" />
            <p className="my-4 text-white">Redux</p>
          </div>
          <div className=" shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={cplus} alt="c++" />
            <p className="my-4 text-white">C++</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={c} alt="c" />
            <p className="my-4 text-white">C</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4" src={github} alt="github" />
            <p className="my-4 text-white">Github</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={mysql} alt="mysql" />
            <p className="my-4 text-white">Mysql</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4 " src={tailwind} alt="tailwind" />
            <p className="my-4 text-white">TailwindCss</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 mx-auto mt-4" src={bootstrap} alt="css" />
            <p className="my-4 text-white">BootstrapCss</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-8 text-white mx-auto " src={git} alt="git" />
            <p className="my-4 text-white">Git</p>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-5 text-white mx-auto " src={next} alt="next" />
            <p className="my-4 text-white">Next.js</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Skill;
