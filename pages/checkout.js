import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BsFillBagCheckFill } from 'react-icons/Bs'

const checkout = ({user}) => {
    const router = useRouter();
   
  return (
    <div>
      <h3 className='font-bold text-center'>Checkout</h3>
      <div className='px-4 text-gray-300 mx-4'>Delivery Details</div>
      <div className='px-4 flex my-2 mx-auto' >
      <div className='px-4 w-1/2' >
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-4 w-1/2' >
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>
      <div className='px-4 flex my-2 mx-auto m-5' >
      <div className='px-4 w-1/2 flex space-x-2' >
      <div class="relative mb-4">
        <label for="pin" class="leading-7 text-sm text-gray-600">Pin</label>
        <input type="text" id="pin" name="pin" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="mobile" class="leading-7 text-sm text-gray-600">Mobile</label>
        <input type="text" id="mobile" name="mobile" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className='px-4 w-1/2' >
      <div class="relative mb-4">
        <label for="mobile" class="leading-7 text-sm text-gray-600">Mobile</label>
        <textarea  id="addrees" name="mobile" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      </div>

      </div>
      <div className='px-4 flex my-2 mx-auto' >
    
      </div>
      <Link href={'/order'}> <button class="flex mr-2 mx-4  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Pay Now
          </button></Link>

      </div>
    
  )
}

export default checkout