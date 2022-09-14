import React from 'react'

const Social = ({ brands, title, isHover, hoverRef, href }) => {

    return (
        <>
            <div className='Social flex justify-between items-center px-2' >
                <p className={`px-2 text-green-500 font-semibold ${isHover ? "" : "opacity-0"}`}>{title}</p>
                <div className='border-2 border-white py-1 px-2 rounded-full hover:cursor-pointer' ref={hoverRef}>
                    <a href={href} target="_blank" rel="noreferrer"><i className={`${brands}`}></i></a>
                </div>
            </div>
        </>
    )
}

export default Social