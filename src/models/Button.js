import React from 'react'

const Button = ({btn_text, href}) => {
    return (
        <>
            <a href={href} className='border-2 border-white tracking-widest px-20 py-3.5 my-3 font-semibold hover:bg-white hover:text-black shadow-lg shadow-gray-600 hover:animate-pulse hover:cursor-pointer md:mx-3'>{btn_text}</a>
        </>
    )
}

export default Button