import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState();
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const [progress, setProgress] = useState(0);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const calculateTotal = () => {
    let subTotal = 0;
    let keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      subTotal += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    console.log("Useeffect is going on");
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
    fetchProducts();
    fetchCategory();
  }, [router.query]);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
  };

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subTotal = 0;
    let keys = Object.keys(myCart);
    // for (let i = 0; i < keys.length; i++) {
    //   subTotal += myCart[keys[i]]['cartItem'].price * myCart[keys[i]]['cartItem'].qty;
    // }

    const arrayData = Object.entries(myCart);

    const ctotal = arrayData.reduce((acc, [key, value]) => {
      return acc + Number(value.cartItem.price) * value.cartItem.qty;
    }, 0);

    setTotal(ctotal);
  };

  const addToCart = (id, name, price, qty, size) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (id in cart) {
      newCart[id]["cartItem"].qty = cart[id]["cartItem"].qty + qty;
    } else {
      newCart[id] = { cartItem: { id, qty: 1, price, name, size } };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const buyNow = (id, name, price, qty, size) => {
    saveCart({});
    let item = { cartItem: { id, qty: 1, name, price, size } };
    setCart(item);
    saveCart(item);
    router.push("/checkout");
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const removeQty = (id, qty) => {
    let updatedCart = JSON.parse(JSON.stringify(cart));
    if (id in cart) {
      updatedCart[id]["cartItem"].qty = cart[id]["cartItem"].qty - qty;
    }
    if (updatedCart[id]["cartItem"].qty <= 0) {
      delete updatedCart[id];
    }
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar
        logOut={logOut}
        key={key}
        category={category}
        user={user}
        addToCart={addToCart}
        cart={cart}
        clearCart={clearCart}
        buyNow={buyNow}
        removeQty={removeQty}
      />
      <Component
        productData={products}
        total={total}
        user={user}
        addToCart={addToCart}
        cart={cart}
        clearCart={clearCart}
        buyNow={buyNow}
        removeQty={removeQty}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
