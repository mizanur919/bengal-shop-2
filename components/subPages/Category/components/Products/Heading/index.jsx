import Link from "next/link";
import { useContext } from "react";
import { quantityContext } from "../../../../../../pages/_app";
const Heading = ({ products }) => {
  const { productCount, getCategory } = useContext(quantityContext);
  // console.log("my categroy section:", typeof getCategory);
  let count = products.length;
  if (productCount === 0 && products.length > 0 && getCategory === "") {
    count = products.length;
  } else if (productCount != 0) {
    count = productCount;
  } else {
    count = 0;
  }

  return (
    <div className="py-10">
      <h1 className="text-gray-one text-4xl font-bold text-center md:text-left">
        Fruits Collection
      </h1>
      <div className="hidden  md:flex flex-row justify-between mt-3">
        <div className="flex flex-row gap-4">
          <Link href={"/"}>
            <a className="text-gray-three hover:text-gray-dark">Fruits</a>
          </Link>
          <span>|</span>
          <Link href={"/"}>
            <a className="text-gray-three hover:text-gray-dark">Green Fruits</a>
          </Link>
          <span>|</span>
          <Link href={"/"}>
            <a className="text-gray-three hover:text-gray-dark">Fresh Fruits</a>
          </Link>
        </div>
        <div>
          <p className="text-gray-one ">
            <span className="font-bold">{count}</span> Products Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
