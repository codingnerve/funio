"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import React from 'react'
import Headingpage from "../components/Headingpage/headingpage";


const page = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };
  return (
    <>
     <Headingpage name="Contact"/>
      <div className="">
     <div className="w-full h-[500px] md:h-[650px] rounded-lg overflow-hidden shadow-lg">
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.891261615889!2d77.1518018!3d28.6928992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023318393425%3A0x8237f2fa865b70ac!2sEbslon%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1742815026274!5m2!1sen!2sin"
    width="100%"
    height="100%"
    loading="lazy"
    className="border-0 w-full h-full"
    allowFullScreen
  ></iframe>
    </div>
    </div>
{/*
      <div className="w-[40%] ml-40 mt-20 mb-20">
        <div className="">
        <section className="max-w-3xl mx-auto p-6">
      
      <h2 className="text-3xl font-bold mb-4">Contact Details</h2>

      
      <p className="text-gray-600 mb-6">
        There’s no place like home. To help you make yours perfect, our stores
        are open, we’re delivering as normal, our online store is available
        24/7, and our customer service team is ready to help you via phone and
        Live Chat.
      </p>

      
      <div className="space-y-6">
        
        <div className="flex items-start space-x-4">
          <div className="p-3 border rounded-lg shadow-sm bg-gray-100">
            <MapPin className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-gray-600">
              807 Mize Cemetery Rd, Somerset KY, 42503
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 border rounded-lg shadow-sm bg-gray-100">
            <Phone className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <p className="text-gray-600">+41 71 227 76 90</p>
          </div>
        </div>

      
        <div className="flex items-start space-x-4">
          <div className="p-3 border rounded-lg shadow-sm bg-gray-100">
            <Mail className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-600">sayhello@funio.com</p>
          </div>
        </div>
      </div>

    </section>
        </div>
      </div>

      <section className="max-w-3xl mx-auto p-6 text-center absolute -mt-130 h-[200] ml-190">
    
      <div className="">
      <div className="flex justify-center mb-4">
        <Mail className="w-12 h-12 text-gray-700" />
      </div>

    
      <h2 className="text-2xl font-bold mb-4">Send us a message</h2>

      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

            <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        ></textarea>

      
        <button
          type="submit"
          className="w-full bg-black text-white py-3 text-lg font-semibold rounded-md hover:bg-gray-800 transition-all"
        >
          SEND
        </button>
      </form>
      </div>
    </section> */}
     <section className="max-w-5xl mx-auto my-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section - Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
          <p className="text-gray-600 mb-6">
            There’s no place like home. To help you make yours perfect, our
            stores are open, we’re delivering as normal, and our customer
            service team is available 24/7.
          </p>

          {/* Contact Info */}
          {/* <div className="space-y-6">
            <ContactItem icon={MapPin} title="Address" text="807 Mize Cemetery Rd, Somerset KY, 42503" />
            <ContactItem icon={Phone} title="Phone" text="+41 71 227 76 90" />
            <ContactItem icon={Mail} title="Email" text="sayhello@funio.com" />
          </div> */}
           <div className="space-y-6">
        
        <div className="flex items-start space-x-4">
          <div className="p-3 border rounded-lg shadow-sm bg-gray-100">
            <MapPin className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-gray-600">
              807 Mize Cemetery Rd, Somerset KY, 42503
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 border rounded-lg shadow-sm bg-gray-100">
            <Phone className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <p className="text-gray-600">+41 71 227 76 90</p>
          </div>
        </div>

      
        <div className="flex items-start space-x-4">
          <div className="p-3 border rounded-lg shadow-sm bg-gray-100">
            <Mail className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-600">sayhello@funio.com</p>
          </div>
        </div>
      </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-gray-700" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-lg font-semibold rounded-md hover:bg-gray-800 transition-all"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default page