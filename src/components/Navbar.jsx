import React from "react";

import Logo from '../assets/images/Graph.jpg'

import { useState } from 'react'; 
import black from "../assets/images/profile 1.png"



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
        <>
    <navbar className="bg-white shadebottom shadow-md hidden md:block">
      <nav className="px-8 py-4">
        <div className="md:flex xl:flex 2xl:flex items-center justify-between">
          <div className="text-white font-bold text-2xl">
           <div className="logo flex ">
           <img className="w-10 md:w-10 lg:w-10 xl:w-10 2xl:w-12" src={Logo} alt="" />
            <p className="text-black ">Metrix</p>
            <p className="text-black ml-12">Dashboard</p>
           </div>
           

          </div>
          <div className="md:hidden flex justify-end">
            <button
              className="text-black hover:text-black"
              id="menu-toggle"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        
          <button className=" hidden sm:hidden md:inline lg:inline xl:inline 2xl:inline text-black hover:text-gray-300">
          <sec class="bg-yellow-100 flex items-center justify-center">

<div class="inline-block relative">
    <button class=" text-gray-800 font-semibold py-2 px-4  rounded inline-flex items-center">
        <span class="mr-2">Nanny’s Shop</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>
    <div class="absolute hidden bg-white border border-gray-300 rounded mt-2">
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Nanny’s Shop</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Abc Shops</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">General Store</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Xyz Store</a>
    </div>
</div>
<div className="other flex p-2  bg-white">
<span class=" ml-2 mr-2 material-symbols-outlined">
notifications
</span>
           <img className="ml-4"src={black} alt="" srcset="" />
</div>


</sec>
           




          </button>
        
        </div>
      </nav>
    </navbar>



        </>
    )
}


export default Navbar;