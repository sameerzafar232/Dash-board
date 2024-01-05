import React from "react";

import circle from '../assets/images/circle.png'
import icon from '../assets/images/iconContainer.png'
import percent from '../assets/images/per.png'
import { Outlet } from "react-router-dom";
function Dashboard() {
    return(
    <>
 <h1 className="flex justify-center text-2xl font-bold mb-6">Dashboard</h1>
 <div className="dashboard p-4 ">
    {/* Cards First Row  */}
    <cards class="bg-gray-100 ">

<div class="grid  grid-cols-1 md:grid-cols-3 gap-4">

  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-4">
      <div class="flex mb-4 justify-between">
      
        <div class=" p-2 rounded-full ">
        <span class="material-symbols-outlined icon">
grid_view
</span>
        </div>
        <p class="text-gray-600  ">This Week</p>
      </div>
      <div class="text-center flex justify-between">
        <p class="text-gray-600 ">Sales</p>
        <p class="text-gray-600 ">Volume</p>
      </div>
      <div class="text-center flex justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">N0.00</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
      </div>
    </div>
  </div>

 
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4  justify-between">
       
        <div class=" p-2 rounded-full">
        <span class="material-symbols-outlined">
contacts
</span>
        </div>
        <p class="text-gray-600   ">This Week</p>
      </div>
      <div class="text-center flex  justify-between">
        <p class="text-gray-600 ">Cutomers</p>
        <p class="text-gray-600 ">Active</p>
      </div>
      <div class="text-center flex  justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
      </div>
    </div>
  </div>


  <div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4  justify-between">
      
        <div class=" p-2 rounded-full">
        <span class="material-symbols-outlined">
shopping_bag
</span>
        </div>
        <p class="text-gray-600   ">This Week</p>
      </div>
      <div class="text-center flex  justify-between ">
        <p class="text-gray-600 "> Orders</p>
        <p class="text-gray-600 ">Pending</p>
        <p class="text-gray-600 ">Completed</p>
      </div>
      <div class="text-center flex  justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
      </div>
    </div>
  </div>
</div>

</cards>


{/* <div className="card flex "> */}
<div class="grid  grid-cols-1 md:grid-cols-3 gap-4">
<div class=" mt-4 h-auto p-4 bg-white rounded-lg shadow-lg flex flex-col gap-6">
   
    <div class="flex  text-gray-500  justify-between">
    <h3 class="text-black text-sm font-bold">Marketing</h3>
        <p className="text-sm"> ThisWeek</p>
    </div>
    <div class="flex flex-row justify-center gap-1 ">
    <span class="material-symbols-outlined star">star</span>
    <span class="material-symbols-outlined star">star</span>
    <span class="material-symbols-outlined star">star</span>
    <span class="material-symbols-outlined star">star</span>
    <span class="material-symbols-outlined star">star</span>
</div>

    <div class="flex justify-center  mb-4 ">
        <img src={circle} alt="Card Image" class="w-205 "/>
    </div>
</div>

<div className="two-card  mt-4  flex-0 ">
<div class="bg-blue-500  rounded-lg mb-4 shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4  justify-between">
       
        <div class=" p-2 rounded-full ">
        <span class="material-symbols-outlined">
folder
</span>
        </div>
       
      </div>
      <div class="text-center flex  justify-between">
        <p class="text-white ">All Products</p>
        <p class="text-white ">Active</p>
      </div>
      <div class="text-center flex  justify-between mt-4">
        <h2 class="text-xl text-white ">0</h2>
        <h2 class="text-xl text-white ">0</h2>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-lg mt-4 shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4  justify-between">
      
        <div class=" p-2 rounded-full ">
        <span class="material-symbols-outlined">
shopping_cart
</span>

        </div>
        <p class="text-gray-600   ">This Week</p>
      </div>
      <div class="text-center flex  justify-between">
        <p class="text-red-500">Abandoned Cart</p>
        <p class="text-gray-600  ">Customers</p>
       
      </div>
      <div class="text-center flex  justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
      </div>
    </div>
  </div>
</div>

<div class="  mt-4 bg-white w-fill h-fill p-20 rounded-lg shadow-md flex flex-col justify-center items-center gap-10">
    <h2 class="text-xl font-bold">Recent Orders</h2>
    
    <div class="flex justify-center items-center">
        <img src={icon} alt="User" class=" border-1 border-radius-500" />
    </div>
    
    <h1 class="text-2xl font-bold">No Orders Yet?</h1>
    
    <p class="text-gray-600">Add products to your store and start selling to see orders here.</p>
    
    <button class="bg-blue-500 text-white px-4 py-2 rounded">+ New Product</button>
</div>



</div>
 </div>


     


    </>
    )
}

export default Dashboard;