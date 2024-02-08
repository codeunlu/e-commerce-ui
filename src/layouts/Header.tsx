import User from "@/components/shared/User";
import Search from "@/components/shared/Search";
import Logo from "@/components/shared/Logo";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-[5.5rem] w-full bg-primary mb-3 flex items-center">
      <div className="mx-auto container flex justify-between">
        <div className="hidden lg:flex">
          <Logo />
        </div>
        <Search placeholder={"Search Products"} />
        <div className="flex gap-6 text-white">
          <span className="relative">
            <FaShoppingCart className="hover:text-secondary transition-all cursor-pointer w-6 h-6"></FaShoppingCart>
            <span className="w-5 h-5 grid place-content-center rounded-full bg-secondary absolute -top-2 -right-3 text-white font-bold">
              0
            </span>
          </span>
          <User />
        </div>
      </div>
    </div>
  );
};

export default Header;
