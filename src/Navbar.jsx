import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const MenuLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Shop", link: "/#shop" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blog", link: "/#blog" }
  ];

  return (
    <nav  className="w-full bg-white  shadow-sm sticky top-0 z-50">
      <div  className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <div className="flex items-center space-x-10">
          <a href="#" className="text-red-600 font-bold text-2xl uppercase tracking-widest">ESHOP</a>
          
          <ul className=" md:flex items-center gap-x-10 px-4 text-xl hidden">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white font-medium"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-1 bg-white dark:bg-gray-800 shadow-sm">
            <FaSearch className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 dark:text-white placeholder:text-gray-400 w-32 sm:w-48"
            />
          </div>
          <FaShoppingCart className="text-gray-600 dark:text-gray-200 w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;