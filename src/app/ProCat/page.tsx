"use client";

import React, { useState } from 'react'
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import Product from "../components/peoductshow/page"




const Page = () => {
    const [serviceTabs, setServiceTabs] = useState([
        {
            name: "Bathroom",
            active: true,
            productImg: '/assets/product_img/pro1.jpg',
            tab: 1,
        },
        {
            name: "Light",
            productImg: '/assets/product_img/pro2.jpg',
            active: false,
            tab: 2,
        },
        {
            name: "Sofa",
            productImg: '/assets/product_img/pro3.jpg',
            active: false,
            tab: 3,
        },
        {
            name: "Book Self",
            active: false,
            productImg: '/assets/product_img/pro4.jpg',
            tab: 4,
        },
        {
            name: "Classical sittings",
            productImg: '/assets/product_img/pro5.jpg',
            active: false,
            tab: 5,
        },
       


    ]);


    const activeServiceTabs = (i: any) => {
        const temp = serviceTabs.map((item: any, index: any) => {
            i === index ? (item.active = true) : (item.active = false);
            return item;
        });
        setServiceTabs([...temp]);
    };

    return (
        <>
            {/* <div className=" items-center justify-center flex-col mt-20">
                <div className="w-[800px] h-[400px] ml-70">
                    <div className="text-center mt-20 ">  
                    <span className='text-6xl '>Categories</span> 
                    </div>
                     <div className="flex justify-center items-center mb-10 mt-5">
                        <ol className="flex space-x-2">
                            <li>
                                <Link href="/" className=" hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>›</li>
                            <li>
                                <Link href="/" className=" hover:underline">
                                    Shop
                                </Link>
                            </li>
                        </ol>
                    </div>
                    <div className='mt-10 mb-10'>
                        <ul className="flex gap-2.5">
                            {serviceTabs?.map((item, i) => {
                                if (item) {
                                    return (
                                        <li
                                            key={i}
                                            className={item.active ? "active" : ""}
                                            onClick={() => activeServiceTabs(i)}
                                        >
                                            
                                             <div className="flex flex-col items-center">
                                          <div className={`w-32 h-32 rounded-full flex items-center justify-center bg-gray-100 border border-gray-300 hover:border-black transition-all ${item.active ? '!border-2 !border-black' : '' }`}>
                                                <Image
                                                    src={item?.productImg} // Ensure a valid string
                                                    alt={item.name}
                                                    width={100}
                                                    height={100}
                                                    className="hover:scale-110 object-cover !w-20 !h-20 rounded-full transition-transform duration-300 ease-in-out"
                                                />
                                            </div>
                                            <p className={`mt-2 text-sm font-semibold ${item.active ? 'text-blue-500' : ''} `}>{item.name}</p>
                                           </div>
                                        </li>


                                    );
                                }
                                return null;
                            })}
                        </ul>
                        </div>
                    </div> */}
                    <div className="flex flex-col items-center justify-center mt-20 px-4">
    <div className="max-w-[800px] w-full h-auto mx-auto">
        <div className="text-center mt-10">
            <span className="text-4xl md:text-6xl">Categories</span>
        </div>
        <div className="flex justify-center items-center mb-10 mt-5">
            <ol className="flex space-x-2">
                <li>
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>›</li>
                <li>
                    <Link href="/" className="hover:underline">
                        Shop
                    </Link>
                </li>
            </ol>
        </div>
        <div className="mt-10 mb-10">
            <ul className="flex flex-wrap gap-4 md:gap-2.5 justify-center">
                {serviceTabs?.map((item, i) => {
                    if (item) {
                        return (
                            <li
                                key={i}
                                className={item.active ? "active" : ""}
                                onClick={() => activeServiceTabs(i)}
                            >
                                <div className="flex flex-col items-center">
                                    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gray-100 border border-gray-300 hover:border-black transition-all ${item.active ? '!border-2 !border-black' : ''}`}>
                                        <Image
                                            src={item?.productImg}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="hover:scale-110 object-cover w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-300 ease-in-out"
                                        />
                                    </div>
                                    <p className={`mt-2 text-sm font-semibold ${item.active ? 'text-blue-500' : ''}`}>{item.name}</p>
                                </div>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </div>
    </div>
</div>


                    <div className="">
                        {serviceTabs?.map((item, i) => {
                            if (item.active && item.tab === 1) {
                                return <Product data={ {productImg: '/assets/product_img/pro1.jpg', name: 'Bathroom' }} />;
                            }

                            if (item.active && item.tab === 2) {
                                return <Product data={ {productImg: '/assets/product_img/pro2.jpg', name: 'Light' }} />;
                            }
                            if (item.active && item.tab === 3) {
                                return <Product data={ {productImg: '/assets/product_img/pro3.jpg', name: 'Sofa' }} />;
                            }

                            if (item.active && item.tab === 4) {
                                return <Product data={ {productImg: '/assets/product_img/pro4.jpg', name: 'Book Self' }} />;
                            }

                            if (item.active && item.tab === 5) {
                                return <Product data={ {productImg: '/assets/product_img/pro5.jpg', name: 'Classical sittings' }} />;
                            }

                        })}
                    </div>
        </>

    )
}

export default Page