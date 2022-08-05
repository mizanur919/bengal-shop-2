import HomeLayout from "../../../layouts/HomeLayout";
import ContactPayment from "../../reusable/ContactPayment";
import Brand from "./components/Brand";
import Category from "./components/Category";
import DealWeek from "./components/DealWeek";
import HeroSlider from "./components/HeroSlider";

const HomePage = ({ products }) => {
  return (
    <HomeLayout>
      <HeroSlider />
      <Category />
      <DealWeek products={products} />
      <Brand />
      <ContactPayment />
    </HomeLayout>
  );
};

export default HomePage;
