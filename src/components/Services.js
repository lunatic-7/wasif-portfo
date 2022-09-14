import React from 'react'
import Brands from '../models/Brands'

const Services = () => {
    return (
        <>
            <div className='bg-white py-[30%] lg:py-[15%]' id='services'>
                <div className='services flex flex-col items-center'>
                    <h3 className='font-bold tracking-widest text-[#39b54a]'>MY EXPERIENCES</h3>
                    <h1 className='font-semibold text-4xl text-center p-5 text-black lg:text-6xl lg:px-56'>What I Have Done In Recent Years</h1>
                    <hr className="h-0.5 w-[70%] my-7 border-none bg-gray-200 lg:w-[50%]" />
                </div>
                <div className='lg:flex lg:px-36 flex-wrap flex-row justify-around'>
                    
                    <Brands sign="fa-brands fa-python" b_name="Python Programmer" para={<>Fluent in Python programming language, I have also done a Python certification course on Udemy <a className='text-green-500 hover:underline' href="https://www.udemy.com/certificate/UC-608dd315-34d5-469d-b28e-cefa94f0edb2/" target="_blank" rel="noreferrer">(Python Zero to Mastery by Andrei Nagoi)</a> I have worked on various projects using Python.</>} />
                    
                    <Brands temp_sign={<><b className='text-5xl'>django</b></>} b_name="Django" para={<>Interest in Python and Web Development led me to Django for <b>Backend Development</b>. I have followed these 2 courses for Mastering Django, 1. <a className='text-green-500 hover:underline' href="https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9" target="_blank" rel="noreferrer">Django course by CodeWithHarry on YouTube</a> and 2. <a className='text-green-500 hover:underline' href="https://www.youtube.com/playlist?list=PL-51WBLyFTg2vW-_6XBoUpE7vpmoR3ztO" target="_blank" rel="noreferrer">Django course by Dennis Ivy on YouTube</a>, I am also doing an Internship in Django right now.</>} />
                    
                    <Brands sign="fa-brands fa-react" b_name="React Js" para={<>Been working on React Js as <b>Frontend Development</b> for quite a while now, Even this website is made using React Js, I have done a <a className='text-green-500 hover:underline' href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noreferrer">Master React course by CodeWithHarry on YouTube</a>, one of my favourite YouTubers.</>}/>

                    <Brands sign="fa-brands fa-react" b_name="React Native" para={<>Have some experience in Android Application Development using React Native, I have also done a React Native certification course on Udemy <a className='text-green-500 hover:underline' href="https://www.udemy.com/certificate/UC-76cffcee-359b-457c-8a7c-7533bed70e07/" target="_blank" rel="noreferrer">(The Complete React Native + Hooks Course by Spephen Grider)</a> I have worked on many projects using React Native.</>} />
                    
                    <Brands sign="fa-solid fa-code" b_name="Competitive Coder" para={<>Just stared with CP (Competitive Programming) using Python, Currently 1 &#11088; at <a className='text-green-500 hover:underline' href="https://www.codechef.com/users/wasif1607" target="_blank" rel="noreferrer">CodeChef</a>, This is my GitHub Repo of Code Chef <a className='text-green-500 hover:underline' href="https://github.com/lunatic-7/CodeChef_git" target="_blank" rel="noreferrer">solved questions</a>. This Repo is constanly updating as I am moving further.</>} />

                    <Brands sign="fa-solid fa-pen-nib" b_name="Poet" para={<>This maybe quite odd to mention here, But I am also a poet, I have written quite a few poetries in recent years, Writing helps me in refreshing my mind and in thinking creatively. You can read some of my writings here on <a className='text-green-500 hover:underline' href="https://allpoetry.com/J%C3%AAr%C3%AD%C3%A7h%C3%B8" target="_blank" rel="noreferrer">All Poetry</a>. </>} />
                </div>
            </div>
        </>
    )
}

export default Services