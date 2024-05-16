import React from 'react'

function ContainerTwo() {
    return (
        <div>
            <div className="my-10">
                <div className="text-center font-[600] flex items-center justify-center w-fit mx-auto px-5 underline text-[1rem] md:text-[1.5rem]">Join our community in creating a more sustainable future for everyone</div>
                <div className="w-[1400px] max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 mt-10">
                    <div className="">
                        <img src="https://ecoyaan.com/images/Impact.png" alt="" className=' scale-90' />
                        <div className="font-[600] text-[0.9rem] md:text-[1.5rem] px-3 py-1 rounded-md">
                            Carefully curated Eco-friendly products
                        </div>
                        <div className="mt-3 text-[0.8rem] md:text-[1.1rem] tracking-wide">We believe that every purchase you make can have a positive impact on the planet and the future. Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</div>
                    </div>
                    <div className="">
                        
                        <video src="https://ecoyaan.com/images/ProductCuration.mp4" autoPlay loop className=' scale-90'></video>
                        <div className="font-[600] text-[0.9rem] md:text-[1.5rem] px-3 py-1 rounded-md">
                            Carefully curated Eco-friendly products
                        </div>
                        <div className="mt-3 text-[0.8rem] md:text-[1.1rem] tracking-wide">We believe that every purchase you make can have a positive impact on the planet and the future. Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerTwo


