import { FaGraduationCap } from "react-icons/fa";

import logo from '../../assets/BSMRSTU_View.jpg'

const Education = () => {
    return (

        <div name='Education' className="bg-[#FFFAE6] mt-10 mb-10  h-screen max-w-[900px] mx-auto">
              
              <div className="flex justify-center items-center mb-10">
               
                <FaGraduationCap className="w-10 h-8 mt-10 "></FaGraduationCap>
                  <h1 className=" text-center text-4xl font-medium mt-10">My <span className="text-cyan-400">Education</span> </h1>
                </div>
               
                <div className="md:flex gap-2 w-5/6 justify-center mx-auto shadow-2xl shadow-slate-950 mt-20  bg-white  ">
                      
                           <img className="w-40 h-32 mx-auto object-cover" src={logo} alt="image" />
                       
                        <div>
                        <h1 className="mt-2 text-xl font-medium text-black text-center md:text-start">Bachelor of Science in Computer Science and Engineering</h1>
                        <h1 className="mt-2 mb-2 font-sans text-center md:text-start">Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalgonj, Bangladesh</h1>
                        <p className="font-medium text-cyan-400 text-center md:text-start">2018-2022 | Completed</p>
                        </div>
                           
                       
                  </div>
                  
              </div>


 
        
    
    );
};

export default Education;