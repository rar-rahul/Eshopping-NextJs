import React from "react";

export default function Sidebar() {
    return (
        <div >
           <div className="bg-gray-50 w-60  min-h-screen">
    {/* Sidebar content goes here */}
     <div class="p-4">
    <h2 class="text-xl font-bold mb-4 text-center">User Account</h2>
    <ul class="space-y-2">
      <li className="py-1 mx-1  border-b-pink-400  shadow-pink-400"><a href="#" class=" hover:underline text-pink-300 font-bold py-2 px-4 rounded hover:bg-gradient-to-br focus:ring-4 focus:outline-none">Profile</a></li>
      <li className="py-1 mx-1  shadow-pink-400"><a href="#" class=" hover:underline text-pink-300 font-bold py-2 px-4 rounded hover:bg-gradient-to-br focus:ring-4 focus:outline-none">Orders</a></li>
      <li className="py-1 mx-1  shadow-pink-400"><a href="#" class=" hover:underline text-pink-300 font-bold py-2 px-4 rounded hover:bg-gradient-to-br focus:ring-4 focus:outline-none">Logout</a></li>

    </ul>
  </div>
  </div>
        </div>
    );
}
