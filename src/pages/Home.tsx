import useCallApi from "@/hooks/useCallApi";
import { Sidebar, Rightbar } from "@layouts/index";
import { useEffect } from "react";

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

  useEffect(() => {
    getProducts.call("GET", {
      onSuccess: (data: Product) => {
        console.log("data", data);
      },
    });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-around gap-2">
        <Sidebar />
        demo demo
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
