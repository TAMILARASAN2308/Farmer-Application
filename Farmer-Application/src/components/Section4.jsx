import React from 'react';

const Section4 = () => {
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center my-10'>About Web Development</h1>
            <p className='text-center font-medium text-slate-500 text-base md:text-lg lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam eius tempora.
            </p>
            <div className="Map grid w-full grid-cols-3 grid-rows-3 gap-4 p-8">
                <div className="h-48 w-full flex justify-end items-end">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">HTML</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-end items-start">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">CSS</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-start items-center">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">JavaScript</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-start items-end">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">Node.js</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-center items-center">
                    <div className="h-32 w-36 rounded-lg flex items-center bg-green-600 text-white shadow-lg justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">Web <br />Development</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-start items-end">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">Express</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-center items-end">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">MongoDB</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-start items-start">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">API</p>
                    </div>
                </div>
                <div className="h-48 w-full flex justify-center items-center">
                    <div className="h-24 w-28 rounded-lg flex items-center bg-slate-100 shadow-lg shadow-slate-400 justify-center transition-all duration-300 ease-linear hover:scale-110">
                        <p className="text-center font-bold">More</p>
                    </div>
                </div>
            </div>
            <div className="banner my-5 bg-gradient-to-br from-lime-200 via-green-300 to-green-600 w-full sm:w-4/5 mx-auto rounded-2xl p-12 flex flex-col sm:flex-row justify-between">
                <div className='w-full sm:w-2/3 mb-4 sm:mb-0'>
                    <h1 className='text-xl sm:text-2xl font-bold text-green-800'>
                        A Landing Page Inspired By Printify <br />Created By Shubham Sharma
                    </h1>
                </div>
                <div className='w-full sm:w-1/3 flex justify-center items-center'>
                    <button className='bg-white p-2 px-6 rounded-md shadow-lg transition-all duration-300 ease-linear hover:text-green-600'>Learn More...</button>
                </div>
            </div>
        </div>
    );
}

export default Section4;
