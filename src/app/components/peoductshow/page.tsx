'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaHeart, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';

interface ProductProps {
    name: string, 
    productImg: string
}

export default function ProductPage(props :{data:ProductProps} ) {
  const [quantity, setQuantity] = useState(1);


  return (
    <div className="container mx-auto p-4 grid md:grid-cols-2 gap-8">
      <div>
        <Image src={props.data.productImg} alt="Artemis Lounge Chair" width={600} height={600} className="rounded-lg" />
       </div>
      <div>
        <h1 className="text-3xl font-bold">{props.data.name}</h1>
        <p className="text-lg text-gray-600 mt-2">$90.00</p>
        <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div className="flex items-center gap-2 mt-4 text-red-600 font-semibold">
          <span>⏳ Hurry up! Deal ends in:</span>
          <span className="font-mono">00:00:00:00</span>
        </div>
        <div className="flex items-center mt-4">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-3 py-1 border">-</button>
          <span className="px-4">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 border">+</button>
        </div>
        <button className="mt-4 w-full bg-black hover:bg-amber-600 text-white py-2 rounded-lg">Add to Cart</button>
        <button className="mt-2 w-full  hover:text-fuchsia-600 flex items-center justify-center gap-2 border py-2 rounded-lg">
          <FaHeart /> Add to Wishlist
        </button>
        <p className="text-gray-500 mt-4">SKU: <span className="font-bold">D2300-3-2-2</span></p>
        <p className="text-gray-500">Categories: <span className="font-bold">Dining Tables, Living Room, Sofas</span></p>
        <p className="text-gray-500">Tags: <span className="font-bold">Hot, Trend</span></p>
        <div className="flex gap-4 mt-4">
          <FaFacebook className="text-xl cursor-pointer" />
          <FaTwitter className="text-xl cursor-pointer" />
          <FaLinkedin className="text-xl cursor-pointer" />
          <FaPinterest className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
