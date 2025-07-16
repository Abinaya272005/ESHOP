import React from 'react';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';
import watch from './assets/watch.png';
const product = [
  { name: "Boat", price: "$120", img: p1 },
  { name: "Rocky", price: "$100", img: p2 },
  { name: "Goggles", price: "$310", img: p3 },
  { name: "Printed", price: "$710", img: p4 },
  { name: "ThunderBeat", price: "$190", img: p5 },
  { name: "Sony", price: "$450", img: p6 },
  { name: "SkullCandy", price: "$300", img: p7 },
  { name: "Infinity", price: "$210", img: p8 },
];

function Product() {
  return (
    <>
      <section  data-aos="fade-up" className="text-center p-6">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <h2 className="text-gray-500 mb-8">Explore Our Product</h2>

        <div  className="grid sm:grid-cols-4 md:grid-cols-4 gap-6 place-items-center">
          {product.map((products, index) => (
            <div
              key={index}
              className="relative group bg-gray-200 rounded-3xl p-4  shadow hover:bg-red-100 active:bg-red-200 transition-all duration-500"
            >
              <img
                src={products.img}
                alt={products.name}
                className="w-28 h-28 object-contain mx-auto"
              />
              <h1 className="mt-2">{products.name}</h1>
              <h2 className="font-semibold">{products.price}</h2>

              
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300">
                <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Sell
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
<div data-aos="fade-up">
      <div  className="bg-green-500 text-white rounded-xl p-6 flex flex-row md:flex-row items-center justify-between gap-6 mt-10 shadow-lg text-center md:text-left lg:text-center">
        
        <div  className="flex-1">
          <p className="text-md md:text-base font-semibold">30% OFF</p>
          <h2 className="text-xl md:text-2xl font-bold">HAPPY HOURS</h2>
          <p className="text-md mt-1">10 Jan to 28 Jan</p>
        </div>

        
        <div className="flex-1">
          <img
            src={watch}
            alt="watch"
            className="lg:h-80 w-80 hover:animate-bounce duration-500 object-contain mx-auto"
          />
        </div>

      
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold">Smart Solo</h3>
          <h2 className="text-2xl md:text-3xl font-bold">Winter Sale</h2>
          <p className="md:text-xl mt-1">
            Experience powerful bass and crystal-clear sound with our Air Solo Ba headphones.
          </p>
          <button className="mt-4 bg-white text-green-500 px-5 py-2 rounded-full font-semibold hover:bg-red-100 transition-all">
            Shop Now
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Product;