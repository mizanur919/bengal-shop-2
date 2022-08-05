import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div className="lg:py-8">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default Header;
