import Image from "next/image";
import { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";

const ProductDetails = () => {
  return (
    <div className="my-28 bg-slate-300 py-10">
      <div className="max-w-screen-2xl mx-auto p-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <Image
              src={"/images/product-thumbnail.png"}
              width={600}
              height={600}
              alt="Product image"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="status flex gap-12 items-center text-base mb-2">
              <p className="text-gray-four uppercase font-normal">Status</p>
              <p className="font-semibold text-green-two">In Stock</p>
            </div>
            <h1 className="text-gray-one text-[28px] font-medium">
              Product Title
            </h1>
            <div className="flex flex-row items-center mt-3">
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <AiFillStar color="#FABE50" />
              <span className="ml-2 text-sm font-normal text-gray-five">
                10 reviews
              </span>
            </div>

            <div className="price mt-8 flex flex-row items-center gap-6">
              <h3 className="text-gray-one text-2xl md:text-4xl font-semibold">
                $59.00
              </h3>
              <p className="line-through font-normal text-xl md:text-3xl text-gray-three">
                $65.00
              </p>
              <p className="font-normal text-base text-gray-three">
                (+15% Val Included)
              </p>
            </div>
            <p className="text-base text-gray-five font-semibold mt-5">
              12 products sold in last 12 hours
            </p>

            <div className="border border-gray-six my-8"></div>

            <div className="product-count flex flex-row items-center gap-10 flex-wrap">
              <div>
                <p className="text-base text-gray-five font-semibold uppercase">
                  Quantity
                </p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <button className="text-2xl font-thin w-14 h-14 border-2 border-gray-six rounded-full hover:bg-gray-seven hover:transition-all">
                  -
                </button>
                <button className="text-xl font-semibold w-14 h-14 bg-gray-seven rounded-full cursor-default">
                  1
                </button>
                <button className="text-2xl font-thin w-14 h-14 border-2  border-gray-six rounded-full hover:bg-gray-seven hover:transition-all">
                  +
                </button>
              </div>
              <div>
                <p>Only 0 item left</p>
              </div>
            </div>

            <div className="add-to-card mt-7">
              <button className="w-full bg-green-two rounded-full py-5 text-lg text-white font-light tracking-wide border-2 border-green-two hover:border-2 hover:border-green-two hover:bg-white hover:text-green-two hover:transition-all">
                Add to card
              </button>
            </div>

            <div className="add-to-card mt-4">
              <button className="w-full bg-gray-seven rounded-full py-5 text-lg text-gray-five font-semibold tracking-wide hover:bg-slate-100">
                Buy Now
              </button>
            </div>

            <div className="mt-8 flex flex-row justify-evenly sm:justify-between">
              <div className="wishlist flex flex-row items-center gap-3 cursor-pointer text-base font-normal">
                <AiOutlineHeart className="text-2xl text-gray-five font-bold" />
                <p className="hidden sm:block">Add to Wishlist</p>
              </div>
              <div className="compare flex flex-row items-center gap-3 cursor-pointer">
                <GoGitCompare className="text-2xl text-gray-five font-bold" />
                <p className="hidden sm:block">Add to Compare</p>
              </div>
              <div className="share flex flex-row items-center gap-3 cursor-pointer">
                <AiOutlineShareAlt className="text-2xl text-gray-five font-bold" />
                <p className="hidden sm:block">Share</p>
              </div>
            </div>

            <div className="border border-gray-six my-8"></div>

            <div className="flex flex-row gap-y-10 gap-x-10">
              <div>
                <p className="text-gray-four font-semibold text-base">SKU</p>
                <p className="my-5 text-gray-four font-semibold text-base">
                  Category
                </p>
                <p className="text-gray-four font-semibold text-base">Tags</p>
              </div>
              <div>
                <p className="text-gray-five font-semibold text-base">
                  123OPU9
                </p>
                <p className="my-5 text-gray-five font-semibold text-base">
                  Food
                </p>
                <p className="text-gray-five font-semibold text-base">
                  One, Two, Three
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
