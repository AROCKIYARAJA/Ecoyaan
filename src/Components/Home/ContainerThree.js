import React from 'react'
import { PiPlantFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function ContainerThree() {
    return (
        <div>
            <div className="text-center mt-20 flex items-center justify-center">
                <img src="https://ecoyaan.com/images/OurStory4.png" alt="" className='w-[500px]' />
            </div>
            <div className=" mt-20 w-[1400px] max-w-[95%] mx-auto">
                <div className="">
                    <div className="font-[600] text-[0.9rem] md:text-[1.4rem] text-center">For businesses that care deeply about sustainability</div>
                </div>
                <div className="">
                    <ul className='w-[1000px] mx-auto  max-w-full text-[0.8rem] md:text-[1rem] px-3 text-justify'>
                        <li className='my-5 flex items-center gap-2 bg-gray-200 p-2 rounded-md '><span className='text-[0.9rem] md:text-[1.3rem]'><PiPlantFill /></span>Do you run a business that is committed to sustainability in every aspect of your work?</li>
                        <li className='my-5 flex items-center gap-2 bg-gray-200 p-2 rounded-md '><span className='text-[0.9rem] md:text-[1.3rem]'><PiPlantFill /></span>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</li>
                        <li className='my-5 flex items-center gap-2 bg-gray-200 p-2 rounded-md '><span className='text-[0.9rem] md:text-[1.3rem]'><PiPlantFill /></span>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</li>
                    </ul>
                </div>
            </div>
            <div className="w-[970px] max-w-[95%] mx-auto md:text-left text-center">
                <Link to='https://ecoyaan.com/sellOnEcoyaan' className='px-5 py-2 rounded-md bg-emerald-600 text-white font-[500] text-[1rem]'>Contact Us</Link>
            </div>
        </div>
    )
}

export default ContainerThree