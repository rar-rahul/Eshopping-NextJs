import React, { useEffect, useState } from "react";
import Order from "@/models/Order";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Link from "next/link";
const orders = () => {
  const router = useRouter();

  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    const myorder = await fetch("http://localhost:3000/api/myorder", {
      method: "POST", // or 'PUT'
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
    <h3 className="text-center font-bold py-3 underline underline-offset-1">
    My Orders
  </h3>
    <div className="flex flex-row">
     
      <div className="basis-1/2">sidebar</div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light border">
                <thead className="border-b font-medium dark:border-neutral-500 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      OrderId
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((item) => {
                    return (
                      <tr
                        className="border-b dark:border-neutral-500"
                        key={item.id}
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.orderId}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.createdAt}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.amount}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <Link href={`/order?id=${item._id}`}>Detail</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default orders;
