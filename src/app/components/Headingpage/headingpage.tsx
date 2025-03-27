import React from 'react'

export default function Headingpage(props:any) {
  return (
    <div className="h-55 border-1 border-gray-300 flex justify-center items-center">
    <div className="">
      <h1 className='text-6xl'>{props.name}</h1>

      <div className=" flex mt-6 ml-14 text-sm" >
        <a href="/" className='flex items-center gap-1'>home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={10} width={10} fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></a>
        <a href="" className='ml-2 text-gray-400'>About Us</a>
      </div>
    </div>
  </div>
  )
}
