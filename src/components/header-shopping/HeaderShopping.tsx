import { IoWalletOutline } from "react-icons/io5";


export default function HeaderShopping() {
  
  return (
    <div className="flex items-center gap-2">
      <IoWalletOutline className="w-8 h-8"></IoWalletOutline>
      <div className="text-xl font-bold">117.000$</div>
    </div>
  );
}
