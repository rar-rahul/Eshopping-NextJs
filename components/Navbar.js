import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsCart4, BsFillBagCheckFill } from "react-icons/Bs";
import { AiFillCloseCircle } from "react-icons/Ai";
import { AiOutlineMinusCircle } from "react-icons/Ai";
import { AiOutlinePlusCircle } from "react-icons/Ai";
import { MdAccountCircle } from "react-icons/Md";

const Navbar = ({ cart, clearCart, removeFrmCart, user, category,logOut }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggeleDropdown = () => {
    setDropdown(!dropdown);
  };

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
    <div className="flex justify-between flex-col md:flex-row md:justify-start items-center py-2 shadow-sm sticky top-0 z-10 bg-white">
      <div className="logo mx-3">
        <Link href={"/"}>
          <Image width={50} height={10} src="/logoe.png" alt="logo" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-3 font-semibold bottom-1">
          {category.slice(0, 5).map((c, index) => {
            return (
              <li key={index}>
                <Link href={`/product/category/${c}`}>{c}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 top-2 sm:mx-3 flex">
        {dropdown && (
          <div id="dropdown" className="z-10 mt-6 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link href={'/orders'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</Link>
            </li>
            <li>
              <Link href={'/profile'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account</Link>
            </li>

            <li>
              <a href="#" onClick={() => {logOut()}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
      </div>
        )}

        {user.value && (
          <MdAccountCircle
            onMouseOver={toggeleDropdown}
            onMouseLeave={toggeleDropdown}
            className="text-3xl top-1 mx-2 cursor-pointer"
          />
        )}

        {!user.value && (
          <Link href={"/login"}>
           
            <button type="button" class="mt-1 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2">Login</button>

          </Link>
        )}

        <BsCart4 onClick={toggleCart} className="text-3xl mr-5" />
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
        {cart.length == 0 && <h3>your cart is empty</h3>}
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).map((k) => {
            return (
              <li key={k.id}>
                <div className="item flex my-5">
                  <div className="w-2/3">{cart[k].name} </div>
                  <div className="w-1/3 font-semibold flex items-center justify-center">
                    <AiOutlineMinusCircle className="text-3xl mx-1" />{" "}
                    {cart[k].qty}
                    <AiOutlinePlusCircle className="text-3xl mx-1" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex">
          <Link href={"/checkout"}>
            {" "}
            <button class="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            class="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            ClearCart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
