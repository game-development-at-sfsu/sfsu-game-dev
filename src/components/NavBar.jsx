import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const location = useLocation();

    const handleNav = () => {
        setNav(!nav)
    }

    const isActive = (path) => location.pathname === path;

    return (
        <div className='w-full min-h-[50px] flex justify-between items-center px-4 py-2 z-20 text-white bg-[var(--nav-bar)] sticky top-0'>
            <div className='flex items-center z-20'>
                <Link to ='/' className='flex items-center'>
                    <img src="https://i.imgur.com/0S2Z0Jo.png" width="30" height="30" alt="/" className='mr-3' />
                    <h1 className='text-xl font-bold text-white'>GAME DEV @ SFSU</h1>
                </Link>
            </div>
	    {/*<ul className='hidden sm:flex px-4'>
                <li className='py-0'>
                    <Link to='/projects' className={`${isActive('/projects') ? 'font-bold' : ''}`}>Projects</Link>
                </li>
                <li className='py-0'>
                    <Link to='/archive' className={`${isActive('/archive') ? 'font-bold' : ''}`}>Archive</Link>
                </li>
            </ul>*/}
            {/* Hamburger Icon 
            <div onClick={handleNav} className='sm:hidden z-20'>
                <FaBars size={20} className='mr-4 cursor-pointer' />
            </div> */}
            {/* Mobile Menu */}
            <div 
                onClick={handleNav}
                className={
                nav
                    ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
                }
            >
	    {/* <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                        <Link to='/' className={`${isActive('/') ? 'font-bold' : ''}`}>Home</Link>
                    </li>
                    <li className='text-2xl py-8'>
                        <Link to='/projects' className={`${isActive('/projects') ? 'font-bold' : ''}`}>Projects</Link>
                    </li>
                    <li className='text-2xl py-8'>
                        <Link to='/archive' className={`${isActive('/archive') ? 'font-bold' : ''}`}>Archive</Link>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default NavBar;
