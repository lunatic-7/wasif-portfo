import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-black py-10'>
        <div className='lg:flex justify-center lg:w-[70%]'>
          <div className='left lg:w-[60%] lg:pt-7'>
            <h1 className='text-green-500 text-2xl font-semibold text-center lg:text-left'>PortFo.</h1>
            <p className='text-gray-500 px-5 py-5 leading-8 lg:px-0 lg:pt-6'>This is my Portfolio Website, I have made this website using React Js + Tailwind + Django, For any query or work, You can contact me from Contact us section. </p>
          </div>
          <div className='right px-5 py-5'>
            <div className='flex flex-col pt-7 lg:flex-row lg:items-center'>
              <input className='bg-[#121212] px-10 py-4 text-center focus:outline-none text-white' type="email" name="" id="" placeholder='Email Address' />
              <button className='font-semibold tracking-widest text-sm text-white border-2 border-green-500 px-4 py-4 bg-green-500 my-10 hover:bg-green-700'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className='text-gray-300 py-5'>
          <p>© Copyright PortFo 2022</p>
        </div>

      </div>
    </>
  )
}

export default Footer