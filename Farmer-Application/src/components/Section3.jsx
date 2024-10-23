import React from 'react';
import developerImage from '../assets/developerimage.gif';
import { ArrowRight } from 'lucide-react';

const Section3 = () => {
  return (
    <div className='bg-slate-200 w-full'>
      <div className='section3 flex flex-col p-4 items-center justify-evenly gap-4 max-w-7xl mx-auto w-full'>
        {/* Card Section */}
        <div className="card w-full max-w-4xl bg-white rounded-3xl flex flex-col sm:flex-row gap-4 items-center my-10">
          <div className="left w-full sm:w-1/2 h-full">
            <img src={developerImage} alt="" className='h-full w-full object-cover rounded-3xl' />
          </div>
          <div className="right w-full sm:w-1/2 p-5">
            <h1 className='font-bold text-3xl'>Looking For New Website??</h1>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sed nemo tenetur iusto dolore veniam sunt ducimus molestias! Eum, quos iure autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sed nemo tenetur iusto dolore veniam sunt ducimus molestias! Eum, quos iure autem.</p>
            <button className='my-10 rounded-md text-lg flex gap-2 items-center text-green-600 font-medium transition-all duration-300 ease-in-out hover:text-green-700'>Get Yours Now<ArrowRight /></button>
          </div>
        </div>

        {/* Bottom Brands Section */}
        <div className='my-5 flex flex-wrap justify-center gap-4 w-full'>
          <div className='w-full sm:w-1/3 lg:w-1/4 flex flex-col justify-evenly h-80 p-4'>
            <img src="https://github.com/apple.png" alt="APPLE" className='w-1/4 rounded-md mx-auto' />
            <h2 className='text-xl font-bold text-center'><span className='text-green-600'>APPLE</span><br />Iphone, Macbook</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.</p>
          </div>
          <div className='w-full sm:w-1/3 lg:w-1/4 flex flex-col justify-evenly h-80 p-4'>
            <img src="https://github.com/microsoft.png" alt="MICROSOFT" className='w-1/4 rounded-md mx-auto' />
            <h2 className='text-xl font-bold text-center'><span className='text-green-600'>MICROSOFT</span><br />Windows Operating System</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.</p>
          </div>
          <div className='w-full sm:w-1/3 lg:w-1/4 flex flex-col justify-evenly h-80 p-4'>
            <img src="https://github.com/google.png" alt="GOOGLE" className='w-1/4 rounded-md mx-auto' />
            <h2 className='text-xl font-bold text-center'><span className='text-green-600'>GOOGLE</span><br />Search Engine</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
