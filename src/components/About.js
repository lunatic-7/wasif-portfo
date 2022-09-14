import React from 'react'
import Ratings from '../models/Ratings'

const About = () => {
  return (
    <div className='bg-[#39b54a]' id='about'>
      <hr className='h-20 border-none bg-white w-[0.100rem] ml-[85%]' />
      <a href='#home' className='text-white bg-black py-4 px-6 fixed top-[88%] ml-[80%] lg:ml-[92.5%]'><i className="fa-solid fa-up-long text-lime-600"></i></a>
      <div className='about flex flex-col items-center pt-20'>
        <h3 className='font-bold tracking-widest'>HELLO THERE</h3>
        <h1 className='font-bold text-4xl text-white lg:text-7xl'>This is my Portfolio</h1>
        <hr className="h-0.5 w-[50%] my-7 border-none bg-green-500" />
        <p className='text-center px-[10%] font-serif tracking-wide text-lg lg:text-2xl lg:tracking-wider lg:px-[20%] lg:leading-10'>My name is Wasif Nadeem, Currently in 2nd year of CSE. I am Full Stack Developer (React + Django), I am also familiar with React Native for Android App Development, Python Programmer, 1 &#11088; at Code Chef (just started with CP). For now I am doing Blockchain Development.
        </p>

      </div>

      <div className='ratings flex flex-col justify-center items-center mt-14 py-10 pb-20 lg:flex-row lg:justify-around'>
        <Ratings rat_name="Certificates" rate_count="10" />
        <hr className='hidden h-36 border-none bg-green-500 w-[0.100rem] lg:block' />
        <Ratings rat_name="Github Repos" rate_count="30" />
        <hr className='hidden h-36 border-none bg-green-500 w-[0.100rem] lg:block' />
        <Ratings rat_name="Internships" rate_count="1" />
        <hr className='hidden h-36 border-none bg-green-500 w-[0.100rem] lg:block' />
        <Ratings rat_name="Years of Experience" rate_count="4" />
      </div>
    </div>
  )
}

export default About