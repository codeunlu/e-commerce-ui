import useCallApi from "@/hooks/useCallApi";
import { ITEMS_PER_PAGE } from "@services/API";
import { Sidebar, Rightbar } from "@layouts/index";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";

type Product = {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
};

const Home = () => {
  const getProducts = useCallApi<Product>("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getProducts.call("GET", {
      onSuccess: (data: Product[]) => {
        setProducts(data);
      },
    });
  }, []);

  useEffect(() => {
    const visibleData = products.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
    setFilterProducts(visibleData);
  }, [currentPage, products]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-around gap-2">
        <Sidebar />
        <div className="flex flex-col gap-y-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
          {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
          </div>
        <Pagination currentPage={currentPage} totalPage={getProducts.totalPage} onPageChange={handlePageChange} />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
