const Slide = ({ img, title, subTitle, description, btnText }) => {
  return (
    <div className="relative w-full h-auto lg:h-[800px]">
      <img className="w-full h-full object-cover" src={img} alt={title} />
      <div className="absolute top-[50%] 2xl:left-36 left-[50%] -translate-y-[50%] -translate-x-[50%] 2xl:translate-x-0 text-center 2xl:text-left">
        <h3 className="hidden smd:block text-white text-base 2xl:text-2xl font-semibold">
          {subTitle}
        </h3>
        <h1 className="text-xl max-w-2xl smd:text-3xl lg:text-[50px] 2xl:text-[70px] font-black text-white uppercase mt-3 lg:mt-12 mb-0 lg:mb-20 lg:leading-snug  xl:leading-snug 2xl:leading-normal">
          {title}
        </h1>
        <p className="hidden smd:block text-white font-medium 2xl:text-2xl max-w-2xl mt-6">
          {description}
        </p>
        <button className="bg-green-two px-7 py-2 sm:px-8 py-2 lg:px-14 lg:py-4 text-white font-medium text-lg rounded-full mt-4 lg:mt-10 transition hover:transition-all hover:translate-x-1">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Slide;
