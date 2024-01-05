import React from "react";
import img5 from '../assets/images/download (1).jpg'
import icon from '../assets/images/iconContainer.png'
function Orders() {
    return(<>

    
    <h1 className="flex justify-center text-2xl font-bold mb-6">Orders Summary</h1>
<div className="orders p-4 ">
 {/* Cards First Row  */}
 <cards class=" bg-gray-100">

<div class="grid  grid-cols-1 md:grid-cols-3 gap-4">

  <div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4 justify-between">
      
        <div class=" p-2 rounded-full">
        <span class="material-symbols-outlined">
shopping_bag
</span>
        </div>
        <p class="text-gray-600   ">This Week</p>
      </div>
      <div class="text-center flex justify-between gap-2">
        <p class="text-gray-600 text-sm "> Orders</p>
        <p class="text-gray-600 text-sm">Pending</p>
        <p class="text-gray-600  text-sm">Completed</p>
      </div>
      <div class="text-center flex justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
      </div>
    </div>
  </div>

 
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4 justify-between">
      
        <div class=" p-2 rounded-full ">
        <span class="material-symbols-outlined">
shopping_bag
</span>
        </div>
        <p class="text-gray-600   ">This Week</p>
      </div>
      <div class="text-center flex justify-between gap-2">
        <p class="text-gray-600 text-sm "> Orders</p>
        <p class="text-gray-600 text-sm">Pending</p>
        <p class="text-gray-600 text-sm">Completed</p>
      </div>
      <div class="text-center flex justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
      </div>
    </div>
  </div>


  <div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4 justify-between">
      
        <div class=" p-2 rounded-full ">
        <span class="material-symbols-outlined">
shopping_cart
</span>

        </div>
        <p class="text-gray-600   ">This Week</p>
      </div>
      <div class="text-center flex justify-between gap-2">
        <p class="text-red-500 text-sm">Abandoned Cart</p>
        <p class="text-gray-600 text-sm ">Customers</p>
       
      </div>
      <div class="text-center flex justify-between">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800  mt-4">0</h2>
      </div>
    </div>
  </div>
</div>

</cards>
{/* Order Summary */}
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

   

    

    
    </>)
}

export default Orders;