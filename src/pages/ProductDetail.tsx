
import Products from "@/components/product/Products";
import RightBar from "@/layouts/RightBar";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <div className="mx-auto container">
      <div className="flex gap-6">
        <Products />
        <RightBar />
      </div>
    </div>

  )
};

export default ProductDetail;
