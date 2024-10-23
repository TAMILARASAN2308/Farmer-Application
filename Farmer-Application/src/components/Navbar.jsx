import { ChevronDown, House, Menu } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <nav className='fixed top-0 w-full shadow-xl p-3 z-20 bg-white'>
            <div className='max-w-7xl mx-auto flex justify-between items-center max-lg:w-full '>
                <div className="nav-left">
                    <div className='flex items-center'>
                        {/* Menu Dropdown */}
                        <div className="max-lg:flex lg:hidden">
                            <button onClick={() => toggleDropdown('menu')} className='flex items-center text-slate-600'>
                                <Menu size={32} className='text-green-600' />
                            </button>
                            {activeDropdown === 'menu' && (
                                <ul className='absolute left-0 mt-11 w-40 bg-white shadow-lg rounded-md z-10'>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Catalog</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>How it works</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Pricing</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Services</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Blog</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Use-Cases</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Need help?</li>
                                </ul>
                            )}
                        </div>
                        <House className='h-8 w-8 text-green-600' />
                        <h1 className="text-3xl max-sm:text-2xl font-bold text-green-600">HomePage</h1>
                    </div>
                </div>
                <div className='nav-center relative max-lg:hidden'>
                    <ul className='flex gap-6 items-center font-medium text-slate-600'>
                        <li className='cursor-pointer'>Catalog</li>
                        <li className='cursor-pointer' onMouseEnter={() => toggleDropdown('howItWorks')} onMouseLeave={() => toggleDropdown(null)}>
                            <div className='group flex gap-1 items-center'>
                                <h1>How it works</h1>
                                <ChevronDown className='h-5 w-5 rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-180' />
                            </div>
                            {activeDropdown === 'howItWorks' && (
                                <ul className='absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10'>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Step 1: Overview</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Step 2: Setup</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Step 3: Launch</li>
                                </ul>
                            )}
                        </li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer' onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown(null)}>
                            <div className='group flex gap-1 items-center'>
                                <h1>Services</h1>
                                <ChevronDown className='h-5 w-5 rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-180' />
                            </div>
                            {activeDropdown === 'services' && (
                                <ul className='absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10'>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Web Development</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Mobile Development</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>SEO Optimization</li>
                                </ul>
                            )}
                        </li>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer' onMouseEnter={() => toggleDropdown('useCases')} onMouseLeave={() => toggleDropdown(null)}>
                            <div className='group flex gap-1 items-center'>
                                <h1>Use-Cases</h1>
                                <ChevronDown className='h-5 w-5 rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-180' />
                            </div>
                            {activeDropdown === 'useCases' && (
                                <ul className='absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10'>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>E-commerce</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Portfolio</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Blog</li>
                                </ul>
                            )}
                        </li>
                        <li className='cursor-pointer' onMouseEnter={() => toggleDropdown('needHelp')} onMouseLeave={() => toggleDropdown(null)}>
                            <div className='group flex gap-1 items-center'>
                                <h1>Need help?</h1>
                                <ChevronDown className='h-5 w-5 rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-180' />
                            </div>
                            {activeDropdown === 'needHelp' && (
                                <ul className='absolute mt-2 w-40 bg-white shadow-lg rounded-md z-10'>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Contact Support</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>FAQs</li>
                                    <li className='p-2 hover:bg-gray-100 cursor-pointer'>Live Chat</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="nav-right flex gap-5 items-center max-sm:gap-1">
                    <button className='px-5 py-1 border rounded-md border-slate-400 font-medium transition-all duration-300 ease-in-out hover:text-green-600'>Login</button>
                    <button className='px-5 py-1 border rounded-md bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
