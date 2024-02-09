import { useDispatch, useSelector } from "react-redux";
import useCallApi from "@hooks/useCallApi";
import { ITEMS_PER_PAGE } from "@services/API";
import { Sidebar, Rightbar } from "@layouts/index";
import { useEffect, useState } from "react";
import { Product } from "@/utils/type";
import { ProductList } from "@components/product/ProductList";

import {
  addProducts,
  productsDataStore,
  selectProducts,
} from "@/store/products/productsSlice";
import { LIMIT_PAGE } from "@/utils/content";

const Home = () => {
  const { call, loading, totalPage } = useCallApi<Product>("products");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [filterTotalPage, setFilterTotalPage] = useState<number>(0);

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { filter } = useSelector(productsDataStore);

  useEffect(() => {
    call("GET", {
      onSuccess: (data: Product[]) => {
        dispatch(addProducts(data));
      },
    });
  }, [dispatch]);

  useEffect(() => {
    const searchText = filter?.toLocaleLowerCase();
    const filteredProducts = products.filter((item) =>
      item.name?.toLocaleLowerCase().includes(searchText)
    );
    setFilterProducts(filteredProducts);
    setFilterTotalPage(LIMIT_PAGE(filteredProducts.length));
  }, [filter, products]);

  useEffect(() => {
    if (filter === undefined || filter?.length === 0) {
      const visibleData = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );
      setFilterProducts(visibleData);
    }
  }, [filter, currentPage, products, dispatch]);

  const onPrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const onNext = () => {
    if (currentPage === totalPage) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-around gap-2">
        <Sidebar />
        <ProductList
          products={filterProducts || []}
          loading={loading}
          totalPage={filterTotalPage > 0 ? filterTotalPage : totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
