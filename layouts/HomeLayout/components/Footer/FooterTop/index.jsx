import Image from "next/image";
import Link from "next/link";
import FooterData from "../../../utils/footerData";
import FooterLink from "./FooterLink";
const FooterTop = () => {
  return (
    <div className="bg-gray py-14">
      <div className="container flex flex-row items-start justify-between gap-8">
        <div className="flex flex-col gap-8 w-full md:w-3/5">
          <div className="flex justify-center md:justify-start">
            <Image
              src={"/images/logo-full.png"}
              width={297}
              height={61}
              alt="bangla shop logo"
            />
          </div>
          <div className="xl:max-w-2xl md:max-w-lg">
            <p className="text-base font-normal text-gray-five md:text-justify">
              Bengal Shop is the most popular and the best quality provided
              E-commerce platform where you can buy your daily need. We provide
              the quality product for your satisfaction. we believe in quality
              not quantity.
            </p>
          </div>
          <div className="apps flex flex-row justify-center gap-3 md:justify-start">
            <Image
              src={"/images/Play-store-badge.png"}
              width={159}
              height={48}
              alt="bangla shop logo"
            />
            <Image
              src={"/images/Apple-badge.png"}
              width={159}
              height={48}
              alt="bangla shop logo"
            />
          </div>
        </div>
        {FooterData[0].footerTop.map((item) => {
          return <FooterLink key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default FooterTop;
