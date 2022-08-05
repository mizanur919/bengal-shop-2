import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { quantityContext } from "../../../../../pages/_app";
import { useFormik } from "formik";

const CheckoutDetails = () => {
  const { selectedProducts, setSelectedProducts } = useContext(quantityContext);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("cartItems");
    if (!data) {
      console.log("no data");
    } else {
      setCartItems(JSON.parse(data));
    }
  }, [selectedProducts]);
  const shippingCost = 0;
  if (cartItems.length != 0) {
    shippingCost = 10;
  }
  let subTotal = 0;
  cartItems.map((product) => {
    subTotal += product.price * product.quantity;
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      postcode: "",
      notes: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
    }),
  });

  return (
    <div className="container my-8">
      <h1 className="text-center text-3xl mb-8">Checkout</h1>

      <div className="flex flex-col w-full px-0 mx-auto lg:flex-row">
        <div className="flex flex-col md:w-full">
          <h2 className="mb-4 font-bold md:text-xl text-heading ">
            Shipping Address
          </h2>
          <div className="justify-center w-full mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div className="space-x-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <div className="block mb-3 text-md font-semibold text-gray-500">
                    First Name <span className="text-red-600">*</span>
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder="First Name"
                    className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="text-red-600">{formik.errors.firstName}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="w-full lg:w-1/2 ">
                  <div className="block mb-3 text-md font-semibold text-gray-500">
                    Last Name <span className="text-red-600">*</span>
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="text-red-600">{formik.errors.lastName}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <div className="block mb-3 text-md font-semibold text-gray-500">
                    Email <span className="text-red-600">*</span>
                  </div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-600">{formik.errors.email}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <div className="block mb-3 text-md font-semibold text-gray-500">
                    Address <span className="text-red-600">*</span>
                  </div>
                  <textarea
                    className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                    cols={20}
                    rows={4}
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    placeholder="Address"
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <p className="text-red-600">{formik.errors.address}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="space-x-0 lg:flex lg:space-x-4 mt-3">
                <div className="w-full lg:w-1/2 ">
                  <div className="block mb-3 text-md font-semibold text-gray-500">
                    City <span className="text-red-600">*</span>
                  </div>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    placeholder="City"
                    className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <p className="text-red-600">{formik.errors.city}</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="w-full lg:w-1/2 ">
                  <div className="block mb-3 text-md font-semibold text-gray-500">
                    Postcode
                  </div>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postcode}
                    placeholder="Postcode"
                    className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                  />
                </div>
              </div>
              <div className="relative pt-3 xl:pt-6">
                <div className="w-full">
                  <div className="block mb-3 text-md font-semibold text-gray-500">
                    Notes(option)
                  </div>
                  <textarea
                    className="w-full px-4 py-3 text-sm border border-gray-four rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-green-two focus:border-green-two"
                    cols={20}
                    rows={4}
                    id="notes"
                    name="notes"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.notes}
                    placeholder="Notes for delivery"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Place Order"
                className="my-10 bg-green-two text-white w-48 text-center mx-auto p-3 text-lg cursor-pointer"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
          <div className="pt-12 md:pt-0 2xl:ps-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="mt-8">
              <div className="flex flex-col space-y-4">
                {cartItems.map((product) => {
                  return (
                    <div className="flex space-x-4" key={product.id}>
                      <div>
                        <Image
                          src={product.thumbnailImage}
                          width={80}
                          height={80}
                          alt={product.title}
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <span className="text-gray-five">Price</span> $
                        {product.price * product.quantity}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Subtotal<span className="ml-2">${subTotal}</span>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Shipping Tax<span className="ml-2">${shippingCost}</span>
            </div>
            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
              Total<span className="ml-2">${subTotal + shippingCost}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
