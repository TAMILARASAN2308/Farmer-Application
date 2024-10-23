import React from 'react';

const Section2 = () => {
  return (
    <div className='section2 flex flex-col p-4 mx-auto max-w-7xl w-full'>
      <div className='flex flex-wrap justify-center gap-4 w-full'>
        <div className='flex flex-col gap-4 justify-center w-full max-w-xs'>
          <img src="https://github.com/react.png" alt="React" className='w-1/4 rounded-full mx-auto' />
          <h1 className='font-bold text-2xl text-center'>ReactJs</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sed nemo tenetur iusto dolore veniam sunt ducimus molestias!</p>
        </div>
        <div className='flex flex-col gap-4 justify-center w-full max-w-xs'>
          <img src="https://github.com/tailwindcss.png" alt="Tailwind CSS" className='w-1/4 rounded-full mx-auto' />
          <h1 className='font-bold text-2xl text-center'>TailWind CSS</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sed nemo tenetur iusto dolore veniam sunt ducimus molestias!</p>
        </div>
        <div className='flex flex-col gap-4 justify-center w-full max-w-xs'>
          <img src="https://github.com/nextjs.png" alt="Next.js" className='w-1/4 rounded-full mx-auto' />
          <h1 className='font-bold text-2xl text-center'>NextJs</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sed nemo tenetur iusto dolore veniam sunt ducimus molestias!</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
