"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from "react-icons/hi"; // Icons for menu toggle




const page = () => {
  const currentroute = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <div className={`z-50 relative  `}>
    //   <div className="flex items-center justify-between text-white text-sm bg-transparent border-b-1 border-b-gray-300 p-4">
    //     <div className="flex items-center space-x-4 ">
    //       <Link href="/">
    //         <div className="flex items-center space-x-1">
    //           <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className={currentroute === '/' ? 'invert' : ''} ><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg></span>
    //           <a href='' className={`hover:underline ${currentroute === '/' ? 'text-white' : 'text-black'}`}>Store Location</a>
    //         </div>
    //       </Link>
    //       <div className="border-l border-gray-300 h-4"></div>
    //       <div className="flex items-center space-x-1">
    //         <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"  className={currentroute === '/' ? 'invert' : ''} ><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg></span>
    //         <a href="mailto:support@funio.com" className={`hover:underline ${currentroute === '/' ? 'text-white' : 'text-black'}`}> Support@funio.com</a>
    //       </div>
    //     </div>
    //     <div className= {`flex items-center space-x-4 ${currentroute === '/' ? 'text-white' : 'text-black'}`}>
    //       <a href="#" className="hover:underline">Gift Cards</a>
    //       <div className="border-l border-gray-300 h-4"></div>
    //       <a href="#" className="hover:underline">FAQs</a>
    //     </div>
    //   </div>

    //   <div className="flex gap-3.5 justify-between items-center p-5 ">
    //     <div className="">
    //       <Link href="/">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           height={25}
    //           width={70}
    //           className={currentroute === '/' ? 'invert' : ''}
    //         >
    //           <path d="M21 21H3C2.44772 21 2 20.5523 2 20V12.4868C2 12.1978 2.12501 11.9229 2.34282 11.733L6 8.54435V4C6 3.44772 6.44772 3 7 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM9 19H12V12.9416L8 9.45402L4 12.9416V19H7V15H9V19ZM14 19H20V5H8V7.12729C8.23444 7.12729 8.46888 7.20938 8.65718 7.37355L13.6572 11.733C13.875 11.9229 14 12.1978 14 12.4868V19ZM16 11H18V13H16V11ZM16 15H18V17H16V15ZM16 7H18V9H16V7ZM12 7H14V9H12V7Z"></path>
    //         </svg>
    //       </Link>
    //     </div>

    //     <div className="">
    //       <ul className={`flex gap-3.5 ${currentroute === '/' ? 'text-white' : 'text-black'}`}>
    //         <li className="hover:underline">
    //           <Link href="/">Home</Link>
    //         </li>
    //         <li className="hover:underline">
    //           <Link href="/about">About</Link>
    //         </li>
    //         <li className="hover:underline">
    //           <Link href="">service</Link>
    //         </li>
    //         <li className="hover:underline">
    //           <Link href="/contact-us">contact</Link>
    //         </li>
    //         <li className="hover:underline">
    //           <Link href="">Gallery</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
//     
<div className="z-50 relative shadow-md">
{/* Top Bar */}
<div className="hidden md:flex items-center justify-between text-sm bg-transparent border-b border-gray-300 p-2 md:p-4">
  <div className="flex items-center space-x-4">
    {/* Store Location */}
    <Link href="/">
      <div className="flex items-center space-x-1">
      <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className={currentroute === '/' ? 'invert' : ''} ><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg></span>
    <a href='' className={`hover:underline ${currentroute === '/' ? 'text-white' : 'text-black'}`}>Store Location</a>
      </div>
    </Link>
    <div className="border-1 border-gray-300 h-4"></div>
    {/* Support Email */}
    <div className="flex items-center space-x-1">
    <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"  className={currentroute === '/' ? 'invert' : ''} ><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg></span>
    <a href="mailto:support@funio.com" className={`hover:underline ${currentroute === '/' ? 'text-white' : 'text-black'}`}> Support@funio.com</a>
    </div>
  </div>
  {/* Links */}
  <div className={`flex items-center space-x-4 ${currentroute === '/' ? 'text-white' : 'text-black'}`}>
    <a href="#" className="hover:underline">Gift Cards</a>
    <div className="border-l border-gray-300 h-4"></div>
    <a href="#" className="hover:underline">FAQs</a>
  </div>
</div>

{/* Main Navbar */}
<div className="flex justify-between items-center p-4">
  {/* Logo */}
  <Link href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={25} width={70} className={`${currentroute === '/' ? 'invert' : ''}`}>
    <path d="M21 21H3C2.44772 21 2 20.5523 2 20V12.4868C2 12.1978 2.12501 11.9229 2.34282 11.733L6 8.54435V4C6 3.44772 6.44772 3 7 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM9 19H12V12.9416L8 9.45402L4 12.9416V19H7V15H9V19ZM14 19H20V5H8V7.12729C8.23444 7.12729 8.46888 7.20938 8.65718 7.37355L13.6572 11.733C13.875 11.9229 14 12.1978 14 12.4868V19ZM16 11H18V13H16V11ZM16 15H18V17H16V15ZM16 7H18V9H16V7ZM12 7H14V9H12V7Z"></path>$
    </svg>
  </Link>

  {/* Desktop Navigation */}
  <ul className={`hidden md:flex gap-6 text-black ${currentroute === '/' ? 'text-white' : 'text-black'}`}>
    <li className="hover:underline"><Link href="/">Home</Link></li>
    <li className="hover:underline"><Link href="/about">About</Link></li>
    <li className="hover:underline"><Link href="#">Service</Link></li>
    <li className="hover:underline"><Link href="/contact-us">Contact</Link></li>
    <li className="hover:underline"><Link href="#">Gallery</Link></li>
  </ul>

  {/* Mobile Menu Button */}
  <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <HiX /> : <HiMenu />}
  </button>
</div>

{/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md text-center">
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/about" className="hover:underline">About</Link>
    <Link href="#" className="hover:underline">Service</Link>
    <Link href="/contact-us" className="hover:underline">Contact</Link>
    <Link href="#" className="hover:underline">Gallery</Link>
  </div>
)}
</div>
  )
}

export default page