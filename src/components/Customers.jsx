import React from "react";

function Customers() {
    return(<>
    <h1 className="flex justify-center text-2xl font-bold mb-6">Customers Summary </h1>
 
 {/* Cards First Row  */}
 <cards>

<div class="grid  grid-cols-1 md:grid-cols-2 gap-4 p-2">

  <div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="p-4">
      <div class="flex mb-4 justify-between">
      
        <div class=" p-2 rounded-full ">
        <span class="material-symbols-outlined">
shopping_bag
</span>
        </div>
        <p class="text-gray-600  ">This Week</p>
      </div>
      <div class="text-center flex justify-between gap-2">
        <p class="text-gray-600 "> Orders</p>
        <p class="text-gray-600  ">Pending</p>
        <p class="text-gray-600  ">Completed</p>
      </div>
      <div class="text-center flex justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800  ">0</h2>
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
        <p class="text-gray-600 "> Orders</p>
        <p class="text-gray-600  ">Pending</p>
        <p class="text-gray-600    ">Completed</p>
      </div>
      <div class="text-center flex justify-between mt-4">
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800 ">0</h2>
        <h2 class="text-xl text-gray-800">0</h2>
      </div>
    </div>
  </div>


</div>

</cards>
    


   
    </>)
}

export default Customers;