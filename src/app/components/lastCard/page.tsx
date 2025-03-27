import React from 'react'


interface Props {
    data: {
        title: string, 
        imageLink: string
    }
    }

const page = ({data}: Props) => {
  return (
    <div className="cover bg-center relative overflow-hidden">
        <img className='hover:scale-110 transition-transform ease-in-out duration-1000  object-cover ' src={data.imageLink} alt="" />
        <div className="absolute inset-0 flex mt-70 justify-center bg-transparent ">
     <h2 className="text-white text-3xl mt-50">{data.title}</h2>
   </div>
    </div>
    
  )
}

export default page