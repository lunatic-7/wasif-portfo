import React, { useRef, useState } from 'react';
import Button from '../models/Button';
import Hamburger from '../models/Hamburger';
import Social from '../models/Social';

import { useHover } from 'usehooks-ts';
import { Fade } from 'react-reveal';
import MovingComponent from 'react-moving-text'

const Home = () => {

    const hoverRef = useRef(null)
    const hoverRef2 = useRef(null)
    const hoverRef3 = useRef(null)

    const isHover = useHover(hoverRef)
    const isHover2 = useHover(hoverRef2)
    const isHover3 = useHover(hoverRef3)

    const [active, setActive] = useState(false)

    function handleActive(e) {
        if (e.target.checked) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    function checkUncheck() {
        let check = document.getElementById("checker")
        if (check.checked) {
            check.checked = false
            setActive(false)
        } else {
            check.checked = true
            setActive(true)
        }
    }

    return (
        <div className='h-[100%] w-full' id='home'>
            <div className="bg-nature-home w-full h-[100%] bg-black bg-center bg-cover">
                <nav className='p-3 flex justify-between text-center' >
                    <MovingComponent
                        type="shadow"
                        duration="5000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease-in-out"
                        iteration="infinite"
                        fillMode="none">
                        <h1 className='title text-3xl font-semibold text-white'>PortFo<span className='text-5xl text-green-700'>.</span></h1>
                    </MovingComponent>

                    <div className='flex items-center justify-between menu text-sm mt-2 text-green-500 font-medium bg-black px-2 fixed left-[67%] sm:left-[80%] md:left-[83.5%] lg:left-[87%] xl:left-[88%]'>
                        <p className='hover:text-white hover:cursor-pointer'>M E N U</p>
                        <Hamburger />
                    </div>
                    <input id='checker' className='fixed h-10 w-20 cursor-pointer left-[78%] sm:left-[87%] md:left-[89%] lg:left-[91%] xl:left-[91.5%] top-8 z-10 opacity-0' type="checkbox" onClick={handleActive} />
                </nav>
                <Fade right>
                    <section className={`text-white bg-[#0c0c0c] ${active ? "flex" : "hidden"} flex-col space-y-7 top-0 h-screen  w-[70%] left-[40%] md:w-[37%] md:left-[68%] lg:w-[25%] lg:left-[75%] p-10 pr-20 fixed`}>
                        <div className='text-green-500 tracking-widest flex justify-between'>
                            <h1>NAVIGATION</h1>
                            <div className='text-white'>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <ul className='font-semibold text-2xl pt-10'>
                            <a href="#home" onClick={checkUncheck}><li className='cursor-pointer my-5 hover:underline'>Home</li></a>
                            <a href="#about" onClick={checkUncheck}><li className='cursor-pointer my-5 hover:underline'>About</li></a>
                            <a href="#services" onClick={checkUncheck}><li className='cursor-pointer my-5 hover:underline'>Experiences</li></a>
                            <a href="#works" onClick={checkUncheck}><li className='cursor-pointer my-5 hover:underline'>Works</li></a>
                            <a href="#contactUs" onClick={checkUncheck}><li className='cursor-pointer my-5 hover:underline'>Contact Us</li></a>
                        </ul>
                        <div className='text-gray-500 pt-10 text-lg'>
                            Hey there, I am Wasif Nadeem, <b className='hover:text-green-50'>Python Programmer</b> and <b className='hover:text-green-100'>Full Stack Developer</b>.
                        </div>
                        <div className='flex justify-between w-[40%] text-gray-700'>
                            <a href="/"><i className="fa-brands fa-instagram hover:text-white hover:cursor-pointer"></i></a>
                            <a href="https://github.com/lunatic-7" target="_blank" rel="noreferrer"><i className="fa-brands fa-github hover:text-white hover:cursor-pointer"></i></a>
                            <a href="https://www.linkedin.com/in/wasif-nadeem-745225220/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in hover:text-white hover:cursor-pointer"></i></a>
                        </div>
                    </section>
                </Fade>
                <main className='mt-20 p-5 flex items-center justify-center'>
                    <div className='left-container text-white flex flex-col items-center md:items-start md:ml-28'>

                        <h1 className='text-2xl font-semibold text-gray-500 md:pl-4 md:text-gray-300'>  WELCOME TO PORTFO</h1>

                            <MovingComponent
                                type="slideInFromLeft"
                                duration="1500ms"
                                delay="0s"
                                direction="normal"
                                timing="ease-in-out"
                                iteration="1"
                                fillMode="none">
                                <p className='text-3xl p-5 mt-2 text-center font-bold li leading-relaxed lg:text-7xl md:w-[60%] md:text-left md:font-medium'>I'm Wasif Nadeem, Python Programmer And Full Stack Developer</p>
                            </MovingComponent>

                            <div className='flex flex-col mt-7 pt-16 pb-10 lg:flex-row'>
                                <Button href="#works" btn_text="SEE PROJECTS" />
                                <Button href="#contactUs" btn_text="EXPLORE MORE" />
                            </div>
                    </div>

                    <div className='hidden right-container text-white space-y-5 md:flex flex-col '>
                        <Social title="Instagram" brands="fa-brands fa-instagram" hoverRef={hoverRef} isHover={isHover} />
                        <Social href="https://github.com/lunatic-7" title="GitHub" brands="fa-brands fa-github" hoverRef={hoverRef2} isHover={isHover2} />
                        <Social href="https://www.linkedin.com/in/wasif-nadeem-745225220/" title="LinkedIN" brands="fa-brands fa-linkedin-in" hoverRef={hoverRef3} isHover={isHover3} />
                    </div>
                </main>

                <a href="#about"><h1 className='text-white ml-[48%] h-1 text-xs font-bold tracking-widest sm:ml-[62%] lg:ml-[70%] xl:ml-[73%]'><i className="fa-solid fa-chevron-down mr-2 text-green-500"></i> SCROLL DOWN</h1></a>
                <hr className='h-20 border-none bg-green-700 w-[0.100rem] ml-[85%]' />
            </div>

        </div>
    )
}

export default Home