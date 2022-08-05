import CategoryBanner from "./CategoryBanner";
import CategorySlide from "./CategorySlide";

const Category = () => {
  return (
    <div className="px-2 md:px-0 mt-28">
      <CategorySlide />
      <CategoryBanner />
    </div>
  );
};

export default Category;
