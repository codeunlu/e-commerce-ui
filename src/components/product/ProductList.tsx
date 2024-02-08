import { Product } from "@/utils/type";
import ProductCard from "./ProductCard";
import Pagination from "../shared/Pagination";

type Props = {
  products: Product[];
  loading: boolean;
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  onPrev: () => void;
  onNext: () => void;
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
      <div className="grid grid-cols-3 gap-4">
        {loading && <div>loading</div>}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {!products.length && !loading && <div>Kayıtlar Çekilemedi</div>}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
};
