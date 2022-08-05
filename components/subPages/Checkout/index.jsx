import React from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import CheckoutDetails from "./components/CheckoutPage";

const CheckoutPage = () => {
  return (
    <div>
      <HomeLayout>
        <CheckoutDetails />
      </HomeLayout>
    </div>
  );
};

export default CheckoutPage;
