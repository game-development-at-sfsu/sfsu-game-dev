import React from 'react'
import {FaDiscord, FaItchIo} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img
                src="https://i.imgur.com/SPe1rs3.jpeg"
                alt="/"
                className='w-full h-full object-cover'
            />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[20%] md:top-[40%] w-full md:-[50%] max-w-[600px] h-100% flex flex-col text-white p-4 bg-blue-500 rounded'>
                    <h1 className='font-bold text-4xl py-2'>Game Dev Club At SF State</h1>
                    <p>
                        At the Game Development Club at SFSU, you can participate in many student-led projects and exciting game jams. Join our Discord to stay informed and connected. Gators from all majors are welcome to join us and be a part of our vibrant and creative community!
                    </p>
                    <div className='flex justify-center'>
                        <div className='py-4 px-2'>
                            <a
                                href="https://discord.gg/Zn7BFAvqrx"
                                target="_blank"
                                rel="noreferrer"
                                className='px-4 py-2 bg-[var(--primary-discord)] flex items-center font-bold rounded border-0 border-b-4 border-[var(--secondary-discord)] hover:border-[var(--discord-hover)]'
                            >
                                <FaDiscord size={30} className='mr-3' />
                                Discord
                            </a>
                        </div>
                        <div className='py-4 px-2'>
                            <a
                                href="https://game-dev-club-sf-state.itch.io/"
                                target="_blank"
                                rel="noreferrer"
                                className='px-4 py-2 bg-[var(--primary-itch)] flex items-center font-bold rounded border-0 border-b-4 border-[var(--secondary-itch)] hover:border-[var(--itch-hover)]'
                            >
                            <FaItchIo size={30} className='mr-3' />
                                Itch.io
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
