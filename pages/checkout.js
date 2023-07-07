import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFillBagCheckFill } from "react-icons/Bs";
import { ToastContainer, toast } from 'react-toastify';


const checkout = ({ user,cart }) => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pin, setPin] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();

  const handelChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "pin") {
      setPin(e.target.value);
    } else if (e.target.name == "mobile") {
      setMobile(e.target.value);
    }
  };

  const handelSubmit = async (e) => { 
    e.preventDefault();
    const data = {name,email,pin,mobile,address,cart};

    const saveOrder = await fetch("http://localhost:3000/api/order",{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
          
    const res = await saveOrder.json();

    if(res.success == true){
      console.log(res.data._id)
      toast.success("Order Placed Successfully")
      router.push(`/order?id=${res.data._id}`)
    }else{
      toast.error("Something went wrong while placing order")
    }

  }

  return (
    <div className="py-5">
      <ToastContainer/>
      <h3 className="font-bold text-gray-700 text-center py-2 ">Checkout</h3>
      <div className="text-gray-300 mx-10">Delivery Details</div>
      <div className="mx-10 py-14 border  shadow-inner mb-10 ">
      <form method="post" onSubmit={handelSubmit} className="mx-5">
        <div className="px-4 flex my-2 mx-auto">
          <div className="px-4 w-1/2">
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="name"
                onChange={handelChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-4 w-1/2">
          <div class="relative mb-4">
              <label for="pin" class="leading-7 text-sm text-gray-600">
                Pin
              </label>
              <input
                type="text"
                id="pin"
                required
                onChange={handelChange}
                name="pin"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="px-4 flex my-2 mx-auto m-5">
          <div className="px-4 w-1/2 ">
          
            <div class="relative mb-4">
              <label for="mobile" class="leading-7 text-sm text-gray-600">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                required
                onChange={handelChange}
                name="mobile"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-4 w-1/2">
            <div class="relative mb-4">
              <label for="mobile" class="leading-7 text-sm text-gray-600">
                Address
              </label>
              <textarea
                id="addrees"
                name="address"
                onChange={handelChange}
                required
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="px-4 w-1/4">
          <div class="relative mb-4">
            
              <button  class="flex mx-6 justify-center text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
                <BsFillBagCheckFill className="mx-1" />
                Pay Now
              </button>
           
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default checkout;
