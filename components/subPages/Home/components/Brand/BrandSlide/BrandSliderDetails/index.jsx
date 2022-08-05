import Image from "next/image";
import Link from "next/link";

const BrandSlideDetails = ({ img, brandName }) => {
  return (
    <div className="mb-3 text-center">
      <Link href={"/"}>
        <a className="rounded-sm">
          <Image src={img} width={140} height={85} alt={brandName} />
        </a>
      </Link>
    </div>
  );
};

export default BrandSlideDetails;
