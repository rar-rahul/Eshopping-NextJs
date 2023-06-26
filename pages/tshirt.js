import Link from 'next/link'
import React from 'react'

const Tshirt = ({productData}) => {
  const { products } = productData;
 

  
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
  
    <div className="flex flex-wrap -m-4" >
    {Array.isArray(products) ? (
     products.map((product) => (
    <div className="lg:w-1/4 md:w-1/2 p-3 w-full hover:shadow border border-spacing-1 mx-0" key={product.id}>
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="md:h-[36vh] block h-[30vh] m-auto md:m-0" src={product.images[0]}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
         <div className='flex'>
         <div className="mt-1 mr-14">₹{product.price}</div>
         <div className="mt-1"><button className='bg-green-500 hover:bg-pink-700 text-white  font-bold py-1 px-4 mx-12 flex justify-end rounded-full'>BuyNow</button></div>
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

export default Tshirt