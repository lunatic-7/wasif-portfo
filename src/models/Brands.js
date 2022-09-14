import React from 'react'
import MovingText from 'react-moving-text'


const Brands = ({ sign, b_name, para, temp_sign }) => {
    return (
        <>
            <div className='flex flex-col items-center pt-10 lg:w-[50%]'>
                <i className={`${sign} text-6xl text-[#39b54a]`}>{temp_sign}</i>
                <MovingText
                    type="shakeMix"
                    duration="10000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none">
                    <h2 className='font-bold tracking-wide text-black text-2xl pt-5'>{b_name}</h2>
                </MovingText>
                <p className='text-center p-[7%] text-gray-500 font-serif tracking-wide text-lg lg:text-lg lg:tracking-normal lg:text-left lg:px-[15%] lg:leading-8 '>{para}</p>
            </div>
        </>
    )
}

export default Brands