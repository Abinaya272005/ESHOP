import React,{useState} from 'react';
import Slider from 'react-slick';
import hero3 from './assets/hero3.png';
import hero2 from './assets/hero2.png';
import hero1 from './assets/hero1.png';


export default function Hero() {
  const [showOrder,setShowOrder]=useState('');

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const HeroData = [
    {
      id: 1,
      img: hero3,
      subtitle: 'Beats Solo',
      title: 'Wireless',
      title2: 'Headphone',
    },
    {
      id: 2,
      img: hero2,
      subtitle: 'Immersive Reality',
      title: 'Virtual',
      title2: 'Headset',
    },
    {
      id: 3,
      img: hero1,
      subtitle: 'Apple MacBook',
      title: 'Smart',
      title2: 'Laptop',
    },
  ];

  
  const OrderModal = ({ onClose }) => {
    return (
      <div  dats-aos="fade-up"className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl p-6 w-11/12 max-w-md relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500"
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            🛍️ Place Your Order
          </h2>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert('✅ Order Placed Successfully!');
              onClose();
            }}
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                placeholder="Shipping address"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full py-2 transition duration-300"
            >
              🛒 Order Now
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="container  mx-auto px-4 relative" data-aos="fade-up">
      <Slider {...settings}>
        {HeroData.map((data) => (
          <div key={data.id} className="px-2 sm:px-6 py-4 sm:py-6">
            <div className="w-full max-w-6xl mx-auto bg-gray-300 dark:bg-gray-800 rounded-3xl shadow-lg p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:gap-10">
              
              {/* Left Side Text */}
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-md sm:text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {data.subtitle}
                </h1>
                <h1 className="text-2xl sm:text-4xl font-bold text-black dark:text-white">
                  {data.title}
                </h1>
                <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white drop-shadow-lg tracking-wide">
                  {data.title2}
                </h1>
                <button
                  onClick={() => setShowOrder(true)}
                  className="mt-4 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                  Shop Now
                </button>
              </div>

              {/* Right Side Image */}
              <div className="flex justify-center sm:justify-end">
                <img
                  src={data.img}
                  alt="product"
                  className="w-full max-w-[240px] md:max-w-[200px] lg:max-w-[280px] object-contain"
                  style={{ backgroundColor: 'transparent' }}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      
      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
    </div>
  );
}