import React from 'react'

function ContainerTwo() {
    return (
        <div className=''>
            <br /><br />
            <div className=" w-[1000px] mx-auto max-w-[90%] font-[600] text-[1.5rem] mt-3 mb-10 text-center">Our Values</div>
            <ol class="relative border-s  dark:border-gray-700 w-[1000px] mx-auto max-w-[90%]">
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class=" leading-none text-gray-800 font-[600] text-[1.5rem]">Trust</time>
                    <div className="flex gap-2 flex-wrap md:flex-nowrap mt-5 relative">
                        <div style={{ background: `url(https://ecoyaan.com/images/Trust.png)`, backgroundPosition: "center", backgroundSize: "cover" }} className="w-[150px] h-[100px] rounded-md" ></div>
                        <div className="">
                            <h3 class="text-lg font-semibold ">We value the trust of our community.</h3>
                            <p class="text-base font-normal md:text-left text-justify">We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
                        </div>
                    </div>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="leading-none text-gray-800 font-[600] text-[1.5rem]">Authenticity</time>
                    <div className="flex gap-2 flex-wrap md:flex-nowrap mt-5 relative">
                        <div style={{ background: `url(https://ecoyaan.com/images/Authenticity.png)`, backgroundPosition: "center", backgroundSize: "cover" }} className="w-[150px] h-[100px] rounded-md" ></div>
                        <div className="ml-3">
                            <h3 class="text-lg font-semibold ">We are genuine in our mission.</h3>
                            <p class="text-base font-normal md:text-left text-justify">To promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
                        </div>
                    </div>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="leading-none text-gray-800 font-[600] text-[1.5rem]">Impact</time>
                    <div className="flex gap-2 flex-wrap md:flex-nowrap mt-5 relative">
                        <div style={{ background: `url(https://ecoyaan.com/images/Impact.png)`, backgroundPosition: "center", backgroundSize: "cover" }} className="w-[150px] h-[100px] rounded-md" ></div>
                        <div className="ml-3">
                            <h3 class="text-lg font-semibold ">We measure our success by our impact</h3>
                            <p class="text-base font-normal md:text-left text-justify">On the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
                        </div>
                    </div>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="leading-none text-gray-800 font-[600] text-[1.5rem]">Fun & Engaging</time>
                    <div className="flex gap-2 flex-wrap md:flex-nowrap mt-5 relative">
                        <div style={{ background: `url(https://ecoyaan.com/images/FunAndEngaging.png)`, backgroundPosition: "center", backgroundSize: "cover" }} className="w-[150px] h-[100px] rounded-md" ></div>
                        <div className="ml-3">
                            <h3 class="text-lg font-semibold ">Moving towards a sustainable lifestyle</h3>
                            <p class="text-base font-normal md:text-left text-justify">The constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default ContainerTwo