import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import { quantityContext } from "../../../../../../../pages/_app";

const Category = ({ img, title }) => {
  const { getCategory, setGetCategory } = useContext(quantityContext);
  return (
    <div>
      <li>
        <button onClick={() => setGetCategory(title)}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-8 h-8">
                <Image src={img} alt={title} layout="fill" />
              </div>
              <a className="font-medium text-base text-gray-one">{title}</a>
            </div>
            <div>
              <FaAngleRight className="text-gray-dark" />
            </div>
          </div>
        </button>
        <hr className="bg-[#EBFAEB] opacity-5 my-4" />
      </li>
    </div>
  );
};

export default Category;
