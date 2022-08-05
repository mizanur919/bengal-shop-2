import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CategoryBannerFeature = ({ img, title }) => {
  return (
    <div className="bg-pinkLight px-10 py-6 rounded-md">
      <div className="flex flex-row">
        <div className="info flex flex-col justify-evenly">
          <h3 className="text-gray-one font-bold text-base smd:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {title}
          </h3>
          <div className="w-12 h-12 bg-white rounded-full flex flex-row justify-center items-center">
            <Link href={"/"}>
              <FaArrowRight color="#FF5C00" />
            </Link>
          </div>
        </div>
        <div className="image">
          <Link href={"/"}>
            <a className="rounded-sm">
              <Image src={img} width={254} height={300} alt={title} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBannerFeature;
