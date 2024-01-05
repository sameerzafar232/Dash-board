import React from "react";
import icon from '../assets/images/iconContainer.png'
import icon2 from '../assets/images/iconContainer (1).png'




function Conversation() {
    return(<>
    <h1 className="flex justify-center text-xl text-center font-bold mb-6">Conversations with customers</h1>
 <div className="conversation p-4  flex flex-col md:flex-row justify-center">
 <contact >
    <div class="container mx-auto bg-white shadow-lg rounded-lg">
        <h1 class="text-xl font-bold mt-4  flex justify-center">Contacts</h1>
        <div class="w-full p-4 mx-auto mt-4">
            <input type="text" placeholder="Search..." class="w-full p-2 text-center bg-white rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-300"/>
        </div>
        <div class="w-full  mt-4">
            <table class="table-auto w-full">
                <thead>
                    <tr>
                        <th class="border px-4 py-2">Message</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2"> <h1>Jane Doe</h1>Hi, i want make enquiries about your services ...</td>
                       
                    </tr>
                    <tr>
                        <td class="border px-4 py-2"><h1>Janet Adebayo</h1>Hi, i want make enquiries about your services ...</td>
                        
                    </tr>
                    <tr>
                        <td class="border px-4 py-2"><h1>Kunle Adekunle</h1>Hi, i want make enquiries about your services ...</td>
                       
                    </tr>
                    <tr>
                        <td class="border px-4 py-2"><h1>ane Doe</h1>Hi, i want make enquiries about your services ...</td>
                       
                    </tr>
                    <tr>
                        <td class="border px-4 py-2"><h1>Kunle Adekunle</h1>Hi, i want make enquiries about your services ...</td>
                  
                    </tr>
                    <tr>
                        <td class="border px-4 py-2"> <h1>Jane Doe</h1>Hi, i want make enquiries about your services ...</td>
                       
                    </tr>
                    <tr>
                        <td class="border px-4 py-2"><h1>Kunle Adekunle</h1>Hi, i want make enquiries about your services ...</td>
                      
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
   </contact>
   
{/* add messages */}

   <div class=" p-8 mt-4 bg-white  w-1000 h-fill  rounded-lg shadow-md flex flex-col justify-center items-center gap-10">
    
    <div class="flex justify-center items-center">
        <img src={icon2} alt="User" class=" border-1 border-radius-500" />
    </div>
    
    <h1 class="text-2xl font-bold">Contacts</h1>
    
    <p class="text-gray-600">Click on a contact to view messages</p>
    
    <button class="bg-blue-500 text-white px-4 py-2 rounded">+ Contact</button>
</div>


 </div>

    </>)
}

export default Conversation;