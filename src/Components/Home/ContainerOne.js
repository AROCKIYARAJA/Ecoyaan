import React, { useEffect, useState } from 'react';
import { MdEco } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { Link } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";


function ContainerOne() {

    const [defaults, setDefaults] = useState(true);
    const [first, setfirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    return (
        <div id='ecoyaan'>

            <div className="mt-14 relative w-full bg-emerald-600 text-white text-center py-2 text-[16px] tracking-wide flex items-center justify-center gap-1">
                <MdEco /> Ecoyaan Friendly
                <span className='hover:underline cursor-pointer font-[500]'>Natural Products</span>
            </div>
            <a href='#ecoyaan' className="fixed bottom-7 right-7 z-30 bg-emerald-900 shadow-2xl rounded-full text-white p-3 text-[1.6rem] ">
                <IoMdRocket />
            </a>
            <div>
                <div>
                    <br /><br />
                    <div className="text-center font-[700] w-[1000px] max-w-full px-3 lg:px-0 mx-auto text-[1.2rem] lg:text-[1.7rem]">
                        At <span className=' text-emerald-600'>Ecoyaan</span>, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
                    </div>
                    <div className="my-5 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center"><WiStars />Think</div>
                        <div className="flex justify-center items-center"><WiStars />Innovate</div>
                        <div className="flex justify-center items-center"><WiStars />Transform</div>
                    </div>
                </div>
                <div className="my-5 w-[1100px] max-w-full p-3 mx-auto text-center" onMouseOver={() => { setDefaults(true); setfirst(false); setSecond(false); setThird(false) }}>
                    {defaults ? <>Consider us your partner for all things. To keep you motivated on the journey, we will provide you with engaging information about climate change, <br /> <span className=' text-emerald-600 font-[500]'>the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</span></> : first ? <div className=' w-fit mx-auto'>
                        <div className="font-[600] text-[1.6rem]">Buy Less, Buy Better!</div>
                        <div className="text-[1rem]">Authentic source of truth for your sustainability needs.</div>
                    </div> : second ? <div className=' w-fit mx-auto'>
                        <div className="font-[600] text-[1.6rem]">Follow us on Instagram</div>
                        <div className="text-[1rem]">For climate news, lifestyle tips, & updates</div>
                    </div> : third ? <div className=' w-fit mx-auto'>
                        <div className="font-[600] text-[1.6rem]">Are you a business that truly cares about sustainability?</div>
                        <div className="text-[1rem]">We would love to work with you</div>
                    </div> : ""}
                </div>
                <div className="flex items-center justify-center gap-5">
                    <Link className='' to={"/AboutUs"} onMouseOver={() => { setDefaults(false); setfirst(true); setSecond(false); setThird(false) }}>About Us</Link>
                    <Link to='https://www.instagram.com/ecoyaan/' className='border px-2 rounded-md border-emerald-600 text-emerald-600' onMouseOver={() => { setDefaults(false); setfirst(false); setSecond(true); setThird(false) }}>Follow Us</Link>
                    <Link to='https://ecoyaan.com/sellOnEcoyaan' className='border px-2 rounded-md border-emerald-600 bg-emerald-600 text-white' onMouseOver={() => { setDefaults(false); setfirst(false); setSecond(false); setThird(true) }}>Get In Touch</Link>
                </div>
                <div className="relative mt-20" onMouseOver={() => { setDefaults(true); setfirst(false); setSecond(false); setThird(false) }}>
                    <div style={{ background: `url(https://ecoyaan.com/images/carousel-3.png)`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[1300px] max-w-[90%] rounded-3xl h-[150px] xs:h-[250px] sm:h-[320px] md:h-[350px] lg:h-[500px] border shadow-lg mx-auto'></div>
                </div>
            </div>
        </div>
    );
}

export default ContainerOne;
