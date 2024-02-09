import Button from "@components/button/Button";
import { Basket, Product } from "@/utils/type";
import { Link } from "react-router-dom";
import { addBasket } from "@/store/baskets/basketsSlice";
import { useDispatch } from "react-redux";

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
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <Link key={product.id} to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="mb-2 rounded-md lg:w-64 h-40 object-cover w-full"
          onClick={onClick}
        />
        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      </Link>
      <p className="text-primary mb-2">
        {new Intl.NumberFormat("tr-TR", {
          style: "currency",
          currency: "TRY",
        }).format(Number(product.price))}
      </p>
      <Button onClick={handleAddProduct} addClass="bg-secondary text-white">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
