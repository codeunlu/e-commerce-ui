import { useEffect, useState } from "react";
import useCallApi from "@/hooks/useCallApi";
import ProductDetailList from "@/components/product/ProductDetailList";
import RightBar from "@/layouts/RightBar";
import { Product } from "@/utils/type";

const ProductDetail = () => {
  const { call } = useCallApi<Product>("products");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    call("GET", {
      onSuccess: (data: Product[]) => {
        setProducts(data);
      },
    });
  }, []);

  // Sort products by ID
  const sortedProducts = [...products].sort((a, b) => a.id - b.id);

  return (
    <div className="mx-auto container">
      <div className="flex gap-6">
        <ProductDetailList products={sortedProducts} />
        <RightBar />
      </div>
    </div>
  );
};

export default ProductDetail;
