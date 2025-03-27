import React from 'react'

const page = () => {
  return (
    <>
    {/* <footer className="flex justify-between items-center py-4 px-8 bg-white text-gray-600 text-sm border-t">
    <div>
        &copy; 2021 Funio Furniture Store
    </div>
    <div className="flex space-x-4">
        <a href="#" className="hover:underline">PRIVACY</a>
        <a href="#" className="hover:underline">TERMS</a>
        <a href="#" className="hover:underline">*PROMO T&amp;CS APPLY (VIEW HERE)</a>
    </div>
    <div className="flex space-x-2">
        <img src="/assets/footer2/visa.png" alt="Visa" className="h-6" />
    </div>
</footer> */}
<footer className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8 bg-white text-gray-600 text-sm border-t space-y-4 md:space-y-0">
  
  {/* Copyright */}
  <div className="text-center md:text-left">
    &copy; {new Date().getFullYear()} Funio Furniture Store
  </div>

  {/* Links */}
  <div className="flex space-x-4 text-center">
    <a href="#" className="hover:underline">PRIVACY</a>
    <a href="#" className="hover:underline">TERMS</a>
    <a href="#" className="hover:underline">*PROMO T&amp;CS APPLY (VIEW HERE)</a>
  </div>

  {/* Payment Icons */}
  <div className="flex space-x-2 justify-center md:justify-end">
    {["visa.png"].map((img, index) => (
      <img key={index} src={`/assets/footer2/${img}`} alt={img.split('.')[0]} className="h-6" />
    ))}
  </div>

</footer>

</>
  )
}

export default page