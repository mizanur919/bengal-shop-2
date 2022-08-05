import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { quantityContext } from "../../../../../pages/_app";

const CartPopUp = () => {
  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("cartItems");
    if (!data) {
      console.log("no data");
    } else {
      setCartItems(JSON.parse(data));
    }
  }, [selectedProducts]);

  return (
    <div className="bg-gray-two w-96 h-80 absolute top-[100%] right-0 z-10 p-5 rounded-md">
      <div>
        {cartItems.slice(0, 2).map((item) => {
          return (
            <div key={item.id} className="mb-4 w-96 mx-auto">
              <div className="flex flex-row gap-10 items-center">
                <div>
                  <Image
                    src={item.thumbnailImage}
                    width={80}
                    height={80}
                    alt={item.title}
                  />
                </div>
                <div className="text-left">
                  <h2>{item.title}</h2>
                  <p>Price: {item.price}</p>
                </div>
              </div>
              <div className="border border-white w-48 mx-auto"></div>
            </div>
          );
        })}
        <p>Total products added: {cartItems.length}</p>
        <button onClick={() => setIsCartOpen(!isCartOpen)} className="mb-10">
          <AiOutlineClose className="absolute top-6 right-7 text-3xl bg-gray-four p-2 rounded-full" />
        </button>
        {cartItems.length > 0 ? (
          <Link href={"/cart"}>
            <div className="absolute bottom-1 left-[50%] -translate-x-[50%] bg-green-two text-white w-48 p-4 rounded-lg">
              View Cart
            </div>
          </Link>
        ) : (
          <Link href={"/category"}>
            <div className="absolute bottom-1 left-[50%] -translate-x-[50%] bg-green-two text-white w-48 p-4 rounded-lg">
              Start Shopping
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartPopUp;
