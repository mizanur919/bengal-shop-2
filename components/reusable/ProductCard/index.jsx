import Image from "next/image";
import Link from "next/link";
import Rating from "react-rating";
import { useState, useContext, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { quantityContext } from "../../../pages/_app";
import ProductPopup from "../../subPages/Category/components/ProductDetails";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ProductCard = ({
  id,
  thumbnailImage,
  title,
  rating,
  previousPrice,
  price,
  category,
  products,
}) => {
  const [productData, setProductData] = useState([]);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [productQuantity, setProductQuantity] = useState(1);

  if (productQuantity < 1) {
    setProductQuantity(1);
  }

  // useEffect(() => {
  //   if (localStorage.getItem("cartItems") === null) {
  //     localStorage.setItem("cartItems", JSON.stringify(productData));
  //   } else {
  //     localStorage.setItem("cartItems", JSON.stringify(productData));
  //   }
  // }, []);

  const {
    selectedProducts,
    setSelectedProducts,
    getSingleProduct,
    setGetSingleProduct,
  } = useContext(quantityContext);

  const handleAdd = () => {
    const data = {
      id,
      title,
      thumbnailImage,
      rating,
      price,
      category,
      quantity: productQuantity,
    };
    const findItem = selectedProducts?.find((item) => item?.id === id);
    if (!findItem && findItem === undefined) {
      setSelectedProducts((prevItem) => [...prevItem, data]);
    }
    setProductData((prevItem) => [...prevItem, data]);
    if (localStorage.getItem("cartItems") === null) {
      localStorage.setItem("cartItems", JSON.stringify([data]));
    } else {
      let oldData = JSON.parse(localStorage.getItem("cartItems"));
      oldData.push(data);
      // localStorage.setItem("cartItems", JSON.stringify([data]));
      localStorage.setItem("cartItems", JSON.stringify(oldData));
    }
  };

  const handleOnShow = (productId) => {
    setGetSingleProduct(productId);
    setOpen((o) => !o);
  };

  // Get Single Product Data
  const singleProductData = products?.find(
    (product) => product.id === getSingleProduct
  );

  return (
    <div className="mb-10">
      {/* Card Image */}
      <div className="mb-3 relative group overflow-hidden">
        <Link href={"/"}>
          <div className="rounded-sm left-[50%] -translate-x-[50%] relative w-[280px] h-[280px] smd:w-[300px] smd:h-[300px] md:w-[330px] md:h-[330px] 3xl:w-[400px] 3xl:h-[400px] ">
            <Image
              src={thumbnailImage}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>
        <div className="hidden absolute top-0 left-0 bg-black opacity-60 w-full h-full group-hover:block"></div>
        <button className="hidden bg-black text-white text-base font-medium text-center rounded-md py-2 w-16 absolute top-4 left-4 group-hover:block">
          New
        </button>
        <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full text-center">
          <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <div className="flex flex-row justify-center gap-5">
              <button
                onClick={() => {
                  if (productQuantity >= 1) {
                    setProductQuantity((prevQ) => prevQ - 1);
                  }
                }}
                className="text-2xl font-thin w-12 h-12 border-2 border-white text-white rounded-full hover:bg-gray-seven hover:text-gray-one hover:transition-all"
              >
                -
              </button>
              <button className="text-xl font-semibold w-12 h-12 bg-gray-seven rounded-full cursor-default">
                {productQuantity}
              </button>
              <button
                onClick={() => setProductQuantity((prevQ) => prevQ + 1)}
                className="text-2xl font-thin w-12 h-12 border-2 border-white text-white rounded-full hover:bg-gray-seven hover:text-gray-one hover:transition-all"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="bg-green-two w-full rounded-full text-white font-medium py-3 mt-5"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <button
          type="button"
          className="hidden bg-gray-seven text-gray-eight rounded-t-md py-2 w-full absolute bottom-0 left-0 group-hover:flex justify-center items-center transition-all"
          onClick={() => handleOnShow(id)}
        >
          <span className="mr-4">Details</span>
          <FaLongArrowAltRight />
        </button>
        <Popup
          open={open}
          closeOnDocumentClick
          onClose={closeModal}
          className="my-popup"
        >
          <div className="modal">
            <a
              className="text-4xl absolute top-0 right-3 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </a>
            <ProductPopup {...singleProductData} />
          </div>
        </Popup>
      </div>

      {/* Card Info */}
      <div className="text-center">
        <Link href={"/"}>
          <a className="font-normal text-gray-four">{category}</a>
        </Link>
        <div className="flex flex-row items-center justify-center mt-3">
          <Rating
            className="star-rating text-yellow-five"
            emptySymbol={<AiOutlineStar color="#FABE50" />}
            fullSymbol={<AiFillStar color="#FABE50" />}
            initialRating={rating}
            readonly
          />
          <span className="ml-1 text-sm font-normal text-gray-five">(121)</span>
        </div>
        <p className="text-xl font-medium text-gray-one mt-3">{title}</p>
        <div className="price mt-3">
          <p className="text-xl font-medium text-dark-orange">
            ${price}{" "}
            <span className="line-through font-normal text-lg text-gray-four">
              ${previousPrice}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
