import ShoppingCart from "@/components/shoppingCart";
import ProductInCart from "@/components/shoppingCart/ProductInCart";
import React from "react";

type Props = {};

const RightBar = (props: Props) => {
  return <div className=" flex flex-col gap-y-2 w-[300px] h-screen">
    <ShoppingCart>
      <ProductInCart price="12.000₺" product="iphone 11"/>
      <ProductInCart price="18.000₺" product="Lenovo Pc"/>
      <ProductInCart price="15.000₺" product="İphone 12" />
    </ShoppingCart>
  </div>;
};

export default RightBar;
