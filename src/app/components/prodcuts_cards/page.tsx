import React from 'react'

interface Props {
    data: {
        title: string, 
        image: string,
        price: string
    }
    }

const page = ({data}: Props) => {

  return (
    <div className="h-70 w-90  mt-20 ">

    <div className="relative bg-gray-100  rounded-lg  ">
          <img
            src={data.image}
            alt="Product"
            className="w-full object-fit rounded-lg h-52"
          />
      </div>
       
    <div className="text-center mt-0">
      <h3 className="text-gray-700 text-lg">{data.title}</h3>
      <p className="text-green-500 text-base ">{data.price}</p>
    </div>
    </div>
    

  )
}

export default page