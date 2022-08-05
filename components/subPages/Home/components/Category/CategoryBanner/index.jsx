import CategoryBannerFeature from "./CategoryBannerFeature";
import categoryBannerData from "../../../utils/categoryBannerData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncBanners } from "../../../../../../store/slices/bannerSlice";

const CategoryBanner = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banners);
  useEffect(() => {
    dispatch(fetchAsyncBanners());
  }, []);
  return (
    <div className="container">
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5 mt-24">
        {banners?.list?.map((banner) => {
          return <CategoryBannerFeature key={banner.id} {...banner} />;
        })}
      </div>
    </div>
  );
};

export default CategoryBanner;
