import React, { useState } from 'react'
import { MdEco } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Footer() {
    const [email, setEmail] = useState("ClickMe_Demo@gmail.com");
    const [alertBox, setAlertBox] = useState(false);

    function showSubscription() {
        if (!email) return alert("Email field is empty :(")
        setAlertBox(true);
        setTimeout(() => { setAlertBox(false) }, 5000)
    }
    return (
        <div className='w-full mt-10 bg-slate-200'>
            <div className={` ${alertBox ? "top-10 text-center" : "top-[-300px]"} duration-300 transition-all fixed bg-black text-white w-fit min-w-[300px] p-2 rounded-xl shadow-2xl  left-2/4 -translate-x-2/4 z-30`}>
                <div className="m-1 border border-gray-700 rounded-md p-3">✅ Subscription Success by <span className='text-emerald-500'>{email}</span> <br />
                    <div className="text-[12px] text-gray-400 mt-1 text-center">Updates and Offers will arrival soon</div>
                </div>
            </div>
            <footer className="rounded-lg shadow mt-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to='/' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse text-emerald-600">
                            <span className='text-[2rem]'><MdEco /></span>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Ecoyaan</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/AboutUs" className="hover:underline me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 flex items-center gap-5">
                        <span>Follow Us: </span>
                        <div className=" flex items-center gap-5 text-[1.5rem]">
                            <span className=' text-pink-600'><FaSquareInstagram /></span> <span className=' text-blue-600'><FaFacebookSquare /></span> <span className=' text-sky-600'><FaSquareXTwitter /></span> <span className=' text-cyan-600 text-[1.7rem]'><CiLinkedin /></span>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5 text-left flex-wrap mt-10">
                        <div className="flex justify-normal gap-6 text-left flex-wrap text-[14px]">
                            <div className="flex items-center gap-3 flex-col ">
                                <div className="font-[600] w-full">Company</div>
                                <Link to='/AboutUs' className="text-gray-500 w-full cursor-pointer hover:underline">About Us</Link>
                                <div className="text-gray-500 w-full cursor-pointer hover:underline">Sell on Ecoyaan</div>
                                <div className="text-gray-500 w-full cursor-pointer hover:underline">Careers</div>
                            </div>
                            <div className="flex items-center gap-3 flex-col">
                                <div className="font-[600]  w-full">Links</div>
                                <div className="text-gray-500 w-full cursor-pointer hover:underline">Privacy Policy</div>
                                <div className="text-gray-500 w-full cursor-pointer hover:underline">Terms of use</div>
                            </div>
                            <div className="flex items-center gap-3 flex-col">
                                <Link to={'https://www.google.com/maps/place/Sri+Krishna+Vilasa/@12.9001361,74.8330247,17z/data=!4m10!1m2!2m1!1s1-N-12T-781%2F1Sri+Krishna+Vilasa,Urvastores,Ashoknagar,Mangalore,Dakshina+Kannada-+575006,Karnataka,+India!3m6!1s0x3ba35a7d6aaaaaab:0xe5e9f8890dc597c7!8m2!3d12.9001361!4d74.8355996!15sCmkxLU4tMTJULTc4MS8xU3JpIEtyaXNobmEgVmlsYXNhLFVydmFzdG9yZXMsQXNob2tuYWdhcixNYW5nYWxvcmUsRGFrc2hpbmEgS2FubmFkYS0gNTc1MDA2LEthcm5hdGFrYSwgSW5kaWGSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F1tm67c4s?entry=ttu'} target='_blank' className="hover:text-emerald-600 font-[600]  w-full">Location</Link>
                                <div className=" text-gray-500">
                                    1-N-12T-781/1 <br />
                                    Sri Krishna Vilasa, <br />
                                    Urvastores, <br />
                                    Ashoknagar(MR), <br />
                                    Mangalore, <br />
                                    Dakshina Kannada- 575006, <br />
                                    Karnataka, India
                                </div>
                            </div>
                        </div>
                        <div className="p-4 rounded-md bg-emerald-600 w-[350px] text-white hover:shadow-2xl hover:scale-105 duration-300 transition-all">
                            <div className="font-[600] text-[0.9rem]">Subscribe to receive updates on blogs, future launches and more !</div>
                            <div className="flex items-center justify-center gap-3 mt-2">
                                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} name='Email' className='px-2 py-1 text-[14px] text-black w-full rounded-md' />
                                <button onClick={() => showSubscription()} className='flex items-center justify-center animate-pulse text-white bg-emerald-800 px-2 py-1 rounded-md gap-2'>{alertBox ? <span className=' animate-spin'><AiOutlineLoading3Quarters /></span> : <><FaPaperPlane />Subscribe</>}</button>
                            </div>
                            <div className="text-[12px] mt-2">
                                By subscribing, you agree to receive notifications <br />
                                <span className='underline'>Privacy Policy</span>
                            </div>
                        </div>

                    </div>
                    <br />
                    <div className="text-center text-emerald-100 rounded-md px-3 py-2 mx-auto w-fit bg-emerald-600 flex gap-2 items-center">
                        <span> © 2023</span> <Link to="/" className="hover:underline flex items-center"><MdEco /> Ecoyaan™.</Link> <span> All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer