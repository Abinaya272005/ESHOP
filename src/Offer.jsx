import React from 'react';
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaRegCreditCard, FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import hero3 from './assets/hero3.png';



function Offer() {
  return (
    <>
    <div  data-aos="fade-up"className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-6">
      
      
      <div className="flex items-center space-x-3">
        <div className="text-red-500 text-3xl">
          <MdOutlineLocalShipping />
        </div>
        <div>
          <h4 className="font-semibold">Free Shipping</h4>
          <p className="text-md text-gray-500">Free Shipping On All Order</p>
        </div>
      </div>

      
      <div className="flex items-center space-x-3 ml-3">
        <div className="text-3xl text-red-500">
          <FaMoneyCheckDollar />
        </div>
        <div>
          <h4 className="font-semibold">Safe Money</h4>
          <p className="text-md text-gray-500">30 Days Money Back</p>
        </div>
      </div>

    
      <div className="flex items-center space-x-3">
        <div className="text-3xl text-red-500">
          <FaRegCreditCard />
        </div>
        <div>
          <h4 className="font-semibold">Secure Payment</h4>
          <p className="text-md text-gray-500">All Payment Secure</p>
        </div>
      </div>

      
      <div className="flex items-center space-x-3">
        <div className="text-3xl text-red-500">
          <BiSupport />
        </div>
        <div>
          <h4 className="font-semibold">Online Support 24/7</h4>
          <p className="text-md text-gray-500">Technical Support 24/7</p>
        </div>
      </div>
      
   </div>
   
<div  data-aos="fade-up" className="bg-red-600  text-white rounded-xl p-6 flex  md:flex-row  lg:flex-row sm:flex-row items-center justify-between gap-6 mt-10 shadow-lg text-center md:text-left lg:text-center">
  
  
  <div className="flex-1">
     <p className="text-md md:text-base font-semibold">30% OFF</p>
    <h2 className="text-xl md:text-2xl font-bold">HAPPY HOURS</h2>
    <p className="text-md md:text-mdm mt-1">10 Jan to 28 Jan</p>
 
  </div>

  <div className="flex-1">
    <img
      src={hero3}
      alt="Headphone"
      className="lg:h-80 w-80 sm:w-80 sm:h-80 md:w-80 md:h-80  lg:w-80  animate-bounce duration-500 object-contain mx-auto"
    />
  </div>

  <div className="flex-1">
    <h3 className="text-base md:text-lg font-semibold">Air Solo Bass</h3>
    <h2 className="text-2xl md:text-3xl font-bold">Winter Sale</h2>
    <p className="text-md md:text-xl  mt-2 max-w-xs mx-auto lg:mx-auto">
      Experience powerful bass and crystal-clear sound with our Air Solo Bass headphones.
      Designed for those who love premium audio with style.
    </p>
    <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-full font-semibold hover:bg-red-100 transition-all">
      Shop Now
    </button>
  </div>

</div>
         </>
  );
}

export default Offer;