import Categories from "./Categories";
import Price from "./Price";

const Sidebar = ({ products }) => {
  return (
    <div className="w-full lg:w-1/4">
      <Categories />
      <Price products={products} />
    </div>
  );
};

export default Sidebar;
