import React from 'react'

const Section6 = () => {
    const projects = ['CareerRise - JobPortal', 'NexBookStore - BookStore', 'hyperTODO', 'CreativeBlogs - Blog Website']
    const skills = ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs', 'TailWind CSS']
    const more = ['Catalog', 'Pricing', 'Blog', 'Services', 'Use-Case']

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-3 my-10 max-w-[95%] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <div className='text-center'>
                    <h1 className='text-lg font-bold'>My Projects</h1>
                    <ul className='flex flex-col gap-2 my-2 p-2'>
                        {projects.map((project, index) => (
                            <li key={index} className='text-sm text-slate-600'>{project}</li>
                        ))}
                    </ul>
                </div>
                <div className='text-center'>
                    <h1 className='text-lg font-bold'>Skills</h1>
                    <ul className='flex flex-col gap-2 my-2 p-2'>
                        {skills.map((project, index) => (
                            <li key={index} className='text-sm text-slate-600'>{project}</li>
                        ))}
                    </ul>
                </div>
                <div className='text-center'>
                    <h1 className='text-lg font-bold'>HomePage</h1>
                    <ul className='flex flex-col gap-2 my-2 p-2'>
                        {more.map((project, index) => (
                            <li key={index} className='text-sm text-slate-600'>{project}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Section6