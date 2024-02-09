import Button from "@components/button/Button";
import { Product } from "@/utils/type";

type Props = {
  product: Product;
  onClick?: () => void;
};

const ProductCard = ({ product, onClick }: Props) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="mb-2 rounded-md lg:w-64 h-40 object-cover w-full"
        onClick={onClick}
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-primary mb-2">{product.price}$</p>
      <Button addClass="bg-secondary text-white">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
