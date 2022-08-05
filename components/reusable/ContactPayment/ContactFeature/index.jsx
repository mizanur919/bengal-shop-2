import Image from "next/image";
import Link from "next/link";

const ContactFeature = ({ img, title, subTitle }) => {
  return (
    <div className="flex smd:flex-col 3xl:flex-row items-center gap-7 mt-10 xl:mt-0">
      <div className="image">
        <Link href={"/"}>
          <a className="rounded-sm">
            <Image src={img} width={100} height={100} alt={title} />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col gap-3 text-center 3xl:text-left">
        <h3 className="text-lg lg:text-2xl font-medium text-gray-one">
          {title}
        </h3>
        <p className="font-normal text-lg text-gray-three">{subTitle}</p>
      </div>
    </div>
  );
};

export default ContactFeature;
