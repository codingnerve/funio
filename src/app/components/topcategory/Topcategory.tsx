import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { usePathname } from 'next/navigation';



export default function Topcategory() {
      const [productData, setproductData] = useState([
        {
          productName: "BATHROOM",
          productImg: "/assets/product_img/pro1.jpg",
          id:1,
        },
        {
          productName: "LIGHTING",
          productImg: "/assets/product_img/pro2.jpg",
          id:2,
        },
        {
          productName: "LIVING ROOM",
          productImg: "/assets/product_img/pro3.jpg",
          id:3,
        },
        {
            id:4,
          productName: "OFFICE",
          productImg: "/assets/product_img/pro4.jpg",
        },
        {
            id:5,
          productName: "SEATING",
          productImg: "/assets/product_img/pro5.jpg",
        },
        {
            id:6,
          productName: "TABLE",
          productImg: "/assets/product_img/pro6.jpg",
        },
      ]);

      const currentroute = usePathname()

  return (
    <>
  
    {/* <div className={`mt-10 `}>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={5}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    loop={true} // Enables infinite scrolling
    autoplay={{
        delay: 2000, // Auto-scroll every 2s
        disableOnInteraction: false, // Keep autoplay even when interacted
    }}
    >
    {productData.map((el, index) => {
        return (
            <SwiperSlide key={index}>
          <div className={`relative w-full h-[300px] overflow-hidden ${currentroute == '/' ? ''  : ' !h-40 ' }`}>
           <Link href="/ProCat"> 
           <Image
                src={el.productImg}
                alt=""
                fill
                className={`hover:scale-110 object-cover transition-transform duration-300 ease-in-out ${currentroute == '/' ? '' : '!w-20 !h-20 rounded-full ml-8 !mt-2 ' }`}
               
                />
              </Link>
          </div>
          <div className=" text-black">
            <h4 className={`text-center mt-5 text-1xl font-bold ${currentroute == '/' ? '' : '!-mt-12 text-xs font-semibold '}`}>
              {el.productName}
            </h4>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
  </div> */}
   <div className="mt-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {productData.map((el, index) => (
            <SwiperSlide key={index}>
              <div className={`relative w-full h-[300px] overflow-hidden ${currentroute === '/' ? '' : '!h-40'}`}>
                <Link href="/ProCat">
                  <Image
                    src={el.productImg}
                    alt=""
                    fill
                    className={`hover:scale-110 object-cover transition-transform duration-300 ease-in-out ${currentroute === '/' ? '' : '!w-20 !h-20 rounded-full ml-8 !mt-2'}`}
                  />
                </Link>
              </div>
              <div className="text-black">
                <h4 className={`text-center mt-5 text-1xl font-bold ${currentroute === '/' ? '' : '!-mt-12 text-xs font-semibold'}`}>
                  {el.productName}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
