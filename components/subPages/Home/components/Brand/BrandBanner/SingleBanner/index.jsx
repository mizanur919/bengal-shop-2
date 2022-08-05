import Image from "next/image";
import Link from "next/link";

const SingleBanner = ({ img, navLink, imgAlt }) => {
  return (
    <div>
      <Link href={navLink}>
        <a className="rounded-sm">
          <Image src={img} width={350} height={320} alt={imgAlt} />
        </a>
      </Link>
    </div>
  );
};
export default SingleBanner;
