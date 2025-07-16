import React from 'react';
import f1 from './assets/f1.png';
import f2 from './assets/f2.png';
import f3 from './assets/f3.png';
import f4 from './assets/f4.png';
import f5 from './assets/f5.png';
import f6 from './assets/f6.png';

function Features() {
  const featureItem = [
    {
      title: "Gamepad",
      bgColor: "bg-gray-400",
      btnBg: "bg-red-500",
      btnText: "text-white",
      Image: f1
    },
    {
      title: "Gadget",
      bgColor: "bg-yellow-300",
      btnBg: "bg-white",
      btnText: "text-black-600",
      Image: f2
    },
    {
      title: "Laptop",
      bgColor: "bg-red-500",
      btnBg: "bg-white",
      btnText: "text-black-600",
      Image: f5
    },
    {
      title: "Headset",
      bgColor: "bg-gray-800",
      btnBg: "bg-red-500",
      btnText: "text-white",
      Image: f3
    },
    {
      title: "VR Headset",
      bgColor: "bg-green-400",
      btnBg: "bg-white",
      btnText: "text-black-600",
      Image: f4
    },
    {
      title: "Speaker",
      bgColor: "bg-blue-500",
      btnBg: "bg-white",
      btnText: "text-black-600",
      Image: f6
    }
  ];

  return (
    <div  data-aos="fade-up"className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {featureItem.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl relative overflow-hidden transform transition-all duration-700 ease-in-out hover:scale-105 ${item.bgColor}`}>
          <h2 className="text-white text-2xl pb-4 font-semibold">Enjoy With</h2>
          <h1 className="text-white text-3xl font-bold pb-5">{item.title}</h1>
          <button
            className={`px-4 py-2 rounded-3xl font-medium hover:scale-105 transition duration-300 ${item.btnBg} ${item.btnText}`}>        Browse
          </button>

        
          <img
            src={item.Image}
            alt={item.title}
            className="absolute bottom-2 right-2 h-24 w-24 sm:h-31 sm:w-31 md:h-45 md:w-45 object-contain hover:animate-bounce duration-500"
          />
        </div>
      ))}
    </div>
  );
}

export default Features;