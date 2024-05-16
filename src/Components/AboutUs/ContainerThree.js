import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";

function ContainerThree() {
    return (
        <>
            <div className="font-[600] text-[2rem] text-center">Our Stories</div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[1200px] mx-auto max-w-[95%]'>
                <section className="my-4 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                        <img src="https://www.ecoyaan.com/images/about-us-founding-team-01.png" alt="" className="w-36 h-40 bg-center bg-cover rounded-md" />
                        <div className="flex items-center justify-center gap-0 flex-col">
                            <div className="px-2 py-1 rounded-md text-[14px]  flex items-center justify-center gap-3 ">Founder, Ecoyaan</div>
                            <div className=" text-center"> <Link to='https://www.linkedin.com/in/abhishek-rao-k' target='_blank' className=' text-[1rem] flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-sky-600 text-white hover:shadow-2xl'><FaLinkedin />Linked In</Link></div>
                        </div>
                        <p className="  text-justify md:text-center text-[14px] mx-auto indent-10 w-full ">We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission. Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.</p>
                    </div>
                </section>
                <section className="my-4 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                        <img src="https://www.ecoyaan.com/images/about-us-founding-team-02.png" alt="" className="w-36 h-40 bg-center bg-cover rounded-md" />
                        <div className="flex items-center justify-center gap-0 flex-col">
                            <div className="px-2 py-1 rounded-md text-[14px]  flex items-center justify-center gap-3 ">Founder, Ecoyaan</div>
                            <div className=" text-center"> <Link to='https://www.linkedin.com/in/sarwanjeetsingh/' target='_blank' className=' text-[1rem] flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-sky-600 text-white hover:shadow-2xl'><FaLinkedin />Linked In</Link></div>
                        </div>
                        <p className=" text-justify md:text-center text-[14px] mx-auto indent-10 w-full ">We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives. As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContainerThree