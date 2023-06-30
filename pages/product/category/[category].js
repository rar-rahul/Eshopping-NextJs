import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/Ai';

const Page = ({addToCart,removeQty,cart}) => {
   const[products,setProducts] = useState([])
    const router = useRouter();
    const category = router.query.category;

    const fetchProductsByCategory = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      useEffect(() => { 
        fetchProductsByCategory()
      },[router.query])
   
    return (
        <div>

          <div className='ml-10 py-7'>
            
<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <Link href={'/'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </Link>
    </li>
    <li>
      <div className="flex items-center">
        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">category</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{router.query.category}</span>
      </div>
    </li>
  </ol>
</nav>

          </div>



          
            <section className="text-gray-600 body-font">


              
      <div className="container px-5 py-2 mx-auto ">
      
        <div className="flex flex-wrap -m-4">
        {Array.isArray(products.products) ? (
         products.products.map((product,index) => (
    
      <div className="lg:w-1/4 md:w-1/2 p-3 w-full hover:shadow border border-spacing-1 mx-0" key={product.id}>
            <a className="block relative  rounded overflow-hidden">
              <img alt="ecommerce" className="md:h-[36vh] block h-[30vh] m-auto md:m-0" src={product.images[0]}/>
            </a>
          <Link href={`/product/${product.id}`}>  <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
             </div>
             </Link>
             <div className='flex'>
             <div className="mt-1 mr-14">₹{product.price}</div>
             {product.id in cart ?(
        <div className='flex flex-row ml-20 mt-1' id={`${product.id}`}>
         <AiOutlineMinusCircle className="text-3xl mx-1 text-pink-500"  onClick={() => {removeQty(product.id,1)}}/>
         {cart[product.id]["cartItem"].qty}
          
         <AiOutlinePlusCircle onClick={()=> {addToCart(product.id,product.title,product.price,1,"small")}} className="text-3xl mx-1 text-pink-500" />
         </div>
         ) : (
          <div className="mt-1 mx-10">
          <button onClick={()=> {addToCart(product.id,product.title,product.price,1,"small")}}
           className='bg-green-500 hover:bg-pink-700 text-white font-bold py-1 px-4 mx-12
            flex justify-end rounded-full'>AddCart</button>
            </div>
         )
        }
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

export default Page
