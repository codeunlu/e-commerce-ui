import { FaShoppingCart } from "react-icons/fa";

export default function HeaderShopping() {
  return (
    <span className="relative">
      <FaShoppingCart className="hover:text-secondary transition-all cursor-pointer w-6 h-6"></FaShoppingCart>
      <span className="w-5 h-5 grid place-content-center rounded-full bg-secondary absolute -top-2 -right-3 text-white font-bold">
        0
      </span>
    </span>
  );
}
