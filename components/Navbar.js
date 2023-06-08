import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { BsCart4, BsFillBagCheckFill } from "react-icons/Bs";
import { AiFillCloseCircle } from "react-icons/Ai";
import { AiOutlineMinusCircle } from "react-icons/Ai";
import { AiOutlinePlusCircle } from "react-icons/Ai";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };

  const ref = useRef();

  return (
    <div className="flex justify-between flex-col md:flex-row md:justify-start items-center py-2 shadow-sm">
      <div className="logo mx-3">
        <Link href={"/"}>
          <Image width={50} height={10} src="/logoe.png" alt="logo" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-3 font-bold">
          <Link href={"/tshirt"}>
            <li>Tshirt</li>
          </Link>
          <Link href={"/mug"}>
            {" "}
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute right-0 mx-5 top-2 sm:mx-3"
      >
        <BsCart4 className="text-3xl" />
      </div>

      <div
        ref={ref}
        className="w-56 sidebar absolute top-0 right-0 bg-pink-300 p-10 transform transition-transform translate-x-full"
      >
        <h2
          className="font-bold text-xl
            "
        >
          Shopping cart
        </h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3">T-shirtwear the </div>
              <div className="w-1/3 font-semibold flex items-center justify-center">
              <AiOutlineMinusCircle className="text-3xl mx-1"/>  1 <AiOutlinePlusCircle className="text-3xl mx-1"/>
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3">T-shirtwear the </div>
              <div className="w-1/3 font-semibold flex items-center justify-center">
              <AiOutlineMinusCircle className="text-3xl mx-1"/>  1 <AiOutlinePlusCircle className="text-3xl mx-1"/>
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3">T-shirtwear the </div>
              <div className="w-1/3 font-semibold flex items-center justify-center">
              <AiOutlineMinusCircle className="text-3xl mx-1"/>  1 <AiOutlinePlusCircle className="text-3xl mx-1"/>
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
        <button class="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>Checkout</button>
        <button class="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">ClearCart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
