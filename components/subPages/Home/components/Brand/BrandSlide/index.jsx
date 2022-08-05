import { useRef } from "react";
import brands from "../../../utils/brands.json";
import BrandSlideDetails from "./BrandSliderDetails";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BrandSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container mt-28">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl sm:text-4xl text-gray-one">
          Popular Brands
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
          // navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {brands?.map((brand) => {
            return (
              <SwiperSlide key={brand.id}>
                <BrandSlideDetails {...brand} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
