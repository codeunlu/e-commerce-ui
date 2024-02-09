import ShoppingCart from "@/components/shoppingWallet/ShoppingCart";
import ProductInCart from "@/components/shoppingWallet/ProductInCart";

type Props = {};

const RightBar = (props: Props) => {
  return <div className=" flex flex-col gap-y-2 w-[300px] h-screen">
    <ShoppingCart totalPrice="117000₺">
      <ProductInCart price="12000₺" product="iphone 11"/>
      <ProductInCart price="18000₺" product="Lenovo Pc"/>
      <ProductInCart price="15000₺" product="İphone 12" />
    </ShoppingCart>
  </div>;
};

export default RightBar;
