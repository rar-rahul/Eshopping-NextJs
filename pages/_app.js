import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const[cart,setCart] = useState({});
  const[total,setTotal] = useState();

  const saveCart = (myCart) => { 
    localStorage.setItem('cart',JSON.stringify(myCart))
    let subTotal = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subTotal+=  myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setTotal(subTotal)
  }

  const addToCart = (id,name,price,qty,size)=> {
    let newCart = cart;
    if(id in cart){
      newCart[id].qty = cart[id].qty + qty
    }else{
      newCart[id] = {qty:1,price,name,size}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  

  const clearCart = () => { 
    setCart({})
    saveCart({})
  }


  return <>
  <Navbar addToCart={addToCart} cart={cart} clearCart={clearCart} />
  <Component addToCart={addToCart} cart={cart} clearCart={clearCart}  {...pageProps} />
  <Footer/>
  </>
}
