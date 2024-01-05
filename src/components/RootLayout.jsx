import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function RootLayout() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="md:flex">
      <div className="md:hidden ml-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-blue-500 focus:outline-none mt-6 ml-6"
        >
          ☰
        </button>
      </div>

     
      <aside
        className={`${
          showSidebar ? "block" : "hidden"
        } md:flex font-sans w-48 mt-4 p-2`}
      >
     <div className="flex  justify-center ">   
               <div className=" py-6 pl-4 pr-0 place-items-center">
<Link to="/" className="flex items-center py-2 px-2 mb-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                <span className="mr-2">📊</span> Dashboard
              </Link>
             <Link to="/Orders" className="flex items-center py-2 px-2 mb-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                <span className="mr-2">📦</span> Orders
             </Link>
             <Link to="/Customers" className="flex items-center py-2 px-2 mb-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                <span className="mr-2">👥</span> Customers
             </Link>
              <Link to="/Inventory" className="flex items-center py-2 px-2 mb-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                <span className="mr-2">📋</span> Inventory
              </Link>
               <Link to="/Conversation" className="flex items-center py-2 px-2 mb-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                <span className="mr-2">💬</span> Conversation
               </Link>
               <Link to="/Setting" className="flex items-center py-2 px-2 mb-2 text-gray-600 hover:bg-blue-500 hover:text-white">
               <span role="img" aria-label="Signup" className="mr-2">📝 Sign Up</span>

               </Link>
             </div> 
</div>
      </aside>

   
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;






