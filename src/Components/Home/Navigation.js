import React, { useState } from 'react'
import { MdEco } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


function Navigation() {
    const [menu, setMenu] = useState(false);

    return (
        <div className='fixed top-0 w-[100%] bg-white z-20'>
            <div className=" relative flex items-center justify-between py-3 md:px-10 px-3 w-full shadow-md">
                <div className={` flex items-center justify-center gap-1 w-fit px-3 py-[2px] rounded-md bg-emerald-600 text-white text-[1.3rem] font-[500]`}><MdEco /><span>Ecoyaan</span></div>
                <div className={` md:flex items-center justify-center gap-5 hidden`}>
                    <Link to={'/'} className="hover:font-[600] mx-3 duration-300 cursor-pointer hover:underline hover:text-emerald-600">Home</Link>
                    <Link to={'/AboutUs'} className="hover:font-[600] mx-3 duration-300 cursor-pointer hover:underline hover:text-emerald-600">About Us</Link>
                    <Link className="hover:font-[600] mx-3 duration-300 cursor-pointer hover:underline hover:text-emerald-600">Sell on Ecoyaan</Link>
                    <Link className="hover:font-[600] mx-3 duration-300 cursor-pointer hover:underline hover:text-emerald-600">Careers</Link>
                </div>
                <div className="md:hidden block " >
                    <div className="px-3 py-2 rounded-md shadow-md border cursor-pointer" onClick={() => setMenu(!menu)}>{menu ? <RiCloseLargeFill /> : <CiMenuFries />}</div>
                    <div className={`${menu ? " top-[60px] " : "top-[-350px]"} duration-300 transition-all w-[100%] h-fit absolute left-2/4 z-10 -translate-x-2/4 bg-emerald-600 py-5 px-3 rounded-lg`}>
                        <Link to='/' className='text-white w-full hover:bg-emerald-700 block p-3 rounded-md my-3 hover:pl-5 duration-300' onClick={() => setMenu(!menu)}>Home</Link>
                        <Link to='/' className='text-white w-full hover:bg-emerald-700 block p-3 rounded-md my-3 hover:pl-5 duration-300' onClick={() => setMenu(!menu)}>About Us</Link>
                        <Link to='/' className='text-white w-full hover:bg-emerald-700 block p-3 rounded-md my-3 hover:pl-5 duration-300' onClick={() => setMenu(!menu)}>Sell on Ecoyaan</Link>
                        <Link to='/' className='text-white w-full hover:bg-emerald-700 block p-3 rounded-md my-3 hover:pl-5 duration-300' onClick={() => setMenu(!menu)}>Careers</Link>
                        <div className="flex items-center gap-5 w-full px-5 rounded-md py-1 text-[1.3rem]">
                            <span className=' text-white'><FaSquareInstagram /></span> <span className=' text-white'><FaFacebookSquare /></span> <span className=' text-white'><FaSquareXTwitter /></span> <span className=' text-white '><CiLinkedin /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation