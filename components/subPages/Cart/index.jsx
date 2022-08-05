import React from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import ViewCart from "./components/ViewCart";

const Cart = () => {
  return (
    <div>
      <HomeLayout>
        <ViewCart />
      </HomeLayout>
    </div>
  );
};

export default Cart;
