import { Product } from "@/utils/type";
import ProductCard from "./ProductCard";
import Pagination from "@components/shared/Pagination";
import Loading from "@components/shared/Loading";
import ErrorMessage from "@components/shared/ErrorMessage";
import { Link } from "react-router-dom";

type Props = {
  products: Product[];
  loading: boolean;
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  onPrev: () => void;
  onNext: () => void;
  onItemClick?: () => void;
};

export const ProductList = ({
  products,
  loading,
  totalPage,
  currentPage,
  setCurrentPage,
  onPrev,
  onNext,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-6 mb-6">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
        {loading && <Loading />}
        {products &&
          products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        {!products.length && !loading && (
          <ErrorMessage text="Kayıt Bulunamadı!" />
        )}
      </div>
      {!loading && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
};
