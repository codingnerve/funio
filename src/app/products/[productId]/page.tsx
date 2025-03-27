"use client"
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'
import { GetServerSideProps } from "next";
import { useRouter } from 'next/navigation';

const page = () => {

    const searchParams = useSearchParams()
    console.log(searchParams, "check router")
    const param = searchParams.get("param1") 

    console.log(param , "check param")

  return (
   <>
   <div>
   <h1>Query Parameters</h1>
      {/* <p>param1: {param1}</p>
      <p>param2: {param2}</p> */}
   </div>
   </>

  )
}

export default page


