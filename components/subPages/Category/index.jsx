import HomeLayout from "../../../layouts/HomeLayout";
import ContactPayment from "../../reusable/ContactPayment";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const CategoryPage = ({ products }) => {
  return (
    <HomeLayout>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar products={products}></Sidebar>
          <Products products={products}></Products>
        </div>
        <ContactPayment />
      </div>
    </HomeLayout>
  );
};

export default CategoryPage;
