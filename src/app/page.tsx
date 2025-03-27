"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import ProductCard from "../app/components/prodcuts_cards/page";
import Lastcard from "../app/components/lastCard/page";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Popup from "../app/components/Popup/page"
import ProCat from "../app/ProCat/page"
import Topcategory from "./components/topcategory/Topcategory";


export default function Home() {





  const [sliderData, setSliderData] = useState([
    {
      slidername: "slider1",
      sliderimg: "/assets/slider_img/slider1.jpg",
      proName: "Hanging Lamp",
      offer: "50% off",
    },
    {
      slidername: "slider2",
      sliderimg: "/assets/slider_img/slider2.jpg",
      proName: "Armchairs",
      offer: "sofas and armchairs",
    },
    {
      slidername: "slider3",
      sliderimg: "/assets/slider_img/slider3.jpg",
      proName: "CristalPant",
      offer: "New Arrivals",
    },
  ]);

  const [productData, setproductData] = useState([
    {
      productName: "BATHROOM",
      productImg: "/assets/product_img/pro1.jpg",
    },
    {
      productName: "LIGHTING",
      productImg: "/assets/product_img/pro2.jpg",
    },
    {
      productName: "LIVING ROOM",
      productImg: "/assets/product_img/pro3.jpg",
    },
    {
      productName: "OFFICE",
      productImg: "/assets/product_img/pro4.jpg",
    },
    {
      productName: "SEATING",
      productImg: "/assets/product_img/pro5.jpg",
    },
    {
      productName: "TABLE",
      productImg: "/assets/product_img/pro6.jpg",
    },
  ]);

  const [slider2Data, setSlider2Data] = useState([
    { name: "Hanging lamp consists", photo: "/assets/slider2_img/img1.jpg" },
    { name: "Armchair with Armrest", photo: "/assets/slider2_img/img2.jpg" },
    { name: "Fall collection premium", photo: "/assets/slider2_img/img3.jpg" },
  ]);


  const [proCard, setProCard] = useState([
    {
      image: "/assets/proCards/img1.jpg",
      title: "Alvarado Sideboard",
      price: "$200.00",
    },
    {
      image: "/assets/proCards/img2.jpg",
      title: "Alvarado Sideboard",
      price: "$100.00",
    },
    {
      image: "/assets/proCards/img3.jpg",
      title: "Alvarado Sideboard",
      price: "$170.00",
    },
    {
      image: "/assets/proCards/img4.jpg",
      title: "Alvarado Sideboard",
      price: "$150.00",
    },
    {
      image: "/assets/proCards/img5.jpg",
      title: "Alvarado Sideboard",
      price: "$110.00",
    },
    {
      image: "/assets/proCards/img6.jpg",
      title: "Alvarado Sideboard",
      price: "$900.00",
    },
    {
      image: "/assets/proCards/img7.jpg",
      title: "Alvarado Sideboard",
      price: "$180.00",
    },
    {
      image: "/assets/proCards/img8.jpg",
      title: "Alvarado Sideboard",
      price: "$140.00",
    },
    {
      image: "/assets/proCards/img9.jpg",
      title: "Alvarado Sideboard",
      price: "$120.00",
    },
  ])


  return (
    <>
      {/* NAVBAR KA BACKGROUND SLIDER*/}

      {/* <div className="-mt-32 ">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={true} // Enables infinite scrolling
          autoplay={{
            delay: 2000, // Auto-scroll every 2 seconds
            disableOnInteraction: false, // Keep autoplay even after user interaction
          }}
        >
          {sliderData.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[700px]">
                  <Image
                    src={el.sliderimg}
                    alt={el.slidername}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className=" z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white -ml-60">
                  <div className="align-center">
                    <h4 className="ml-5">{el.offer}</h4>
                    <h1 className="text-4xl">{el.proName}</h1>
                  </div>
                  <div className="btn">
                    <button className="bg-white text-black px-5 py-2 rounded-lg mt-4 ml-2">
                      Shop Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
      <div className="-mt-32">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={true} // Enables infinite scrolling
          autoplay={{
            delay: 2000, // Auto-scroll every 2 seconds
            disableOnInteraction: false, // Keep autoplay even after user interaction
          }}
        >
          {sliderData.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]">
                  <Image
                    src={el.sliderimg}
                    alt={el.slidername}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 text-center md:-ml-40 lg:-ml-60">
                  <div className="align-center">
                    <h4 className="ml-2 md:ml-5 text-sm md:text-base">{el.offer}</h4>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{el.proName}</h1>
                  </div>
                  <div className="btn">
                    <button className="bg-white text-black px-3 py-2 md:px-5 md:py-2 rounded-lg mt-4 ml-1 md:ml-2">
                      Shop Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* TOP CATEGORIES SECTION HEADER*/}
      <div className="mt-10 mb-10 h-12 w-full">
        <h1 className="text-4xl text-center font-bold">Top Categories</h1>
      </div>
      {/* PRODUCT SLIDER*/}

      <Topcategory />
      {/* DIVIDED SECTION OF TWO */}
      {/* <div className=" mt-25 gap-5 flex justify-evenly mx-4">
        <div className=" h-100 w-full flex justify-center items-center overflow-hidden  ">
          <img src="/assets/twohalf/left.jpg" alt="" className="hover:scale-110 object-cover  transition-transform duration-300 ease-in-out" />
          <div className="INNERPART text-teal-50 text-center absolute z-10 -mt-15">
            <h4 className="pt-3 text-sm">FROM LOVESEATS TO SECTIONALS</h4>
            <h1 className="text-5xl pt-5">Comfy Lounging</h1>
            <h4 className=" pt-4 hover:underline">Explore Collection</h4>
          </div>
        </div>
        <div className=" h-100 w-full flex justify-center items-center overflow-hidden">
          <img src="/assets/twohalf/right.jpg" alt="" className="hover:scale-110 object-cover  transition-transform duration-300 ease-in-out" />
          <div className="INNERPART text-teal-50 text-center absolute z-10 -mt-15">
            <h4 className="pt-3 text-sm">SALE UP TO 20% OFF ALL ITEMS</h4>
            <h1 className="text-5xl pt-5">Scandinavian Style</h1>
            <h4 className=" pt-4 hover:underline">Explore Collection</h4>
          </div>
        </div>
      </div> */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 mx-4">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex justify-center items-center overflow-hidden">
          <img
            src="/assets/twohalf/left.jpg"
            alt=""
            className="hover:scale-110 object-cover transition-transform duration-300 ease-in-out w-full h-full"
          />
          <div className="absolute text-white text-center z-10 px-4">
            <h4 className="text-xs md:text-sm">FROM LOVESEATS TO SECTIONALS</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl pt-3 font-bold">Comfy Lounging</h1>
            <h4 className="pt-3 text-sm md:text-base hover:underline cursor-pointer">Explore Collection</h4>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex justify-center items-center overflow-hidden">
          <img
            src="/assets/twohalf/right.jpg"
            alt=""
            className="hover:scale-110 object-cover transition-transform duration-300 ease-in-out w-full h-full"
          />
          <div className="absolute text-white text-center z-10 px-4">
            <h4 className="text-xs md:text-sm">SALE UP TO 20% OFF ALL ITEMS</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl pt-3 font-bold">Scandinavian Style</h1>
            <h4 className="pt-3 text-sm md:text-base hover:underline cursor-pointer">Explore Collection</h4>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      {/* <div className="section3">
        <div className="headSec2 flex justify-center gap-5 text-3xl font-bold mt-30 mb-10 ">
          <h1 className="hover:underline">Latest Product</h1>
          <h1 className="hover:underline">Best Sellers</h1>
          <h1 className="hover:underline">Featured Products</h1>
        </div> */}
      <div className="section3">
        <div className="headSec2 flex flex-col md:flex-row justify-center gap-8 md:gap-5 text-xl md:text-3xl font-bold mt-20 md:mt-30 mb-6 md:mb-10 text-center">
          <h1 className="hover:underline cursor-pointer">Latest Product</h1>
          <h1 className="hover:underline cursor-pointer">Best Sellers</h1>
          <h1 className="hover:underline cursor-pointer">Featured Products</h1>
        </div>
      </div>

      {/* PRODUCT CARDS */}
      <div className="prodcutsSection flex  mt-5 justify-evenly flex-wrap">

        {proCard.map((el, index) => {
          return (
            <ProductCard
              key={index}
              data={el}
            />
          );
        })}
      </div>


      {/* COLLECTION SECTION */}
      {/* <div className="collection mt-25">
        <div className="h-[800px] bg-gradient-to-bl from-gray-900 to-gray-900">
          <div className="flex justify-center text-6xl">
            <h1 className="mt-20 text-white">Collection</h1>
          </div>
          <div className="w-full h-[500px] mt-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="w-full h-full"
              
              >
              {slider2Data.map((el, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[500px] ">
                      <Image
                        src={el.photo}
                        alt=""
                        fill
                        className=" hover:scale-102 object-cover"
                        />

                      <div className="w-[400px] h-25 absolute bg-amber-50 flex flex-col justify-center items-center mt-90 ml-125">
                        <div className="text-3xl">{el.name}</div>
                        <button className="border-1 mt-2">Shop Now</button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div> */}
      <div className="collection mt-12">
        <div className="h-[600px] md:h-[800px] bg-gradient-to-bl from-gray-900 to-gray-900">
          {/* Title */}
          <div className="flex justify-center">
            <h1 className="mt-10 md:mt-20 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Collection
            </h1>
          </div>

          {/* Swiper Container */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-8 md:mt-12">
            <Swiper
              slidesPerView={1} // Default: 1 slide
              breakpoints={{
                640: { slidesPerView: 1 },  // Small screens: 1
                768: { slidesPerView: 1 },  // Medium screens: 2
                1024: { slidesPerView: 1 }, // Large screens: 3
              }}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              {slider2Data.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                    <Image
                      src={el.photo}
                      alt={el.name}
                      fill
                      className="object-cover rounded-lg"
                    />

                    {/* Overlay Box */}
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 p-4 sm:p-6 rounded-lg w-[90%] sm:w-[80%] md:w-[400px] flex flex-col items-center">
                      <div className="text-lg sm:text-2xl font-semibold text-gray-900">{el.name}</div>
                      <button className="mt-2 px-4 py-2 border border-gray-700 bg-gray-900 text-white hover:bg-gray-700 transition">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      { /* Last section */}

      <div className="mt-25  text-center ">
        <h1 className="text-4xl">Shop by style</h1>
      </div>

      <div className=" flex gap-5 justify-evenly mt-10">
        <Lastcard data={{
          imageLink: "/assets/lastCards/img1.jpg",
          title: "Classical Traditional"
        }} />

        <Lastcard data={{
          imageLink: "/assets/lastCards/img2.jpg",
          title: "Modern Classic"
        }} />

        <Lastcard data={{
          imageLink: "/assets/lastCards/img3.jpg",
          title: "Retro Mid Century"
        }} />


      </div>

      {/* Newletter*/}
      {/* <div className="">
        <div className="text-center mt-22">
          <h1 className="text-4xl pb-4 text-bold ">Newsletter</h1>
          <p className="text-bold  text-gray-400">Sign up for newsletter and get 10% cash back offer</p>
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <input
            type="text"
            placeholder="Enter your email.."
            className="border-b-2 w-160 mx-4 focus:outline-none text-gray-400"
            />
          <button className="border-b-2 text-sm ">SUBSCRIBE</button>
        </div>
      </div> */}
      <div className="px-4">
        {/* Title Section */}
        <div className="text-center mt-12">
          <h1 className="text-3xl sm:text-4xl font-bold pb-4">Newsletter</h1>
          <p className="text-gray-500 text-lg">Sign up for our newsletter and get a 10% cash back offer!</p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 mb-10 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email..."
            className="border-b-2 w-full sm:w-96 p-2 text-gray-500 focus:outline-none"
          />
          <button className="border-b-2 text-sm font-semibold px-6 py-2 bg-gray-900 text-white hover:bg-gray-700 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>


      {/*DowmBanner*/}
      <div className="flex flex-wrap justify-center items-center border-gray-200 border-t border-b mt-12 mb-20 overflow-hidden px-4 py-6">
        {["1.png", "2.png", "4.png", "48.png"].map((img, index) => (
          <img
            key={index}
            src={`/assets/BannerImage/${img}`}
            alt="brand"
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 max-w-[120px] md:max-w-[150px] object-cover hover:scale-110 transition-transform ease-in-out duration-500 p-2"
          />
        ))}
      </div>


      {/*DownBar*/}
      {/* <div className=" -mt-40 flex items-center justify-between mx-4 ">
        <div className="logo h-20 w-20 mt-18">
          <img src="/assets/BannerImage/funo.png" alt="" />
        </div>
        <div className="logos flex gap-4 ">
          <div className="twitter rounded-full p-1 border-1 border-b-gray-400 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="25" fill="currentColor"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg></div>

          <div className="instagram  rounded-full p-1 border-1 border-b-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="25" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
          </div>

          <div className="facebook  rounded-full p-1 border-1 border-b-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="25" fill="currentColor"><path d="M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path></svg>
          </div>

          <div className="youtube  rounded-full p-1 border-1 border-b-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="25" fill="currentColor"><path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path></svg>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row items-center justify-between mx-4 mt-10">
        {/* Logo */}
        <div className="logo w-16 h-16 md:w-20 md:h-20">
          <img src="/assets/BannerImage/funo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          {[
            { name: "twitter", icon: "M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" },
            { name: "instagram", icon: "M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" },
            { name: "facebook", icon: "M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z" },
            { name: "youtube", icon: "M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z" }
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-full p-2 border border-gray-400 hover:scale-110 transition-all ease-in-out duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="currentColor">
                <path d={item.icon}></path>
              </svg>
            </div>
          ))}
        </div>
      </div>




      <Popup />


    </>
  );
}
