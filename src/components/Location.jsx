import React from 'react'

const Location = () => {
    return (
        <div id='faq' className='mt-4 max-w-[800px] mx-4 md:mx-auto'>
            <img src="/directions.png" alt="Campus map with the CS Lab location. SCI 213." className='rounded-t-lg w-full' />
            <div className='bg-[var(--primary-dark)] rounded-b-lg p-4'>
                <h2 className='text-white text-center pb-4 pt-2'>Join Us at the CS Lab on Thursdays at 4 PM</h2>
                <p className='text-white pb-2'>
                    Enter the <b>Science</b> Building, Room 213. The entrances are marked blue on the map above.
                </p>
            </div>
        </div>
    )
}

export default Location
