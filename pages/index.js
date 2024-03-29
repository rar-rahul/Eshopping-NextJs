import { Inter } from "next/font/google";
import Head from "next/head";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productData, addToCart, cart, removeQty }) {
  const { products } = productData;
  return (
    <div>
      <Head>
        <title>Ecommerse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center py-1">
        <div className="container mx-auto px-1">
          <img src="/banner.jpg" alt="banner" className="max-w-full h-auto" />
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Choose Your Product
            </h1>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-wrap -m-4">
            {Array.isArray(products) ? (
              products.map((product) => (
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
                      {product.id in cart ? (
                        <div
                          className="flex flex-row ml-20 mt-1"
                          id={`${product.id}`}
                        >
                          <AiOutlineMinusCircle
                            className="text-3xl mx-1 text-pink-500"
                            onClick={() => {
                              removeQty(product.id, 1);
                            }}
                          />
                          {cart[product.id]["cartItem"].qty}

                          <AiOutlinePlusCircle
                            onClick={() => {
                              addToCart(
                                product.id,
                                product.title,
                                product.price,
                                1,
                                "small"
                              );
                            }}
                            className="text-3xl mx-1 text-pink-500"
                          />
                        </div>
                      ) : (
                        <div className="mt-1 mx-10">
                          <button
                            onClick={() => {
                              addToCart(
                                product.id,
                                product.title,
                                product.price,
                                1,
                                "small"
                              );
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
  );
}
