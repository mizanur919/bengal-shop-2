import { useRef } from "react";
import Link from "next/link";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../../../../reusable/ProductCard";

const DealWeek = ({ products }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container mt-28 px-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl sm:text-4xl text-gray-one">
          Deal of the Week
        </h1>
        <div className="flex items-center gap-4">
          <div ref={prevRef}>
            <button className="bg-gray-seven p-3 rounded-full text-[#999999] hover:bg-green-two hover:transition-all hover:text-white">
              <FaAngleLeft className="text-xl " />
            </button>
          </div>
          <div ref={nextRef}>
            <button className="bg-gray-seven p-3 rounded-full text-[#999999] hover:bg-green-two hover:transition-all hover:text-white">
              <FaAngleRight className="text-xl " />
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gray-six my-8"></div>
      <div>
        {/* Swipper JS */}
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          breakpoints={{
            spaceBetween: 0,
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} products={products} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DealWeek;
