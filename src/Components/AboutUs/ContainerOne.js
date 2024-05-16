import React from 'react'
import { Link } from 'react-router-dom'

function ContainerOne() {
  return (
    <div>
      <br /><br /><br />
      <section class="bg-white mt-10">
        <div className="mb-0 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center">About Us</div>
        <div class="p-4 mx-auto max-w-screen-xl text-center">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1>
          <p class="mb-8 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-48">At Ecoyaan, we are more than just a platform. Our goal is to <span className='text-emerald-600 font-[500]'>build a community of eco-conscious people</span> who share a common vision and passion for a more sustainable world.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 ">
              Get started
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <div className="p-5 mx-auto dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded-lg">
          <img src="https://www.ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
          <div className="p-6 shadow-2xl border pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2">
              <div className="inline-block text-[1rem] md:text-2xl font-semibold">We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</div>
            </div>
            <div className="dark:text-gray-800 px-2 md:px-5">
              <div className="list-item indent-1">Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</div>
              <div className="list-item indent-1">Videos, posts, and quizzes on climate change and sustainability</div>
              <div className="list-item indent-1">Events and pledges that invite you to adopt a more sustainable lifestyle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerOne