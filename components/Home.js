import React, { useEffect } from 'react'
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch,useSelector } from "react-redux";
import { addToCart,removeCart,setCartTotal } from "@/reducer/CartSlice";

const HomeComponent = ({ productData,cart}) => {
    const { products } = productData;
    const store = useSelector((state) => state.cart);
   
    const dispatch = useDispatch();
    useEffect(() => { 
      dispatch(setCartTotal(store.cart))
    })

  return (
    <div>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-wrap -m-4">
            {Array.isArray(products) ? (
              products.map((product,index) => ( 
                
                <div
                  className="lg:w-1/4 md:w-1/2 sm:w-1/2 p-3 mb-2 w-full hover:shadow border border-spacing-1 mx-0"
                  key={product.id}
                >
                  <a className="block rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="md:h-[36vh] block  m-auto md:m-0 object-scale-down h-48 w-96"
                      src={product.images[1]}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title} 
                    </h2>
                    <div className="flex flex-auto">
                      <div className="mt-1 mx-2 mr-10">₹{product.price}</div>
                      {product.id in store.cart && store.cart[product.id].qty > 0 ? (
                        <div
                          className="flex flex-row ml-20 mt-1"
                          id={`${product.id}`}
                        >
                          <AiOutlineMinusCircle
                            className="text-3xl mx-1 text-pink-500"
                            onClick={() => {
                              dispatch(removeCart({id:product.id, qty:1}));
                            }}
                          />
                          {store.cart[product.id].qty}

                          <AiOutlinePlusCircle
                           onClick={() => {
                            dispatch(addToCart( 
                              { id:product.id, 
                              qty: 1,
                               price:product.price,
                               pname: product.title, 
                               size: 'small',
                               img:product.images[1]
                              } 
                           )) 
                           }}
                            className="text-3xl mx-1 text-pink-500"
                          />
                        </div>
                      ) : (
                        <div className="mt-1 mx-10">
                          <button
                           onClick={() => {
                            dispatch(addToCart(
                               { id:product.id, 
                              qty: 1,
                               price:product.price,
                               pname: product.title, 
                               size: 'small',
                               img:product.images[1]
                              } 
                           )) 
                           }}
                            className="bg-green-500 hover:bg-pink-700 text-white font-bold py-1 px-4 mx-12
            flex justify-end rounded-full"
                          >
                            AddCart
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No product data available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeComponent
