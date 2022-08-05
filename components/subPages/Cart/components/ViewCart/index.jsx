import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import { quantityContext } from "../../../../../pages/_app";

const ViewCart = () => {
  const { data: session } = useSession();
  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("cartItems");
    if (!data) {
      console.log("no data");
    } else {
      setCartItems(JSON.parse(data));
    }
  }, [selectedProducts]);

  const handleItemDelete = (id) => {
    let newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    setSelectedProducts(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  return (
    <div className="container my-8">
      <h1 className="text-center text-3xl mb-8">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="w-full lg:w-3/4 mx-auto h-[300px] overflow-y-scroll px-5">
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex justify-between items-center pt-6 w-full mx-auto">
                  <div className="flex just items-center">
                    <Image
                      src={item.thumbnailImage}
                      width={40}
                      height={40}
                      alt={item.title}
                    />
                    <div className="flex flex-col ml-3">
                      <span className="md:text-md font-medium">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="pr-8 ">
                      <span className="text-xs font-medium">
                        Quantity {item.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="pr-8 ">
                      <span className="text-xs font-medium">
                        {item.quantity} &times; {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="pr-8 ">
                      <span className="text-xs font-medium">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleItemDelete(item.id)}
                    className="bg-red-500 px-3 py-1 text-white text-sm"
                  >
                    Remove
                  </button>
                </div>
                <hr className="w-1/2 text-gray-two mx-auto my-4" />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <p className="text-center my-10">Your cart is empty...</p>
          <div className="w-[220px] mx-auto">
            <Link href={"/category"}>
              <a className="bg-green-two text-center inline-block text-white px-4 py-2 rounded-md mt-4">
                Go To Shop
              </a>
            </Link>
          </div>
        </>
      )}
      {session && cartItems.length > 0 ? (
        <div className="w-[250px] mx-auto">
          <Link href={"/checkout"}>
            <a className="bg-green-two text-center inline-block smd:w-[300px] text-white p-2 rounded-md mt-4">
              Proceed To Checkout
            </a>
          </Link>
        </div>
      ) : (
        <>
          <div className="w-[250px] mx-auto">
            <Link href={"/login"}>
              <a className="bg-green-two text-center inline-block smd:w-[300px] text-white p-2 rounded-md mt-4">
                Log In
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewCart;
