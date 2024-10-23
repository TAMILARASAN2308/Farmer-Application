import React from 'react';
import banner from '../assets/banner.gif';
import { Check, CirclePlay, MicOffIcon } from 'lucide-react';

const Section1 = () => {
  return (
     <div className="section1 min-h-[70vh] flex flex-col lg:flex-row p-4 max-w-7xl mx-auto w-full">
      <div className="left flex-1 flex items-center justify-center lg:pr-4">
        <div className="text-center lg:text-center">
          <h1 className='text-5xl font-bold my-5'>Landing Page <br />inspired by Yogeshkannah</h1>
          <ul className='p-5 flex flex-col gap-3 font-medium'>
            <li className='flex items-center gap-2'><Check className='text-green-500' /> Responsive</li>
            <li className='flex items-center gap-2'><Check className='text-red-500' /> Made using React and Tailwind</li>
            <li className='flex items-center gap-2'><MicOffIcon className='text-green-500' /> Deployed on Vercel</li>
          </ul>
          <div className="buttons flex gap-4 items-center my-5">
            <button className='px-2 py-2 border rounded-md text-lg flex gap-2 items-center bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 '>Start for free</button>
            <button className='px-2 py-2 border rounded-md text-lg flex gap-2 items-center text-slate-700 border-slate-400 font-medium transition-all duration-300 ease-in-out hover:text-green-600 '><CirclePlay /> How it Works?</button>
          </div> 
          <p className="text-green-600 text-sm font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> 
        </div>
      </div>
      <div className="right flex-1 flex items-center justify-center lg:pl-4 mt-4 lg:mt-0">
        <div className='h-full w-full flex items-center justify-center'>
          <img src={banner} alt="Printify" className="object-contain w-full h-full max-w-full" />
        </div>
      </div>
     </div>
   
  );
}

export default Section1;
