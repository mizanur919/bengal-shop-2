import Counter from "./Counter";
import SingleBanner from "./SingleBanner";

const BrandBanner = () => {
  return (
    <div className="container bg-pink-two mt-9 smd:mt-28 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between items-center p-10">
        <div className="hidden lg:block">
          <SingleBanner
            img={"/images/limited-time-offer-1.png"}
            navLink={"/"}
            imgAlt={"image alt"}
          />
        </div>
        <div>
          <Counter />
        </div>
        <div className="hidden lg:block">
          <SingleBanner
            img={"/images/limited-time-offer-2.png"}
            navLink={"/"}
            imgAlt={"image alt"}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandBanner;
