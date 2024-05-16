import React from 'react';
import { Link } from 'react-router-dom';
import { TbSteam } from "react-icons/tb";

function ContainerFour() {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 w-[1300px] max-w-full mx-auto ">
                <div className=" px-6 mx-auto">
                    <div className="grid items-center justify-center gap-4 xl:grid-cols-3">
                        <div className=" mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold flex items-center gap-2"><span><TbSteam /></span><span>Meet the Team</span></h2>
                            <p className="dark:text-gray-600">Our team at <Link to='/' className='text-emerald-600 font-[600]'>Ecoyaan</Link> is our greatest asset. Comprised of passionate professionals from diverse backgrounds, each member brings unique skills and expertise to the table. Together, we are dedicated to delivering innovative solutions and exceptional service to our clients. Get to know the talented individuals who drive our success and make  <Link to='/' className='text-emerald-600 font-[600]'>Ecoyaan</Link> a leader in the industry.</p>
                        </div>
                        <div className="px-6 xl:col-span-3  mx-auto w-fit">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p className='text-[15px]'>Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business <Link className='text-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white duration-300 transition-all text-[13px]' to='https://www.instagram.com/soulfullymade_crafts/' target='_blank'>Click</Link></p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://www.ecoyaan.com/images/about-us-social-media-team-01.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Shruthi</p>
                                                <p className="text-sm text-emerald-600 px-2 py-[2px] rounded-md bg-gray-300">Social Media Person</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p className='text-[15px]'>Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business <Link className='text-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white duration-300 transition-all text-[13px]' to='https://www.instagram.com/ferozi.conscious/' target='_blank'>Click</Link></p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://www.ecoyaan.com/images/about-us-social-media-team-02.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Urmil</p>
                                                <p className="text-sm text-emerald-600 px-2 py-[2px] rounded-md bg-gray-300">Social Media Person</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p className='text-[15px]'>Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance <Link className='text-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white duration-300 transition-all text-[13px]' to='https://www.behance.net/bodradivya' target='_blank'>Click</Link></p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://www.ecoyaan.com/images/about-us-product-team-01.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Divya</p>
                                                <p className="text-sm text-emerald-600 px-2 py-[2px] rounded-md bg-gray-300">UX Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p className='text-[15px]'>Prashanith is our front-end engineer, who brings the UX designs to life </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://www.ecoyaan.com/images/about-us-product-team-02.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Prashanith</p>
                                                <p className="text-sm text-emerald-600 px-2 py-[2px] rounded-md bg-gray-300">Engineering</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="px-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p className='text-[15px]'>Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://www.ecoyaan.com/images/about-us-product-team-03.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Sai Abhilash</p>
                                                <p className="text-sm text-emerald-600 px-2 py-[2px] rounded-md bg-gray-300">Engineering</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                                        <p className='text-[15px]'>This spot awaits you. Check out our <Link to='https://www.ecoyaan.com/careers' className=' px-2 py-1 rounded-md bg-red-600 text-white duration-300 transition-all text-[13px]' target='_blank'>open positions</Link></p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://www.ecoyaan.com/images/favicon.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">???</p>
                                                <p className="text-sm text-emerald-600 px-2 py-[2px] rounded-md bg-gray-300">Team Ecoyaan.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
        </div>
    )
}

export default ContainerFour;