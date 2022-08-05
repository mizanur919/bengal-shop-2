import Image from "next/image";

const PaymentInfo = ({ img, title, imgWidth, imgHeight }) => {
  return (
    <div className="mr-6">
      <Image src={img} alt={title} width={imgWidth} height={imgHeight} />
    </div>
  );
};

export default PaymentInfo;
