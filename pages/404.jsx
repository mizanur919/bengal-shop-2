import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container flex flex-col justify-center items-center h-screen">
      <Image
        src={"/images/notfound.png"}
        width={500}
        height={300}
        alt="Page Not Found"
      />
      <h2 className="text-3xl my-10 font-medium">Page Not Found</h2>
      <div className="bg-green-two text-white px-10 py-3 mt-4">
        <Link href={"/"}>
          <a>Back To Home</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
