import { basketsDataStore } from "@/store/baskets/basketsSlice";
import { IoWalletOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function HeaderShopping() {
  const { totalAmount } = useSelector(basketsDataStore);

  return (
    <div className="flex items-center gap-2">
      <IoWalletOutline className="w-8 h-8"></IoWalletOutline>
      <div className="text-xl font-bold">
        {new Intl.NumberFormat("tr-TR", {
          style: "currency",
          currency: "TRY",
        }).format(totalAmount)}
      </div>
    </div>
  );
}
