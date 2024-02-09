import {
  addBasket,
  increase,
  decrease,
  removeBasket,
} from "@/store/baskets/basketsSlice";
import { Basket } from "@/utils/type";
import { useDispatch } from "react-redux";

type Props = {
  product: Basket;
};

const ProductInCart = ({ product }: Props) => {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      dispatch(decrease(product));
    }

    if (product.quantity === 1) {
      dispatch(removeBasket(product));
    }
  };

  const increaseQuantity = () => {
    dispatch(increase(product));
  };

  return (
    <div className="flex justify-between px-2">
      <div className="flex flex-col">
        <h1 className="text-xl">{product.productName}</h1>
        <p className="text-xl text-primary">
          {new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(Number(product.productPrice))}
        </p>
      </div>

      <div className="flex items-center justify-center gap-1">
        <button
          onClick={decreaseQuantity}
          className="text-xl font-semibold bg-gray-200 w-10 h-10"
        >
          -
        </button>
        <p className="flex items-center justify-center text-lg w-10 h-10 bg-primary text-white font-medium">
          {product.quantity}
        </p>
        <button
          onClick={increaseQuantity}
          className="text-xl font-semibold bg-gray-200 w-10 h-10"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductInCart;
