import kitchen from '../../assets/kitchen.png'
import jewelry from '../../assets/jewelryshop.png'
import yoga from '../../assets/yoga.png'
import toy from '../../assets/toymarket.png'
import banksimulation from '../../assets/Banksimulaiton.png'
import univers from '../../assets/universehub.png'
import { Slide } from "react-awesome-reveal";


const Work = () => {
    return (
        <div name='Work' className="">
            <div className="">
                <div>
                    <Slide direction='left' duration={1500} delay={200}> <p className="text-white mt-20 text-center text-4xl font-medium">My <span className="text-cyan-400 text-center text-4xl font-medium">Works</span> </p></Slide>
               
                </div>
                
                   
            
            </div>

           
           <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8 mt-10">
            <Slide duration={1500} direction='left'>
            <div style={{backgroundImage:`url(${yoga})`}}  className="shadow-2xl shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div">
        {/* hover effect */}
            
        <div className='overlay opacity-0 group-hover:opacity-100  text-center' >
             <span className='text-white tracking-wider '>
             Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase,Stripe payment
             </span>
             <div className='flex gap-4 items-center justify-center mt-4'>
                 <a href="https://github.com/Masud044/Yoga-Meditation-School-client/tree/main" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>GitHub</button>
                 </a>
                 <a href="https://assignment-12-6f540.web.app/" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium '>LiveSite</button>
                 </a>

             </div>
        </div>

    </div>
            </Slide>


        <Slide direction='right' duration={2000}>
        <div style={{backgroundImage:`url(${jewelry})`}}  className="shadow-2xl shadow-slate-700 group container rounded-md flex justify-center items-center mx-auto content-div">
        {/* hover effect */}
            
        <div className='overlay opacity-0 group-hover:opacity-100  text-center' >
             <span className='text-white tracking-wider '>
             Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase
             </span>
             <div className='flex gap-4 items-center justify-center mt-4'>
                 <a href="https://github.com/Masud044/jewelry-shop-client" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>GitHub</button>
                 </a>
                 <a href="https://jewelry-shop-9ccba.web.app/" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium '>LiveSite</button>
                 </a>

             </div>
        </div>

    </div>
        </Slide>
        <Slide direction='left' duration={2000}>
        <div style={{backgroundImage:`url(${toy})`}}  className="shadow-2xl shadow-slate-700 group container rounded-md flex justify-center items-center hover:shadow-2xl mx-auto content-div">
        {/* hover effect */}
            
        <div className='overlay opacity-0 group-hover:opacity-100 text-center' >
             <span className='text-white tracking-wider '>
             Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase
             </span>
             <div className='mt-4 flex gap-4 items-center justify-center'>
                 <a href="https://github.com/Masud044/Education-Toy-Market-Place-client/tree/main" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>GitHub</button>
                 </a>
                 <a href="https://assignment-11-client-sit-276f5.web.app/" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>LiveSite</button>
                 </a>

             </div>
        </div>

    </div>
        </Slide>

        <Slide direction='right' duration={2000}>
        <div style={{backgroundImage:`url(${kitchen})`}}  className="shadow-2xl shadow-slate-700 group container rounded-md flex justify-center items-center hover:shadow-2xl mx-auto content-div">
        {/* hover effect */}
            
        <div className='overlay opacity-0 group-hover:opacity-100 text-center' >
             <span className='text-white tracking-wider '>
             Technologies: ReactJs, React Router, JavaScript, Tailwind CSS, Node.js, ExpressJs, MongoDB, Firebase
             </span>
             <div className='mt-4 flex gap-4 items-center justify-center'>
                 <a href="https://github.com/Masud044/chef-recipe-hunter-client/tree/main" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>GitHub</button>
                 </a>
                 <a href="https://assignment-clientsite-10.web.app/" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>LiveSite</button>
                 </a>

             </div>
        </div>

    </div>
        </Slide>
    
   
   <Slide duration={2000} direction='left'>
   <div style={{backgroundImage:`url(${banksimulation})`}}  className="shadow-2xl shadow-slate-700 group container rounded-md flex justify-center items-center hover:shadow-2xl mx-auto content-div">
        {/* hover effect */}
            
        <div className='overlay opacity-0 group-hover:opacity-100 text-center' >
             <span className='text-white tracking-wider '>
             Technologies: ReactJs, React Router, JavaScript, Tailwind CSS
             </span>
             <div className='mt-4 flex gap-4 items-center justify-center'>
                 <a href="https://github.com/Masud044/Bank-simulation" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>GitHub</button>
                 </a>
                 <a href="https://bank-simulate.netlify.app/" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>LiveSite</button>
                 </a>

             </div>
        </div>

    </div>
   </Slide>
   <Slide direction='right' duration={2000}><div style={{backgroundImage:`url(${univers})`}}  className="shadow-2xl shadow-slate-700 group container rounded-md flex justify-center items-center hover:shadow-2xl mx-auto content-div">
        {/* hover effect */}
            
        <div className='overlay opacity-0 group-hover:opacity-100 text-center' >
             <span className='text-white tracking-wider '>
             Technologies: JavaScript, Tailwind CSS
             </span>
             <div className='mt-4 flex gap-4 items-center justify-center'>
                 <a href="https://github.com/Masud044/Universe-hub?tab=readme-ov-file" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>GitHub</button>
                 </a>
                 <a href="https://universe-javascript-project.netlify.app/" target='blank'>
                    <button className='text-white bg-cyan-400 py-2 px-4 rounded-lg font-medium'>LiveSite</button>
                 </a>

             </div>
        </div>

    </div></Slide>
    
   
     
</div>
           
           
             
        </div>
    );
};

export default Work;