import Order from "@/models/Order";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import React from "react";

const order = ({ order, cart,total }) => {
  const products = Object.values(order.products);
  const data = Object.keys(products);
 
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Ecommerse
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id {order.orderId}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow  border-b-2 py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Qty
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Total
                </a>
              </div>
              <p className="leading-relaxed mb-4 text-green-600">
                Your Order has been successfully submitted
              </p>

              {products.map((item, index) => {
                return (
                  <div
                    className="flex border-t border-gray-200 py-2"
                    key={index}
                  >
                    <span className="text-gray-500">{item['cartItem'].name}</span>
                    <span className="ml-auto text-gray-900">{item['cartItem'].qty}</span>
                    <span className="ml-auto text-gray-900">
                      Rs.{item['cartItem'].price}
                    </span>
                  </div>
                );
              })}

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs.{total}
                </span>
               
              
              </div>
              <button className=" mt-5 ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track order
                </button>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/order.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {

  if (mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }
  let order = await Order.findById(context.query.id);
  // Pass data to the page via props
  return { props: { order: JSON.parse(JSON.stringify(order)) } };
}

export default order;
