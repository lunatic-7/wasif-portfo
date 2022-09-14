import React from 'react'
import img1 from '../assets/js_notes.JPG'
import img2 from '../assets/hacker_news.JPG'
import img3 from '../assets/poems.JPG'
import img4 from '../assets/texter.JPG'
import img5 from '../assets/rps.JPG'
import img6 from '../assets/dsa_notes.JPG'

const Works = () => {
    return (
        <>
            <div className='bg-black pt-[30%] lg:pt-[15%]' id='works'>
                <div className='services flex flex-col items-center'>
                    <h3 className='font-bold tracking-widest text-[#39b54a]'>RECENT WORKS</h3>
                    <h1 className='font-semibold text-4xl text-center p-5 text-white lg:text-6xl lg:px-56'>These are the links to some of my recent works</h1>
                    <hr className="h-0.5 w-[70%] my-7 border-none bg-gray-800 lg:w-[50%]" />
                </div>
                <div className='px-7 pt-3 pb-32 lg:flex flex-wrap flex-row justify-center'>
                    <div className='lg:h-auto lg:w-[40%] py-3 px-3'>
                        <a href="https://hacker-news-pro.netlify.app/" target="_blank" rel="noreferrer" className='hover:opacity-60'><img className="rounded-2xl" src={img2} alt="" /></a>
                        <p className='text-white text-lg font-mono py-2'>Hacker News Top Headlines Website</p>
                        <p className='text-white '>Tech used :</p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>React Js</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>Fast API</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>BootStrap</span></p>
                    </div>
                    <div className='lg:h-auto lg:w-[40%] py-3 px-3'>
                    <a href="https://lunatic-fringe.netlify.app/" target="_blank" rel="noreferrer" className='hover:opacity-60'><img className="rounded-2xl" src={img3} alt="" /></a>
                        <p className='text-white text-lg font-mono py-2'>Simple Poetry Website</p>
                        <p className='text-white '>Tech used :</p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>HTML</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>CSS</span></p>
                    </div>
                    <div className='lg:h-auto lg:w-[40%] py-3 px-3'>
                    <a href="https://casa-js.netlify.app/" target="_blank" rel="noreferrer" className='hover:opacity-60'><img className="rounded-2xl" src={img1} alt="" /></a>
                        <p className='text-white text-lg font-mono py-2'>My JavaScript Code with Hand written notes</p>
                        <p className='text-white '>Tech used :</p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>JavaScript</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>BootStrap</span></p>
                    </div>
                    <div className='lg:h-auto lg:w-[40%] py-3 px-3'>
                    <a href="https://casa-dsa.netlify.app/" target="_blank" rel="noreferrer" className='hover:opacity-60'><img className="rounded-2xl" src={img6} alt="" /></a>
                        <p className='text-white text-lg font-mono py-2'>My DSA Code with Hand written notes</p>
                        <p className='text-white '>Tech used :</p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>React Js</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>BootStrap</span></p>
                    </div>
                    <div className='lg:h-auto lg:w-[40%] py-3 px-3'>
                    <a href="http://texter-pro.netlify.app/" target="_blank" rel="noreferrer" className='hover:opacity-60'><img className="rounded-2xl" src={img4} alt="" /></a>
                        <p className='text-white text-lg font-mono py-2'>Simple Text Formatter</p>
                        <p className='text-white '>Tech used :</p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>React Js</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>BootStrap</span></p>
                    </div>
                    <div className='lg:h-auto lg:w-[40%] py-3 px-3'>
                    <a href="https://casa-rps.netlify.app/" target="_blank" rel="noreferrer" className='hover:opacity-60'><img className="rounded-2xl" src={img5} alt="" /></a>
                        <p className='text-white text-lg font-mono py-2'>Rock, Paper, Scissors Game</p>
                        <p className='text-white '>Tech used :</p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>HTML</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>CSS</span></p>
                        <p className='text-white'>&#10137; <span className='font-bold tracking-widest text-[#39b54a]'>Vanilla JavaScript</span></p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <hr className='h-20 border-none bg-green-700 w-[0.100rem]' />
                </div>
            </div>
        </>
    )
}

export default Works