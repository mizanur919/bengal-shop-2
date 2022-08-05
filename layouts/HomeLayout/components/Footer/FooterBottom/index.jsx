import { FaFacebookF, FaInstagram, FaTwitter, FaSkype } from "react-icons/fa";
import footerData from "../../../utils/footerData.json";
import PaymentInfo from "./PaymentInfo";
const FooterBottom = () => {
  return (
    <div className="bg-gray py-6 xl:py-8">
      <div className="xl:block hidden">
        <div className="container flex flex-row justify-between items-center">
          <div className="social text-white flex flex-row gap-3">
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
          <div className="copyright text-base font-medium flex justify-center xl:w-full">
            <p className="text-center">
              &copy;2022 Copyright All Right Reserved by Bengal Shop
            </p>
          </div>
          <div className="payments flex flex-row items-center justify-end">
            {footerData[1]?.footerBottom?.payments?.map((item) => {
              return <PaymentInfo key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
      <div className="container block xl:hidden">
        <div className="hidden md:flex items-center justify-between">
          <div className="social text-white flex flex-row gap-3">
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
          <div className="payments flex flex-row items-center justify-end">
            {footerData[1]?.footerBottom?.payments?.map((item) => {
              return <PaymentInfo key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className="copyright text-base font-medium flex justify-center mt-6">
          <p className="text-center">
            &copy;2022 Copyright All Right Reserved by Bengal Shop
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
