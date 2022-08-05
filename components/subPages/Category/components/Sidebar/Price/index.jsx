import { Slider } from "@mui/material";
import { useContext, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { quantityContext } from "../../../../../../pages/_app";
const Price = ({ products }) => {
  const [val, setVal] = useState([300, 800]);
  const { priceValue, setPriceValue } = useContext(quantityContext);
  const updateVal = (e, item) => {
    setVal(item);
    setPriceValue(item);
  };
  return (
    <div className="mt-6">
      <div className="bg-light-sky rounded-t-md px-8 py-7 flex items-center justify-between">
        <div>
          <span className="font-semibold text-xl text-gray-one">Price</span>
        </div>
        <FaAngleRight className="text-gray-dark" />
      </div>
      <div className="links px-8 py-7 border border-light-sky">
        <div className="w-full mx-auto">
          <Slider
            className="border-red-500"
            defaultValue={val}
            valueLabelDisplay="auto"
            onChange={updateVal}
            min={100}
            max={900}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium text-light-black">${val[0]}</p>
          <p className="text-base font-medium text-light-black">${val[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
