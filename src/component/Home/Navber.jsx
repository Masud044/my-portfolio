import {Link, NavLink } from "react-router-dom";

import { useState } from "react";
import img from "../../assets/icons8-menu-94.png";




const Navber = () => {

  const [open,setOpen] = useState(false);

   
    
    
  const handleClick = (e) => {
    e.preventDefault();

    // Get the 'to' attribute from the clicked element (assuming 'to' is used to specify target ID)
    const target = e.target.getAttribute('hreflang');

    // Find the target element in the document
    const targetElement = document.querySelector(target);

    // Calculate the scroll position to the target element, offset by 80px from the top
    const offsetTop = targetElement.offsetTop;
    const scrollToPosition = offsetTop - 80;

    // Scroll to the calculated position with smooth behavior
    window.scrollTo({
        top: scrollToPosition,
        left: 0,
        behavior: 'smooth'
    });
};





    return (
        <div >
             <div className="flex justify-between py-5 px-2 shadow-xl  top-0 left-0 ">
              <div className="" >
              <span className="text-[22px] font-serif font-semibold text-white">Masud</span>
            
             </div>
             
             <div className="flex gap-10">
                 
                <NavLink hrefLang="#home" className={({ isActive}) => 
                 isActive? "text-red-500 text-[20px] font-medium" : "text-white text-[20px] font-medium"
                }>Home</NavLink>
                <NavLink hreflang="#About"  onClick={handleClick}  className={({ isActive}) => 
                 isActive ? "text-red-500 text-[20px] font-medium" : "text-white text-[20px] font-medium"
                 } >About</NavLink>
                <NavLink hrefLang="#Skill" className="text-white text-[20px] font-medium"  >Skill</NavLink>
                <NavLink hrefLang="#experience" className="text-white text-[20px] font-medium"  >experience </NavLink>
                <NavLink  hrefLang="#Education" className="text-white text-[20px] font-medium" >Education</NavLink>
                <NavLink  hrefLang="#Contact" className="text-white text-[20px] font-medium" >Contact</NavLink>
                 
                

             </div>
               
             </div>
             
              
         </div>
    );
};

export default Navber;