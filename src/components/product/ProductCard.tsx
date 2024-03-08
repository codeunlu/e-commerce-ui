import Button from "@components/button/Button";
import { Basket, Product } from "@/utils/type";
import { Link } from "react-router-dom";
import { addBasket } from "@/store/baskets/basketsSlice";
import { useDispatch } from "react-redux";
import { SlBasket } from "react-icons/sl";

type Props = {
  product: Product;
  onClick?: () => void;
};

const ProductCard = ({ product, onClick }: Props) => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const basket: Basket = {
      productId: product.id,
      productName: product.name,
      productPrice: Number(product.price),
      quantity: 1,
    };
    dispatch(addBasket(basket));
  };

  return (
    <div className="flex flex-col gap-4 border p-2 rounded-md shadow-md">
      <Link key={product.id} to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="mb-2 rounded-md lg:w-64 h-40 object-cover w-full"
          onClick={onClick}
        />
        
      </Link>
      <Link key={product.id} to={`/product/${product.id}`}>
      <h2 className="text-lg text-slate-700 font-medium mb-2">
          {product.name}
        </h2>
      </Link>
      <div className="flex justify-between items-center">
        <p className="text-primary text-lg font-semibold">
          {new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(Number(product.price))}
        </p>
        <div className="flex items-center justify-center gap-1 space-x-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-900 px-4 py-1.5 text-white duration-100">
          <SlBasket className="text-lg" />
          <button onClick={handleAddProduct} className="text-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
