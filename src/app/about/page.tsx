"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Headingpage from '../components/Headingpage/headingpage';



const page = () => {

  const [tesdata, seTestdata] = useState([{
    name: "Vinay Yadav",
    profession: "Full stack Developer (intern)",
    img: "./assets/Aboutpage/v.jpg",
    review: "Vinay is a dedicated intern who excels in full-stack development."
  }, {
    name: "Pankaj Maurya",
    profession: "Full stack Developer (Senior)",
    img: "./assets/Aboutpage/pankajbhai.jpg",
    review: "Pankaj is a senior developer with exceptional skills in modern web technologies."
  },
  
   {
    name: "Sandeep Jha",
    profession: "Full stack Developer (Senior)",
    img: "./assets/Aboutpage/sandeepbhai.jpg",
    review: "Sandeep brings years of experience and expertise to the team."
  },
  {
    name: "Shubham Godiyal",
    profession: "Full stack Developer (Senior)",
    img: "./assets/Aboutpage/shubham.jpeg",
    review: "Shubham is known for his innovative solutions and leadership."
  }])
  return (
    <>

    
    <Headingpage name='about us' />

      {/* <div className="mt-12 overflow-hidden">
        <img src="/assets/Aboutpage/1div.jpg" alt="office" className='object-center hover:scale-110 transition-transform duration-1000' />
      </div>

      <section>
        <div className="text-center mt-15 mb-15">
          <div className="">
            <h1 className="text-5xl font-semibold">Great Design For All</h1>
            <p className="text-xl mt-4 text-gray-500">At Funito, we create affordable designs for the modern home</p>
          </div>
        </div>
      </section> */}
      <div className="mt-12 overflow-hidden">
    <img 
        src="/assets/Aboutpage/1div.jpg" 
        alt="office" 
        className="w-full h-auto object-cover object-center hover:scale-110 transition-transform duration-1000" 
    />
</div>

<section className="px-4">
    <div className="text-center mt-16 mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold">Great Design For All</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-500">
            At Funito, we create affordable designs for the modern home.
        </p>
    </div>
</section>


      {/* <section>
        <div className=" flex bg-stone-400">
          <div className=""><img src="/assets/Aboutpage/divideleft.jpg" alt="" /></div>
          <div className="flex items-center justify-center">
            <div className="max-w-xl text-white p-8 rounded-lg ">
              <div className="flex ml-20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor"><path d="M8 3C5.79086 3 4 4.79086 4 7V9.12602C2.27477 9.57006 1 11.1362 1 13C1 14.4817 1.8052 15.7734 3 16.4646V19V21H5V20H19V21H21V19V16.4646C22.1948 15.7734 23 14.4817 23 13C23 11.1362 21.7252 9.57006 20 9.12602V7C20 4.79086 18.2091 3 16 3H8ZM18 9.12602C16.2748 9.57006 15 11.1362 15 13H9C9 11.1362 7.72523 9.57006 6 9.12602V7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V9.12602ZM9 15H15V16H17V13C17 11.8954 17.8954 11 19 11C20.1046 11 21 11.8954 21 13C21 13.8693 20.4449 14.6114 19.6668 14.8865C19.2672 15.0277 19 15.4055 19 15.8293V18H5V15.8293C5 15.4055 4.73284 15.0277 4.33325 14.8865C3.5551 14.6114 3 13.8693 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13V16H9V15Z"></path></svg>
              </div>
              <h2 className="text-3xl font-semibold ml-20 mb-4">Designs You Desire</h2>
              <p className="text-lg mb-6 ml-20">We love creating furniture you want and will love for years to come. Our designs feature a fusion of unique styles that inspire us - from mid-century modern to contemporary.</p>
              <a href="#" className="border border-white px-6 py-2 text-white hover:bg-white ml-20 hover:text-stone-500 transition">READ MORE</a>
            </div>
          </div>
        </div>
      </section>

      <section>

        <div className="flex justify-center items-center m-20 mb-20">
          <div className="flex space-x-10 text-center">

            <div className="flex flex-col justify-between items-center">
              <div className="mb-2">
                <img src="https://img.icons8.com/ios/50/000000/return-purchase.png" alt="Return Icon" />
              </div>
              <h3 className="text-lg font-semibold">14 Days Return</h3>
              <p className="text-gray-500 w-90">We are able to ship our items to almost anywhere in the world</p>
            </div>


            <div className="flex flex-col items-center border-l border-gray-300 px-6">
              <div className="mb-2">
                <img src="https://img.icons8.com/ios/50/000000/security-checked.png" alt="Security Icon" />
              </div>
              <h3 className="text-lg font-semibold">Security Payment</h3>
              <p className="text-gray-500">Usually fall within the 14-day return policy,</p>
            </div>


            <div className="flex flex-col items-center border-l border-gray-300 px-6">
              <div className="mb-2">
                <img src="https://img.icons8.com/ios/50/000000/headset.png" alt="Support Icon" />
              </div>
              <h3 className="text-lg font-semibold">24/7 Support</h3>
              <p className="text-gray-500">Securely process all of our card transactions</p>
            </div>
          </div>
        </div>

      </section> */}
      <section>
    <div className="flex flex-col md:flex-row bg-stone-400">
        <div className="w-full md:w-1/2">
            <img src="/assets/Aboutpage/divideleft.jpg" alt="Designs" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col justify-center items-start text-white p-8 md:p-12 w-full md:w-1/2">
            <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor">
                    <path d="M8 3C5.79086 3 4 4.79086 4 7V9.12602C2.27477 9.57006 1 11.1362 1 13C1 14.4817 1.8052 15.7734 3 16.4646V19V21H5V20H19V21H21V19V16.4646C22.1948 15.7734 23 14.4817 23 13C23 11.1362 21.7252 9.57006 20 9.12602V7C20 4.79086 18.2091 3 16 3H8ZM18 9.12602C16.2748 9.57006 15 11.1362 15 13H9C9 11.1362 7.72523 9.57006 6 9.12602V7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V9.12602ZM9 15H15V16H17V13C17 11.8954 17.8954 11 19 11C20.1046 11 21 11.8954 21 13C21 13.8693 20.4449 14.6114 19.6668 14.8865C19.2672 15.0277 19 15.4055 19 15.8293V18H5V15.8293C5 15.4055 4.73284 15.0277 4.33325 14.8865C3.5551 14.6114 3 13.8693 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13V16H9V15Z"></path>
                </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Designs You Desire</h2>
            <p className="text-lg mb-6">We love creating furniture you want and will love for years to come. Our designs feature a fusion of unique styles that inspire us - from mid-century modern to contemporary.</p>
            <a href="#" className="border border-white px-6 py-2 text-white hover:bg-white hover:text-stone-500 transition">READ MORE</a>
        </div>
    </div>
</section>

<section className="px-4">
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mt-10 mb-16">
        {/* Feature 1 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs">
            <img src="https://img.icons8.com/ios/50/000000/return-purchase.png" alt="Return Icon" className="mb-2 w-12 h-12" />
            <h3 className="text-lg font-semibold">14 Days Return</h3>
            <p className="text-gray-500">We are able to ship our items to almost anywhere in the world.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs">
            <img src="https://img.icons8.com/ios/50/000000/security-checked.png" alt="Security Icon" className="mb-2 w-12 h-12" />
            <h3 className="text-lg font-semibold">Security Payment</h3>
            <p className="text-gray-500">Securely process all of our card transactions.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs">
            <img src="https://img.icons8.com/ios/50/000000/headset.png" alt="Support Icon" className="mb-2 w-12 h-12" />
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="text-gray-500">Our team is available round the clock for assistance.</p>
        </div>
    </div>
</section>


      {/* <section>
        <div className=" flex bg-gray-600">

          <div className="flex items-center justify-center">
            <div className="max-w-xl text-white rounded-lg ">
              <div className="flex ml-20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor"><path d="M8 3C5.79086 3 4 4.79086 4 7V9.12602C2.27477 9.57006 1 11.1362 1 13C1 14.4817 1.8052 15.7734 3 16.4646V19V21H5V20H19V21H21V19V16.4646C22.1948 15.7734 23 14.4817 23 13C23 11.1362 21.7252 9.57006 20 9.12602V7C20 4.79086 18.2091 3 16 3H8ZM18 9.12602C16.2748 9.57006 15 11.1362 15 13H9C9 11.1362 7.72523 9.57006 6 9.12602V7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V9.12602ZM9 15H15V16H17V13C17 11.8954 17.8954 11 19 11C20.1046 11 21 11.8954 21 13C21 13.8693 20.4449 14.6114 19.6668 14.8865C19.2672 15.0277 19 15.4055 19 15.8293V18H5V15.8293C5 15.4055 4.73284 15.0277 4.33325 14.8865C3.5551 14.6114 3 13.8693 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13V16H9V15Z"></path></svg>
              </div>
              <h2 className="text-3xl font-semibold ml-20 mb-4">Quality At Every Step</h2>
              <p className="text-lg mb-6 ml-20">Rest easy. From choice materials and expert hands, to precision tools and tests, we ensure your product is made of hardy stuff</p>
              <a href="#" className="border border-white px-6 py-2 text-white hover:bg-white ml-20 hover:text-stone-500 transition">READ MORE</a>
            </div>
          </div>

          <div className="ml-26 overflow-hidden "><img src="/assets/Aboutpage/left.jpg" className="hover:scale-110 transition-transform duration-1000" alt="" />
          </div>
        </div>
      </section>

      <section>


<div className="container mx-auto my-12">


        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay]}
          
          
          >
          {tesdata.map((el, index) => {
            return (
              <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <SwiperSlide key={index}>

                  <div className="max-w-xl mx-auto text-center bg-white p-10 rounded-lg shadow-lg mb-4">
                    <div className="text-gray-300 text-4xl mb-3">❝</div>

                    <div className="flex justify-center space-x-1 text-yellow-500 mb-3">
                      <span>⭐ ⭐ ⭐ ⭐ ⭐ </span>

                    </div>

                    <p className="text-gray-500 italic mb-6">
                      "Blood bank canine teeth larynx occupational therapist oncologist
                      optician plaque spinal tap stat strep screen violence joints..."
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full border-2 border-yellow-500 overflow-hidden">
                        <img
                          src={el.img}
                          alt="Profile"
                          className="w-full h-full object-cover"
                          />
                      </div>
                      <h3 className="mt-3 font-semibold text-lg">{el.name}</h3>
                      <p className="text-gray-400 text-sm">{el.profession}</p>
                    </div>
                  </div>

                </SwiperSlide>
              </div>
            )
          }
        )}

        </Swiper>

        </div>

      </section> */}

{/* Quality Section */}
<section>
  <div className="flex flex-col md:flex-row bg-gray-600">
    {/* Text Content */}
    <div className="flex flex-col justify-center text-white p-6 md:p-12 w-full md:w-1/2">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor">
          <path d="M8 3C5.79086 3 4 4.79086 4 7V9.12602C2.27477 9.57006 1 11.1362 1 13C1 14.4817 1.8052 15.7734 3 16.4646V19V21H5V20H19V21H21V19V16.4646C22.1948 15.7734 23 14.4817 23 13C23 11.1362 21.7252 9.57006 20 9.12602V7C20 4.79086 18.2091 3 16 3H8ZM18 9.12602C16.2748 9.57006 15 11.1362 15 13H9C9 11.1362 7.72523 9.57006 6 9.12602V7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V9.12602ZM9 15H15V16H17V13C17 11.8954 17.8954 11 19 11C20.1046 11 21 11.8954 21 13C21 13.8693 20.4449 14.6114 19.6668 14.8865C19.2672 15.0277 19 15.4055 19 15.8293V18H5V15.8293C5 15.4055 4.73284 15.0277 4.33325 14.8865C3.5551 14.6114 3 13.8693 3 13C3 11.8954 3.89543 11 5 11C6.10457 11 7 11.8954 7 13V16H9V15Z"></path>
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Quality At Every Step</h2>
      <p className="text-lg mb-6">Rest easy. From choice materials and expert hands, to precision tools and tests, we ensure your product is made of hardy stuff.</p>
      <a href="#" className="border text-center border-white px-6 py-2 text-white w-1/2 hover:bg-white hover:text-gray-600 transition">READ MORE</a>
    </div>
    
    {/* Image */}
    <div className="w-full md:w-1/2 overflow-hidden">
      <img src="/assets/Aboutpage/left.jpg" className="w-full h-auto hover:scale-110 transition-transform duration-1000" alt="Quality Design" />
    </div>
  </div>
</section>

{/* Testimonial Section */}
<section className="container mx-auto my-12 px-4">
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Autoplay]}
  >
    {tesdata.map((el, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center items-center min-h-[70vh] bg-gray-100">
          <div className="max-w-xl mx-auto text-center bg-white p-8 md:p-10 rounded-lg shadow-lg">
            {/* Quote Icon */}
            <div className="text-gray-300 text-4xl mb-3">❝</div>
            
            {/* Star Rating */}
            <div className="flex justify-center space-x-1 text-yellow-500 mb-3">
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-500 italic mb-6">{el.review}</p>

            {/* User Info */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-500 overflow-hidden">
                <img src={el.img} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-3 font-semibold text-lg">{el.name}</h3>
              <p className="text-gray-400 text-sm">{el.profession}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

    </>
  )
}

export default page