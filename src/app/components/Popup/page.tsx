'use client'
import React, { useState , memo, useEffect } from 'react'

const page = () => {
const [model, setModel] = useState(false)



const closeModel=()=>{
  setModel(false)
}

// setInterval(()=>{
//   setModel(true)
// },3000)


 

useEffect(() => {

  return () => {
    setTimeout(() => {
      setModel(true)
     }, 1000);
  }
}, [])



  return (
  <>
{
  model ? 
  <>
{/* 
<div className="fixed inset-0 z-50 flex items-center justify-center">
  
  
  <div className="w-[750px] h-[396px] bg-white flex ">
    

    <div className="w-full"><img src="assets/BannerImage/newletter.jpg" className='h-fit' alt=""/></div>
    <div className="flex flex-col items-center text-center justify-center relative "><button className=' absolute -mt-90 ml-80 ' onClick={closeModel}>close</button>
          <h2 className="text-2xl font-semibold mb-2">Join the our family</h2>
          <p className="text-gray-600 text-sm mb-4">
            Sign up for our newsletter and receive updates you're looking for: interior inspiration, the latest trends, and discounts.
          </p>
          <div className="w-full flex">
            <input
              type="email"
              placeholder="Enter Your Email ..."
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
              />
            <button className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </div>
              </div>
        </div>
 
   </div> */}
   <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
  <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:w-[750px] h-auto bg-white flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
    
    {/* Left: Image */}
    <div className="w-full md:w-1/2">
      <img src="assets/BannerImage/newletter.jpg" className="w-full h-auto object-cover" alt="Newsletter" />
    </div>

    {/* Right: Content */}
    <div className="w-full md:w-1/2 flex flex-col items-center text-center justify-center p-6 relative">
      {/* Close Button */}
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModel}>
        ✕
      </button>

      <h2 className="text-xl sm:text-2xl font-semibold mb-2">Join Our Family</h2>
      <p className="text-gray-600 text-sm sm:text-base mb-4">
        Sign up for our newsletter and receive updates: interior inspiration, the latest trends, and discounts.
      </p>

      {/* Input & Button */}
      <div className="w-full flex -ml-5">
        <input
          type="email"
          placeholder="Enter Your Email ..."
          className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg hover:bg-gray-800">
          SUBSCRIBE
        </button>
      </div>
    </div>

  </div>
</div>

   </ >
  :
  ''
}     
  </>
  )
}

export default page