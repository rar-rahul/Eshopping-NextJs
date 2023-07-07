import Link from 'next/link';
import React from 'react'

const Orderlist = (data) => {
    const {myorder} = data;
    console.log(myorder);
    
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          OrderId
        </th>
        <th scope="col" className="px-6 py-3">
          OrderStatus
        </th>
        <th scope="col" className="px-6 py-3">
          Amount
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>

        {myorder.map((item,index) => { 
     return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {item.orderId}
        </th>
        <td className="px-6 py-4">{item.status}</td>
        <td className="px-6 py-4">{item.amount}</td>
        <td className="px-6 py-4">{item.createdAt}</td>
        <td className="px-6 py-4">
          <Link
            href={`/order?id=${item._id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            ViewOrder
          </Link>
        </td>
      </tr>
        })}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Orderlist
