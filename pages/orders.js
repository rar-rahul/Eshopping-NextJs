import React, { useEffect, useState } from "react";
import Order from "@/models/Order";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Orderlist from "@/components/Orderlist";
const orders = () => {
  const router = useRouter();

  const [data, setData] = useState([]);

  const fetchOrder = async () => {
      
    const myorder = await fetch("http://localhost:3000//api/myorder",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    });

    const res = await myorder.json();
    setData(res.orders);
   
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      fetchOrder();
    }
  }, []);

  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <div className="w-3/4 min-h-screen bg-white">
          {/* Page content goes here */}
          <div className="p-6">
            <h1 className="text-2xl font-medium text-gray-400 text-center mb-4">
              Order List
            </h1>
            <Orderlist myorder={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orders;
