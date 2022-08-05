import { useState } from "react";
import Banner from "./Banner";
import Heading from "./Heading";
import ProductsCollection from "./ProductsCollection";

const Products = ({ products }) => {
  const [productCount, setProductCount] = useState(0);
  return (
    <div className="w-full lg:w-3/4">
      <Banner />
      <Heading products={products} productCount />
      <ProductsCollection products={products} productCount setProductCount />
    </div>
  );
};

export default Products;
