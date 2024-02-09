import Products from "@/components/product/ProductDetail";
import ErrorMessage from "@/components/shared/ErrorMessage";
import Loading from "@/components/shared/Loading";
import useCallApi from "@/hooks/useCallApi";
import RightBar from "@/layouts/RightBar";
import { Product } from "@/utils/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { call, loading } = useCallApi<Product>("products");
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    call("GET", {
      onSuccess: (data: Product[]) => {
        const getProductId = data.filter((item) => item.id === id)[0];
        setProduct(getProductId);
      },
    });
  }, [id]);

  return (
    <div className="mx-auto container">
      <div className="flex gap-6">
        <div className="flex flex-col">
          {loading && <Loading />}
          {product === undefined && !loading && (
            <ErrorMessage text="Kayıt bulunamadı!" />
          )}
          {product && <Products product={product} />}
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default ProductDetail;
