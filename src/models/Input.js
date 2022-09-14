import React from 'react'

const Input = ({place_name}) => {
    return (
        <>
            <input className='outline-none border-b-2 border-gray-700 py-5 focus:border-green-500 bg-transparent' type="text" placeholder={place_name} />
        </>
    )
}

export default Input