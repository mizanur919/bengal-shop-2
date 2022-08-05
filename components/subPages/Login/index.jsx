import React from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import LoginDetails from "./components/LoginPage";

const LoginPage = () => {
  return (
    <div>
      <HomeLayout>
        <LoginDetails />
      </HomeLayout>
    </div>
  );
};

export default LoginPage;
