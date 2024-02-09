import ShoppingCart from "@components/shopping-wallet/ShoppingCart";
import ProductInCart from "@components/shopping-wallet/ProductInCart";
import { basketsDataStore } from "@store/baskets/basketsSlice";
import { useSelector } from "react-redux";

const RightBar = () => {
  const { baskets, totalAmount } = useSelector(basketsDataStore);


  return (
    <div className=" flex flex-col gap-y-2 w-[300px] h-screen">
      <ShoppingCart totalPrice={totalAmount}>
        {baskets.length >= 1 &&
          baskets.map((basket) => (
            <ProductInCart key={basket.productId} product={basket} />
          ))}
      </ShoppingCart>
    </div>
  );
};

export default RightBar;
