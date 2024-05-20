import { Cursor, useTypewriter } from 'react-simple-typewriter'
import image from '../../assets/77.jpg'


const BannerDescription = () => {
    const [type] = useTypewriter({
         words:[' FullStack Developer',' Frontend Developer',' Backend Developer'],
         loop:{},
         typeSpeed:120,
         deleteSpeed:80,
    });
    return (
        <div id="BannerDescription" className='md:grid md:grid-cols-2 mt-24 md:mt-0'>
             <div className='md:mt-40 text-center md:text-start'>
                <h1 className='font-medium  text-4xl text-white mb-3'>Hi</h1>
                <h1 className='font-medium text-4xl text-white mb-5'>I'm Masud <span className='font-semibold text-4xl text-cyan-400'> Mia</span> </h1>
                <h1 className="text-white font-medium text-2xl">I'm a 
                   
                    <span className='text-red-500 font-medium text-2xl'>
                    { type}
                    </span>
                    <span><Cursor cursorColor='red'></Cursor></span>
                </h1>


             </div>
             <div className='md:flex-none flex items-center justify-center mt-40'>
               <img  className='rounded-full '  src={image} alt="pic" width={250} height={250}   />
            </div>
             
        </div>
    );
};

export default BannerDescription;