import { FacebookIcon, Github, House, InstagramIcon, LinkedinIcon, TwitterIcon, User, YoutubeIcon } from 'lucide-react';
import React, { useState } from 'react';

const Section5 = () => {
    const userFeedbacks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getVisibleCards = () => {
        const start = currentIndex * 3;
        return userFeedbacks.slice(start, start + 3);
    };

    return (
        <div className='bg-slate-200 w-full min-h-screen'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex w-full items-center justify-center my-10 pt-16  max-sm:flex-col">
                    <div className="left w-full lg:w-auto text-center lg:text-left">
                        <h1 className='text-3xl font-bold p-6 lg:p-20'>Trusted by Over 10M sellers around the World</h1>
                    </div>
                    <div className="right w-full lg:w-3/4">
                        <p className='text-justify px-6 lg:pr-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, provident? Atque dolore quod voluptatum, adipisci ea deleniti nesciunt cum commodi officia quo necessitatibus vitae velit labore dolor facere aperiam illo quam recusandae maiores deserunt magnam! Repudiandae iure fuga modi vero officiis alias ipsa fugit eligendi?</p>
                    </div>
                </div>
                <div className="crousal relative w-full max-w-[95%] mx-auto">
                    <div className="overflow-hidden rounded-lg my-10">
                        <div className="flex transition-transform duration-500 ease-in-out gap-2" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                            {userFeedbacks.map((user, index) => (
                                <div key={index} className="w-full flex-shrink-0 p-4 sm:w-1/2 lg:w-1/3">
                                    <Card />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 gap-3">
                        {Array.from({ length: Math.ceil(userFeedbacks.length / 3) }).map((_, index) => (
                            <span
                                key={index}
                                className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="social flex flex-col sm:flex-row justify-between bg-white my-10 p-5 rounded-xl shadow-md">
                    <div className="left flex gap-2 items-center text-green-600 mb-4 sm:mb-0">
                        <House className='h-8 w-8' />
                        <h1 className="text-3xl font-bold">HomePage</h1>
                    </div>
                    <div className="right flex gap-5 items-center justify-center sm:justify-end">
                        <Github className='bg-green-600 text-white p-2 rounded-full h-10 w-10 hover:scale-110 cursor-pointer' />
                        <FacebookIcon className='bg-green-600 text-white p-2 rounded-full h-10 w-10 hover:scale-110 cursor-pointer' />
                        <LinkedinIcon className='bg-green-600 text-white p-2 rounded-full h-10 w-10 hover:scale-110 cursor-pointer' />
                        <InstagramIcon className='bg-green-600 text-white p-2 rounded-full h-10 w-10 hover:scale-110 cursor-pointer' />
                        <TwitterIcon className='bg-green-600 text-white p-2 rounded-full h-10 w-10 hover:scale-110 cursor-pointer' />
                        <YoutubeIcon className='bg-green-600 text-white p-2 rounded-full h-10 w-10 hover:scale-110 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;

export const Card = () => {
    return (
        <div className="card w-full h-72 bg-white rounded-xl p-5">
            <div className='flex items-center my-2 gap-5'>
                <div>
                    <User className='h-14 w-14 rounded-full border-slate-600 border-2' />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">User Name</h1>
                    <p className='text-sm text-slate-500'>[User Position] and [Company]</p>
                </div>
            </div>
            <div className='p-2'>
                <p className="text-sm text-gray-600 text-justify">FeedBack : (Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, voluptatum. Nobis, inventore ipsum vel assumenda voluptate, dolores quis id voluptates cum facilis, culpa )</p>
            </div>
        </div>
    );
};
