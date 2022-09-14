import React from 'react'

const Address = ({ad, ad_name}) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-10 lg:items-start'>
                <h1 className='font-bold tracking-widest text-[#39b54a] lg:px-16'>{ad_name}</h1>
                <p className='text-gray-500 text-center px-24 lg:text-left lg:px-16'>{ad}</p>
            </div>
        </>
    )
}

export default Address