import React from 'react'

const Underline = ({wid}) => {
    return (
        <>
            <hr className={`h-0.5 w-[${wid}] my-7 border-none bg-green-500 lg:hidden`} />
        </>
    )
}

export default Underline