import Image from "next/image";
import { useContext, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { quantityContext } from "../../../../../pages/_app";

const ProductPopup = ({
  id,
  tags,
  thumbnailImage,
  title,
  rating,
  previousPrice,
  price,
  sku,
  category,
  products,
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  if (productQuantity < 1) {
    setProductQuantity(1);
  }
  const {
    selectedProducts,
    setSelectedProducts,
    getSingleProduct,
    setGetSingleProduct,
  } = useContext(quantityContext);
  const handleAdd = () => {
    const data = {
      id,
      title,
      thumbnailImage,
      rating,
      price,
      tags,
      category,
      quantity: productQuantity,
    };

    const findItem = selectedProducts?.find((item) => item?.id === id);

    if (!findItem && findItem === undefined) {
      setSelectedProducts((prevItem) => [...prevItem, data]);
    }

    if (localStorage.getItem("cartItems") === null) {
      localStorage.setItem("cartItems", JSON.stringify([data]));
    } else {
      let oldData = JSON.parse(localStorage.getItem("cartItems"));
      oldData.push(data);
      // localStorage.setItem("cartItems", JSON.stringify([data]));
      localStorage.setItem("cartItems", JSON.stringify(oldData));
    }
  };

  return (
    <div className="container flex justify-center items-center">
      <div className="p-3 lg:p-7 rounded-md lg:my-0 mx-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-8">
          <div className="my-4 relative left-[50%] lg:left-0 -translate-x-[50%] lg:translate-x-0 top-0 lg:mb-0 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
            <Image src={thumbnailImage} layout="fill" alt="Product image" />
          </div>
          <div>
            <div className="status flex gap-12 items-center text-xs md:text-sm lg:text-base mb-2">
              <p className="text-gray-four uppercase font-normal">Status</p>
              <p className="font-semibold text-green-two">In Stock</p>
            </div>
            <h1 className="text-gray-one text-xl md:text-2xl lg:text-[28px] font-medium">
              {title}
            </h1>
            <div className="flex flex-row items-center mt-1 lg:mt-3">
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <span className="ml-2 text-sm font-normal text-gray-five">
                10 reviews
              </span>
            </div>

            <div className="price mt-2 lg:mt-8 flex flex-row items-center gap-6">
              <h3 className="text-gray-one text-xl md:text-2xl  lg:text-4xl font-semibold">
                ${price}
              </h3>
              <p className="line-through font-normal text-base md:text-xl lg:text-3xl text-gray-three">
                ${previousPrice}
              </p>
              <p className="font-normal text-xs text-gray-three">
                (+15% Val Included)
              </p>
            </div>
            <p className="text-sm lg:text-base text-gray-five font-normal lg:font-semibold mt-3 lg:mt-5">
              12 products sold in last 12 hours
            </p>

            <div className="hidden lg:block border border-gray-six my-8"></div>

            <div className="product-count flex flex-row justify-center sm:justify-between items-center gap-4 lg:gap-10 flex-wrap mt-4 lg:mt-0">
              <div>
                <p className="text-sm md:text-base text-gray-five font-semibold uppercase">
                  Quantity
                </p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <button
                  onClick={() => {
                    if (productQuantity >= 1) {
                      setProductQuantity((prevQ) => prevQ - 1);
                    }
                  }}
                  className="text-xl md:text-2xl font-thin w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 border-2 border-gray-six rounded-full hover:bg-gray-seven hover:transition-all"
                >
                  -
                </button>
                <button className="text-xl md:text-2xl font-thin w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gray-seven rounded-full cursor-default">
                  {productQuantity}
                </button>
                <button
                  onClick={() => setProductQuantity((prevQ) => prevQ + 1)}
                  className="text-xl md:text-2xl font-thin w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 border-2  border-gray-six rounded-full hover:bg-gray-seven hover:transition-all"
                >
                  +
                </button>
              </div>
              <div>
                <p className="text-sm">Only 0 item left</p>
              </div>
            </div>

            <div className="add-to-card mt-3 lg:mt-7">
              <button
                onClick={handleAdd}
                className="w-full bg-green-two rounded-full py py-2 smd:py-3 lg:py-5 text-sm md:text-lg text-white font-light tracking-wide border-2 border-green-two hover:border-2 hover:border-green-two hover:bg-white hover:text-green-two hover:transition-all"
              >
                Add to card
              </button>
            </div>

            <div className="add-to-card mt-3">
              <button className="w-full bg-gray-seven rounded-full py-2 smd:py-3 lg:py-5 text-sm md:text-lg text-gray-five font-normal lg:font-semibold tracking-wide hover:bg-slate-100">
                Buy Now
              </button>
            </div>

            <div className="mt-5 lg:mt-8 flex flex-row justify-left gap-10 lg:gap-0 md:justify-between flex-wrap">
              <button className="wishlist flex flex-row items-center gap-3 cursor-pointer text-base font-normal">
                <AiOutlineHeart className="text-lg md:text-2xl text-gray-five font-bold" />
                <p className="hidden md:block">Add to Wishlist</p>
              </button>
              <div className="compare flex flex-row items-center gap-3 cursor-pointer">
                <GoGitCompare className="text-lg md:text-2xl text-gray-five font-bold" />
                <p className="hidden md:block">Add to Compare</p>
              </div>
              <div className="share flex flex-row items-center gap-3 cursor-pointer">
                <AiOutlineShareAlt className="text-lg md:text-2xl text-gray-five font-bold" />
                <p className="hidden md:block">Share</p>
              </div>
            </div>

            <div className="hidden lg:block border border-gray-six my-8"></div>

            <div className="flex flex-row gap-y-10 gap-x-10 mt-6 lg:mt-0">
              <div>
                <p className="text-gray-four font-semibold text-sm md:text-base">
                  SKU
                </p>
                <p className="my-5 text-gray-four font-semibold text-sm md:text-base">
                  Category
                </p>
                <p className="text-gray-four font-semibold text-sm md:text-base">
                  Tags
                </p>
              </div>
              <div>
                <p className="text-gray-five font-semibold text-sm md:text-base">
                  {sku}
                </p>
                <p className="my-5 text-gray-five font-semibold text-sm md:text-base">
                  {category}
                </p>
                <p className="text-gray-five font-semibold text-sm md:text-base">
                  {tags?.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
