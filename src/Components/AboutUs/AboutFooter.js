import React from 'react'
import { Link } from 'react-router-dom'
import { MdEco } from "react-icons/md";
import { FaPaperPlane } from 'react-icons/fa';

function AboutFooter() {
    return (
        <div>
            <footer class="py-12 bg-gray-200 xl:pt-24 shadow-inner">
                <div class="w-full px-4 mx-auto max-w-8xl">
                    <div class="grid gap-12 xl:grid-cols-6 xl:gap-24">
                        <div class="col-span-2">
                            <Link href="" class="flex items-center mb-5 bg-emerald-600 px-2 mx-auto py-1 rounded-md text-white w-fit">
                                <span className=' text-[1.6rem]'><MdEco /> </span>
                                <span class="self-center text-2xl font-semibold whitespace-nowrap ">Ecoyaan</span>
                            </Link>
                            <p class="mb-3 text-justify text-[14px] w-[350px] max-w-full mx-auto">To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
                            <div className="w-[300px] mx-auto max-w-full">
                                <div className="font-[600]">Subscribe</div>
                                <div className="flex items-center gap-3 mt-2">
                                    <input type="Email" placeholder='Email' className='px-2 py-1 bg-transparent border-b border-gray-500' />
                                    <button type='button' className='p-2 rounded-md bg-emerald-600 text-white'><FaPaperPlane /></button>
                                </div>
                                <div className="mt-3 text-[14px] ">Subscribe to receive updates on blogs, future launches and more !</div>
                            </div>
                        </div>
                        <div className=""></div>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold  uppercase text-emerald-600">Help and support</h3>
                            <ul>
                                <li class="mb-4">
                                    <Link to="" rel="noreferrer nofollow" class="font-medium   hover:text-emerald-600 hover:underline">Contact us</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="" rel="noreferrer nofollow" class="font-medium   hover:text-emerald-600 hover:underline">Github discussions</Link>
                                </li>
                                <li class="mb-4 flex items-center">
                                    <Link to="" class="font-medium   hover:text-emerald-600 hover:underline">Work with us </Link>
                                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-2">
                                        New
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold  uppercase text-emerald-600">Follow us</h3>
                            <ul>
                                <li class="mb-4">
                                    <Link to="" rel="noreferrer nofollow" class="font-medium   hover:text-emerald-600 hover:underline">Discord</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="" rel="noreferrer nofollow" class="font-medium   hover:text-emerald-600 hover:underline">Twitter/X</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="" rel="noreferrer nofollow" class="font-medium   hover:text-emerald-600 hover:underline">LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="mb-6 text-sm font-semibold  uppercase text-emerald-600">Legal</h3>
                            <ul>
                                <li class="mb-4">
                                    <Link to="" class="font-medium   hover:text-emerald-600 hover:underline">License (EULA)</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="" class="font-medium   hover:text-emerald-600 hover:underline">Privacy Policy</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="" class="font-medium   hover:text-emerald-600 hover:underline">Terms &amp; Conditions</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="" class="font-medium   hover:text-emerald-600 hover:underline">Brand guideline</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr class="my-8 border-gray-200 dark:border-gray-700 lg:my-12" />
                    <span class="block text-center  dark:text-gray-400 font-">© 2019-<span id="currentYear">2024</span> <Link to="/" className='text-emerald-600'>Ecoyaan™</Link> is a registered trademark. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default AboutFooter