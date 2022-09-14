import React from 'react'
import Underline from './Underline'

const Ratings = ({rat_name, rate_count}) => {
    return (
        <>
            <div className='flex flex-col'>
                <p className='text-white text-7xl font-bold text-center'>{rate_count}</p>
                <p className='font-bold mt-5 text-center'>{rat_name}</p>
                <Underline wid="100%"/>
            </div>
        </>
    )
}

export default Ratings