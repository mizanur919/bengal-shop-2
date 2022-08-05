import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CategoriesData from "../../../../Home/utils/categories.json";
import Category from "./Category";

const Categories = () => {
  return (
    <div>
      {/* Category */}
      <div className="title">
        <div className="bg-light-sky rounded-t-md px-8 py-7 flex items-center justify-between">
          <div>
            <span className="font-semibold text-xl text-gray-one">
              Category
            </span>
          </div>
          <FaAngleRight className="text-gray-dark" />
        </div>
        <nav className="links py-7 border border-light-sky">
          <ul className="flex flex-col px-8">
            {CategoriesData.map((category) => {
              return <Category key={category.id} {...category} />;
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Categories;
