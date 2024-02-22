import {NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div>
             <div className="flex justify-between p-5">
              <div className="" >
              <h1 className="text-[22px] font-serif font-semibold opacity-75 antialiased">Masud</h1>
             </div>
             <div className="flex gap-20">
                 
                 <NavLink to="/" className={({isActive})=>
                  
                isActive?"text-[20px] font-serif text-red-600"
                  :"text-[20px] font-serif"
                }>Home</NavLink>
                 <NavLink to="/a" className={({isActive})=>

                isActive?"text-[20px] font-serif text-red-500"
                  :"text-[20px] font-serif"
                 
                
                } >About</NavLink>
                 <NavLink to="/s" className={({isActive})=>
                 
                isActive?"text-[20px] font-serif text-red-500"
                  :"text-[20px] font-serif"
                
                } >Skill</NavLink>
                 <NavLink to="/ed" className={({isActive})=>
                 
                 isActive?"text-[20px] font-serif text-red-500"
                   :"text-[20px] font-serif"
                 
                 } >Education</NavLink>
                 <NavLink to="/e" className={({isActive})=>
                 
                 isActive?"text-[20px] font-serif text-red-500"
                   :"text-[20px] font-serif"
                 
                 } >Experience</NavLink>
                 <NavLink to="/w" className={({isActive})=>
                 
                 isActive?"text-[20px] font-serif text-red-500"
                   :"text-[20px] font-serif"
                 
                 } >Work</NavLink>
                 <NavLink to="/c" className={({isActive})=>
                 
                 isActive?"text-[20px] font-serif text-red-500"
                   :"text-[20px] font-serif"
                 
                 } >Contact</NavLink>

             </div>

             </div>
            
         </div>
    );
};

export default Navber;