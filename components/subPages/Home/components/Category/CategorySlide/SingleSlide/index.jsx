import Image from "next/image";
import Link from "next/link";

const SingleSlide = ({ img, title }) => {
  return (
    <div className="flex flex-col justify-center items-center image text-center w-52 h-52 smd:w-44 smd:h-44 rounded-full border-2 border-gray-seven hover:border-dark-orange transition-all cursor-pointer">
      <Link href={"/"}>
        <div>
          <a className="rounded-sm">
            <Image src={img} width={100} height={100} alt={title} />
          </a>
          <p className="font-medium text-base smd:text-sm text-gray-one">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleSlide;
