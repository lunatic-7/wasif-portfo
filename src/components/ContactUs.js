import React, { useRef } from 'react'
import Address from '../models/Address'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kw59cvw', 'template_qq2s4wh', form.current, 'wxoIAIfokwOTAw5Qo')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                console.log("Message Sent!");
                showMsg();
            }, (error) => {
                console.log(error.text);
            });
    };

    const showMsg = () => {
            document.getElementById("msg").style.visibility = "visible"          
            setTimeout(() => {
                hideMsg();
            }, 3000);
    }

    const hideMsg = () => {
        document.getElementById("msg").style.visibility = "hidden"          
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center bg-[#141414]' id='contactUs'>
                <hr className='h-20 border-none bg-green-700 w-[0.100rem]' />
                <div>
                    <h1 className='font-bold tracking-widest text-[#39b54a] pt-3'>CONTACT US</h1>
                </div>
                <p className='font-semibold text-3xl text-center p-5 text-white lg:text-5xl lg:px-56'>React out for a new project or just say hello</p>
            </div>
            <div className='bg-travel-contact h-fit bg-black bg-center bg-cover lg:flex justify-center py-16 shadow-lg shadow-black' >
                <form ref={form} onSubmit={sendEmail} className='left flex flex-col justify-center lg:w-[40%] lg:bg-black/[0.5]'>
                    <p className='font-bold tracking-widest text-white py-10 text-center lg:text-left lg:px-14'>SEND ME A MESSAGE</p>
                    <div className='flex flex-col justify-center px-[10%] text-white '>
                        <input className='outline-none border-b-2 border-gray-700 py-5 focus:border-green-500 bg-transparent' type="text" name="user_name" placeholder="Your Name" required/>
                        <input className='outline-none border-b-2 border-gray-700 py-5 focus:border-green-500 bg-transparent' type="email" name="user_email" placeholder="Your Email" required/>
                        <textarea className='outline-none border-b-2 border-gray-700 py-5  focus:border-green-500 bg-transparent' placeholder='Your Message' name="message" cols="24" rows="10" required></textarea>
                    </div>
                    <button value="Send" className='font-bold tracking-widest text-white border-2 border-green-500 px-2 py-4 bg-green-500 mx-[10%] my-10 hover:bg-green-700'>SUBMIT</button>
                    <p id='msg' className='invisible text-green-600 mb-4 p-1 bg-black text-center font-mono text-lg font-semibold'>Message Sent Successfully!</p>
                </form>
                <div className='right lg:w-[25%] py-10 lg:bg-[#121212]'>
                    <h1 className='hidden lg:block font-bold tracking-widest text-white lg:px-16'>CONTACT INFO</h1>
                    <Address ad_name="Where to Find Me" ad="Javed Colony, Sohna (122103) Distt. Gurgaon" />
                    <Address ad_name="Email Me At" ad="wasif1607@gmail.com" />
                    <Address ad_name="Call Me At" ad="Phone: (+91) 8318693480" />
                    <div className='flex flex-row justify-center items-center mt-16 pb-20 space-x-[5%] lg:items-start lg:justify-start lg:px-16'>
                        <i className="fa-brands fa-instagram text-white text-xl hover:text-green-500"></i>

                        <a href="https://github.com/lunatic-7" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-white text-xl hover:text-green-500"></i></a>

                        <a href="https://www.linkedin.com/in/wasif-nadeem-745225220/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in text-white text-xl hover:text-green-500"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs