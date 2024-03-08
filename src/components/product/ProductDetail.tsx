import Button from "@components/button/Button";
import { Basket, Product } from "@/utils/type";
import { addBasket } from "@/store/baskets/basketsSlice";
import { useDispatch } from "react-redux";
import { SlBasket } from "react-icons/sl";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
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
    <div>
      <div className="flex gap-8 h-[600px] shadow-md rounded-md shadow-slate-500 py-10 px-4">
        <img
          src={product.image}
          alt=""
          className=" bg-gray-300 w-[500px] h-[500px]"
        />
        <div className="flex flex-col py-6 justify-between gap-8 w-[600px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl">{product.name}</h1>
            
          </div>
          <div className="flex justify-between gap-9">
          <h1 className="text-2xl text-primary">{product.price}$</h1>
          <div className="flex items-center justify-center gap-1 space-x-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-900 px-4 py-1.5 text-white duration-100">
        <SlBasket className="text-lg"/>
            <button onClick={handleAddProduct} className="text-lg">Add to cart</button>
          </div>
            
          </div>
          <p className={"text-xl max-h-[260px] overflow-y-auto"}>
              {product.description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
