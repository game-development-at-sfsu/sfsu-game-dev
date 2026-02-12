import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaItchIo } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row items-center justify-center m-auto pt-4'>
                <a href="https://game-dev-club-sf-state.itch.io/" className='text-white flex items-center gap-1 p-1 md:p-2'>
                    <FaItchIo />
                    itch.io
                </a> 
                <a href="https://www.instagram.com/gamedev.sfsu/" className='text-white flex items-center gap-1 p-1 md:p-2'>
                    <FaInstagram />
                    Instagram
                </a>
                <a href="https://discord.gg/Zn7BFAvqrx" className='text-white flex items-center gap-1 p-1 md:p-2'>
                    <FaDiscord />
                    Discord
                </a>
                
            </div>
            <div className='flex items-center m-auto justify-center pb-4 pt-2'>
                <img src="https://i.imgur.com/0S2Z0Jo.png" width="30" height="30" alt="/" className='mr-3' />
                <h1 className='text-xl font-bold text-white'>GAME DEV @ SFSU</h1>
            </div>
        </div>
    )
}
		/*<a href="mailto:sfsugamedev@gmail.com" className='text-white flex items-center gap-1 p-1 md:p-2'>
                    <MdEmail />
                    sfsugamedev@gmail.com
                </a>*/
export default Footer
