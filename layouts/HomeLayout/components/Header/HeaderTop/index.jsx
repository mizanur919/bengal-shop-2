import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaRegHeart,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineShoppingBag, MdShoppingBag } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useState, useContext, useEffect } from "react";
import { quantityContext } from "../../../../../pages/_app";
import CartPopUp from "../CartPopUp";

const HeaderTop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data: session } = useSession();

  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  const router = useRouter();

  useEffect(() => {
    let data = localStorage.getItem("cartItems");
    if (!data) {
      console.log("no data");
    } else {
      setCartItems(JSON.parse(data));
    }
  }, [selectedProducts]);

  return (
    <div className="lg:container">
      <div className="hidden lg:block">
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <Link href={"/"}>
            <div className="cursor-pointer">
              <Image
                src={"/images/logo-full.png"}
                width={297}
                height={61}
                alt="bengal shop logo"
              />
            </div>
          </Link>

          {/* Search */}
          <div className="relative">
            <AiOutlineSearch className="absolute top-[50%] left-5 -translate-y-[50%] text-2xl text-gray-five" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-[320px] xl:w-[450px] 2xl:w-[550px] 3xl:w-[667px] border border-gray-six py-4 pl-16 pr-36 rounded-full text-base focus:border-gray-six focus:border focus:outline-none"
            />
            <button className="absolute right-2 top-[50%] -translate-y-[50%] bg-gray-five text-white px-8 py-3 rounded-full border-none">
              <span className="text-base">Search</span>
            </button>
          </div>

          {/* Account */}
          <div className="flex flex-row gap-7 items-center">
            <button>
              <div className="relative">
                <FaRegHeart className="text-xl" />
              </div>
            </button>

            <button
              className="cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <div className="relative">
                <MdOutlineShoppingBag className="text-xl text-gray-five" />
                <a className="absolute -top-6 -right-4 bg-dark-orange w-6 h-6 rounded-full text-white text-xs flex items-center justify-center">
                  {cartItems?.length}
                </a>
                {!isCartOpen ? <></> : <CartPopUp />}
              </div>
            </button>
            <div className="flex flex-row">
              {/* <Link href={"/"}>
                <div className="flex flex-row items-center gap-3">
                  <div className="bg-gray-seven p-3 rounded-full">
                    <BiUser className="text-3xl text-gray-five" />
                  </div>
                  <span className="text-gray-five">Account</span>
                </div>
              </Link> */}
              {session ? (
                <button onClick={() => router.push("/account")}>
                  {session.user.image ? (
                    <div className="flex flex-row items-center gap-3">
                      <Image
                        src={session.user.image}
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%" }}
                        alt="user image"
                      />
                      <span className="text-gray-five">Account</span>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-3">
                      <div className="bg-gray-seven p-3 rounded-full">
                        <BiUser className="text-3xl text-gray-five" />
                      </div>
                      <span className="text-gray-five">Account</span>
                    </div>
                  )}
                </button>
              ) : (
                <button onClick={() => router.push("/login")}>
                  <div>
                    <span className="text-gray-five">Account</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="block lg:hidden my-4 mx-8">
        <div className="flex flex-row items-center justify-between">
          <div className="relative w-[230px] h-[48px]">
            <Link href={"/"}>
              <Image
                src={"/images/logo-full.png"}
                width={290}
                height={61}
                layout="fill"
                alt="bangla shop logo"
              />
            </Link>
          </div>
          <div>
            <AiOutlineMenu
              onClick={() => setIsOpen(!isOpen)}
              className="text-4xl border-2 rounded-md p-1 text-gray-three"
            />
          </div>
        </div>
      </div>
      {!isOpen ? (
        <></>
      ) : (
        <div
          className={`fixed z-20 top-0 left-0 block lg:hidden bg-[#ecf0f1] w-10/12 h-full p-10 shadow-sm shadow-dark-orange ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full transition-all duration-200"
          }`}
        >
          <button onClick={() => setIsOpen(!isOpen)} className="mb-10">
            <AiOutlineClose className="absolute top-6 right-7 text-3xl text-gray-three border-2 border-gray-three rounded-lg" />
          </button>

          {/* Main Content */}
          <div>
            <div className="flex flex-row justify-between gap-7 items-center">
              <Link href={"/"}>
                <div className="flex flex-row items-center gap-3">
                  <div className="border-2 border-gray-three p-3 rounded-full">
                    <BiUser className="text-2xl text-gray-five" />
                  </div>
                </div>
              </Link>
              <div className="flex flex-row gap-7">
                <Link href={"/"}>
                  <div className="relative">
                    <FaRegHeart className="text-xl" />
                  </div>
                </Link>
                <Link href={"/cart"}>
                  <div className="relative">
                    <MdOutlineShoppingBag className="text-xl text-gray-five" />
                    <a className="absolute -top-6 -right-4 bg-dark-orange w-6 h-6 rounded-full text-white text-xs flex items-center justify-center">
                      {selectedProducts?.length}
                    </a>
                  </div>
                </Link>
              </div>
            </div>
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full border border-gray-six py-4 mt-7 pl-16 pr-8 rounded-full text-base focus:border-gray-six focus:border focus:outline-none"
              />
            </div>
            {/* Menu */}
            <nav className="mt-7">
              <ul className="ml-2">
                <li className="px-3 py-1 mb-1 hover:bg-gray-two">
                  <Link href={"/"}>
                    <a className="text-xl">Home</a>
                  </Link>
                </li>
                <li className="px-3 py-1 mb-1 hover:bg-gray-two">
                  <Link href={"/category"}>
                    <a className="text-xl">Shop</a>
                  </Link>
                </li>
                <li className="px-3 py-1 mb-1 hover:bg-gray-two">
                  <Link href={"/"}>
                    <a className="text-xl">Pages</a>
                  </Link>
                </li>
                <li className="px-3 py-1 mb-1 hover:bg-gray-two">
                  <Link href={"/"}>
                    <a className="text-xl">Blog</a>
                  </Link>
                </li>
                <li className="px-3 py-1 mb-1 hover:bg-gray-two">
                  <Link href={"/"}>
                    <a className="text-xl">Contact</a>
                  </Link>
                </li>
                <li className="px-3 py-1 mb-1 hover:bg-gray-two">
                  <Link href={"/"}>
                    <a className="text-xl">Track Order</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="absolute bottom-10 left-12 text-white flex flex-row gap-3">
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-sm text-sm text-gray-five hover:bg-red-orange hover:text-white cursor-pointer transition-all">
              <FaFacebookF />
            </div>
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-sm text-sm text-gray-five hover:bg-red-orange hover:text-white cursor-pointer transition-all">
              <FaInstagram />
            </div>
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-sm text-sm text-gray-five hover:bg-red-orange hover:text-white cursor-pointer transition-all">
              <FaTwitter />
            </div>
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded-sm text-sm text-gray-five hover:bg-red-orange hover:text-white cursor-pointer transition-all">
              <FaSkype />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderTop;
