import useCallApi from "@/hooks/useCallApi";
import { ITEMS_PER_PAGE } from "@services/API";
import { Sidebar, Rightbar } from "@layouts/index";
import { useEffect, useState } from "react";

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
        console.log("product", products);
        console.log("data", data);
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

  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    console.log("total", getProducts.totalPage);
    if (currentPage === getProducts.totalPage - 1) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-around gap-2">
        <Sidebar />
        <button onClick={handlePrev}>Gerile</button>
        {filterProducts.length &&
          filterProducts.map((item) => <div key={item.id}>{item.name}</div>)}
        <button onClick={handleNext}>İlerle</button>
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
